import { NextAuthOptions } from 'next-auth';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from './db';

export const authOption: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    Google({
      clientId: process.env.Google_CLIENT_ID!,
      clientSecret: process.env.Google_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  adapter: PrismaAdapter(db),
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
};

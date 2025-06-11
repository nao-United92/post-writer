import { getToken } from 'next-auth/jwt';
import withAuth from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default withAuth(async function middleware(req) {
  const token = await getToken({ req });
});

export const config = {
  matcher: ['/dashboard/:path', '/editor/:path', '/login", "/register'],
};

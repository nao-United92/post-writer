import { authOption } from '@/lib/auth';
import { db } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOption);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { user } = session;

    const json = await req.json();

    const post = await db.post.create({
      data: {
        title: 'Untitled',
        content: '',
        published: false,
        authorId: user.id,
      },
    });
  } catch (err) {}
}

import DashboardHeader from '@/components/dashboard-header';
import DashboardShell from '@/components/dashboard-shell';
import PostCreateButton from '@/components/post-create-button';
import { db } from '@/lib/db';
import { getCurrenUser } from '@/lib/session';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await getCurrenUser();

  if (!user) {
    redirect('/login');
  }

  const posts = db.post.findMany({
    where: {
      authorId: user.id,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });

  return (
    <DashboardShell>
      <DashboardHeader heading="記事投稿" text="記事の投稿と管理">
        <PostCreateButton />
      </DashboardHeader>
    </DashboardShell>
  );
}

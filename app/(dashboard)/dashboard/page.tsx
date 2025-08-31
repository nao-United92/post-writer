import DashboardHeader from '@/components/dashboard-header';
import DashboardShell from '@/components/dashboard-shell';
import PostCreateButton from '@/components/post-create-button';
import PostItem from '@/components/post-item';
import db from '@/lib/db';
import { EmptyPlaceholder } from '@/components/empty-placeholder';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  const posts = await db.post.findMany({
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
      <DashboardHeader heading="記事投稿">
      </DashboardHeader>
      <div>
        {posts.length ? (
          <div className="divide-y rounded-md border shadow-sm">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder
            icon="post"
            title="投稿がありません"
            description="記事を作成してください"
          >
            <EmptyPlaceholder.Actions>
              <PostCreateButton variant="outline" />
            </EmptyPlaceholder.Actions>
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  );
}

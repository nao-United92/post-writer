import DashboardHeader from '@/components/dashboard-header';
import DashboardShell from '@/components/dashboard-shell';
import PostCreateButton from '@/components/post-create-button';

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="記事投稿"
        text="記事の投稿と管理"
      >
        <PostCreateButton />
      </DashboardHeader>
    </DashboardShell>
  );
}

import { Post } from '@/generated/prisma';
import Link from 'next/link';

interface PostItemProps {
  post: Pick<Post, 'id' | 'title' | 'published' | 'createdAt'>;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/editor/${post.id}`}
          className="font-semibold hover:underline"
        >
          {post.title}
        </Link>
      </div>
    </div>
  );
}

import Editor from '@/components/editor';
import { Post, User } from '@/generated/prisma';
import db from '@/lib/db';
import { getCurrentUser } from '@/lib/session';
import { notFound, redirect } from 'next/navigation';

interface EditorProps {
  params: {
    postId: string;
  };
}

async function getPostForUser(postId: Post['id'], userId: User['id']) {
  const post = await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });

  return post;
}

export default async function EditorPage({ params }: EditorProps) {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }
  const userId = user?.id;

  const postId = params.postId;

  let postData: Pick<Post, 'id' | 'title' | 'content' | 'published'>;

  if (postId === 'new') {
    postData = {
      // @ts-expect-error: id can be undefined for new post
      id: undefined,
      title: '新しい記事',
      content: null,
      published: false,
    };
  } else {
    const fetchedPost = await getPostForUser(postId, userId);

    if (!fetchedPost) {
      notFound();
    }

    postData = {
      id: fetchedPost.id,
      title: fetchedPost.title,
      content: fetchedPost.content,
      published: fetchedPost.published,
    };
  }

  return (
    <>
      <Editor post={postData} isNewPost={postId === 'new'} />
    </>
  );
}

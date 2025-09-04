'use client';

import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import TextareaAutosize from 'react-textarea-autosize';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import Code from '@editorjs/code';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Post } from '@/generated/prisma';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { postPatchSchema, postPatchSchemaType } from '@/lib/validations/post';
import { Icon } from './icon';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
interface EditorProps {
  post: Pick<Post, 'id' | 'title' | 'content' | 'published'>;
  isNewPost?: boolean;
}

export default function Editor({ post, isNewPost }: EditorProps) {
  const router = useRouter();
  const ref = useRef<EditorJS>();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const initializeEditor = useCallback(async () => {
    const body = postPatchSchema.parse(post);

    const editor = new EditorJS({
      holder: 'editor',
      onReady() {
        ref.current = editor;
      },
      placeholder: 'ここに記事を書く',
      inlineToolbar: true,
      data: body.content,
      tools: {
        header: Header,
        linkTool: LinkTool,
        list: List,
        code: Code,
      },
    });
  }, [post]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      initializeEditor();
    }

    return () => {
      ref.current?.destroy();
      ref.current = undefined;
    };
  }, [isMounted, initializeEditor]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<postPatchSchemaType>({
    resolver: zodResolver(postPatchSchema),
    defaultValues: {
      title: post.title,
    },
  });

  const onSubmit = async (data: postPatchSchemaType) => {
    setIsSaving(true);
    const blocks = await ref.current?.save();

    let response;
    if (post.id) {
      // Existing post: PATCH request
      response = await fetch(`/api/posts/${post.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: data.title,
          content: blocks,
          published: true,
        }),
      });
    } else {
      // New post: POST request
      response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: data.title,
          content: blocks,
          published: true,
        }),
      });
    }

    setIsSaving(false);

    if (!response.ok) {
      return toast.error('問題が発生しました。', {
        description:
          'あなたの記事は保存されませんでした。もう一度お試しください。',
      });
    }

    // Redirect to dashboard after successful save/publish
    router.push('/dashboard');

    toast.success('正常に保存されました。', {
      description: '正常に保存されました。',
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full gap-10">
        <div className="flex w-full items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-10">
            <Link
              href={'/dashboard'}
              className={cn(buttonVariants({ variant: 'ghost' }))}
            >
              戻る
            </Link>
          </div>
          <button className={cn(buttonVariants())} type="submit">
            {isSaving && <Icon.spinner className="w-4 h-4 animate-spin" />}
            <span>公開</span>
          </button>
        </div>
        <div className="w-[800px] mx-auto">
          <TextareaAutosize
            id="title"
            autoFocus
            defaultValue={post.title}
            placeholder="Post Title"
            className="w-full resize-none overflow-hidden bg-transparent text-5xl focus:outline-none font-bold"
            {...register('title')}
          />
        </div>
        <div id="editor" className="min-h-[500px]" />
      </div>
    </form>
  );
}

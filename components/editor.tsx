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
interface EditorProps {
  post: Pick<Post, 'id' | 'title' | 'content' | 'published'>;
}

export default function Editor({ post }: EditorProps) {
  const ref = useRef<EditorJS>();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const initializeEditor = useCallback(async () => {
    const editor = new EditorJS({
      holder: 'editor',
      onReady() {
        ref.current = editor;
      },
      placeholder: 'ここに記事を書く',
      inlineToolbar: true,
      tools: {
        header: Header,
        linkTool: LinkTool,
        list: List,
        code: Code,
      },
    });
  }, []);

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
  });

  const onSubmit = async (data: postPatchSchemaType) => {
    const blocks = await ref.current?.save();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full gap-10">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link
              href={'/dashboard'}
              className={cn(buttonVariants({ variant: 'ghost' }))}
            >
              戻る
            </Link>
            <p className="text-sm text-muted-foreground">公開</p>
          </div>
          <button className={cn(buttonVariants())} type="submit">
            <span>保存</span>
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
        <p className="text-sm text-gray-500">
          Use
          <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
            Tab
          </kbd>
          to open the command menu
        </p>
      </div>
    </form>
  );
}

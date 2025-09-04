'use client';

import { cn } from '@/lib/utils';
import { ButtonProps, buttonVariants } from './ui/button';
import { useState } from 'react';
import { Icon } from './icon';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type PostCreateButtonProps = ButtonProps;

export default function PostCreateButton({
  className,
  variant,
  ...props
}: PostCreateButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = () => {
    router.push('/editor/new');
  };

  return (
    <button
      className={cn(
        buttonVariants({ variant }),
        { 'cursor-not-allowed opacity-60': isLoading },
        className
      )}
      onClick={onClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icon.spinner className="animate-spin mr-2 h-4 w-4" />
      ) : (
        <Icon.add className="mr-2 h-4 w-4" />
      )}
      投稿する
    </button>
  );
}

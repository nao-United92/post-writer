'use client';

import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Icon } from './icon';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function UserAuthForm({ buttonText }: { buttonText?: string }) {
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const [isEmailLoading, setIsEmailLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsEmailLoading(true);
    setError(null); // Clear previous errors

    const result = await signIn('credentials', {
      email,
      redirect: false,
      callbackUrl: '/dashboard',
    });

    setIsEmailLoading(false);

    if (!result?.ok) {
      setError(result?.error || 'Unknown error occurred.');
      console.error(result?.error);
    } else {
      // If sign-in is successful, you might want to redirect manually
      // or show a success message.
      // For now, let's assume a successful sign-in means the user is authenticated.
      // You might want to use `router.push` here if you want to redirect.
    }
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isEmailLoading || isGithubLoading || isGoogleLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={cn(buttonVariants())}
            disabled={isEmailLoading || isGithubLoading || isGoogleLoading}
          >
            {isEmailLoading && (
              <Icon.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {buttonText || 'ログイン'}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="text-muted-foreground px-2 bg-background">
            または
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="button"
          className={cn(buttonVariants({ variant: 'outline' }))}
          onClick={() => {
            setIsGithubLoading(true);
            signIn('github');
          }}
          disabled={isEmailLoading || isGithubLoading || isGoogleLoading}
        >
          {isGithubLoading ? (
            <Icon.spinner className="mr-2 animate-spin" />
          ) : (
            <Icon.github className="mr-2" />
          )}
          Github
        </button>

        <button
          type="button"
          className={cn(buttonVariants({ variant: 'outline' }))}
          onClick={() => {
            setIsGoogleLoading(true);
            signIn('google');
          }}
          disabled={isEmailLoading || isGithubLoading || isGoogleLoading}
        >
          {isGithubLoading ? (
            <Icon.spinner className="mr-2 animate-spin" />
          ) : (
            <Icon.google className="mr-2" />
          )}
          Google
        </button>
      </div>
    </div>
  );
}

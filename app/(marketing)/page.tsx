import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12 relative">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link
            href={siteConfig.links.x}
            className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm flex items-center gap-2"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 9.4 0 4.6-4.4 8.4-9.8 8.4-5.5 0-9.8-3.8-9.8-8.4 0-2.3.9-4.3 2.5-6 .1-.1.2-.2.2-.3-.2-.2-.4-.3-.5-.4-1.3-1.1-2.2-2.8-2.2-4.8 0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8 0 .4-.1.8-.2 1.2.2.1.4.3.6.4.2.2.4.4.6.6.6.6 1.3 1.1 2.1 1.5.2.1.4.2.6.3.2.1.4.2.6.2.2.1.4.1.6.1.2 0 .4 0 .6-.1.2-.1.4-.1.6-.2.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.-2.2 2.1-4.8 3.6-7.4 3.6-2.6 0-4.8-1.6-4.8-3.6z" />
            </svg>
            Xで最新情報をフォロー
          </Link>
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            最高の文章を、最高の速度で
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            Post
            Writerは、Next.jsとVercelの力を最大限に活用したブログプラットフォームです。
            インスピレーションが湧いたその瞬間に、美しい記事を公開しましょう。
          </p>
          <div className="space-x-4">
            <Link
              href={'/login'}
              className={cn(buttonVariants({ size: 'lg' }))}
            >
              今すぐはじめる
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github mr-2"
              >
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.1 0-1.3-.5-2.4-1.3-3.2.1-.3.5-1.5-.1-3.2 0 0-1.1-.3-3.5 1.3-.9-.2-1.9-.3-2.9-.3s-2 .1-2.9.3C6.1 4.4 5 4.7 5 4.7c-.6 1.7-.2 2.9-.1 3.2-.8.8-1.3 1.9-1.3 3.2 0 4.7 2.7 5.8 5.5 6.1-.6.5-1 1.4-1 2.8v4.2" />
              </svg>
              Github
            </Link>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 to-transparent"
        />
      </section>

      <section
        id="features"
        className="container py-12 md:py-16 lg:py-24 space-y-16 border-t"
      >
        <div className="text-center space-y-6 max-w-[58rem] mx-auto">
          <h2 className="font-bold text-3xl md:text-6xl">サービスの特徴</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            Post
            Writerは、モダンな技術スタックで構築されており、最高の執筆体験を提供します。
          </p>
        </div>

        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[64rem]">
          <div className="bg-background border p-4 rounded-lg transition-all hover:shadow-md">
            <div className="flex flex-col justify-center p-8 h-[180px] gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-edit"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Markdown対応</h3>
                <p className="text-sm text-muted-foreground">
                  Markdown記法で、表現力豊かな記事を簡単に作成できます。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-4 rounded-lg transition-all hover:shadow-md">
            <div className="flex flex-col justify-center p-8 h-[180px] gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">ユーザー認証</h3>
                <p className="text-sm text-muted-foreground">
                  安全な認証機能で、あなただけのダッシュボードを利用できます。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-4 rounded-lg transition-all hover:shadow-md">
            <div className="flex flex-col justify-center p-8 h-[180px] gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-layout-dashboard"
              >
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">ダッシュボード</h3>
                <p className="text-sm text-muted-foreground">
                  記事の管理や新規作成が直感的に行えるダッシュボード。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-4 rounded-lg transition-all hover:shadow-md">
            <div className="flex flex-col justify-center p-8 h-[180px] gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bolt"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">高速な動作</h3>
                <p className="text-sm text-muted-foreground">
                  Next.jsによる高速なページ遷移と快適な操作性を実現。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-4 rounded-lg transition-all hover:shadow-md">
            <div className="flex flex-col justify-center p-8 h-[180px] gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-figma"
              >
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">美しいUI</h3>
                <p className="text-sm text-muted-foreground">
                  Tailwind CSSとshadcn/uiで構築された美しいデザイン。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-4 rounded-lg transition-all hover:shadow-md">
            <div className="flex flex-col justify-center p-8 h-[180px] gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">SEO対策</h3>
                <p className="text-sm text-muted-foreground">
                  検索エンジンに最適化され、あなたの記事がより多くの人に届きます。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto md:max-w-[58rem] text-center">
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            Post Writerはログインするとブログ投稿ができるようになります。
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="container py-8 md:py-12 lg:py-24 border-t"
      >
        <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4 items-center">
          <h2 className="font-bold text-3xl md:text-6xl">Contact Me</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7 max-w-[42rem]">
            このWebサービスに関するご意見や、お仕事のご依頼は下記XのDMまでお気軽にご連絡ください。
          </p>
          <Link
            href={siteConfig.links.x}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'flex items-center gap-2'
            )}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 9.4 0 4.6-4.4 8.4-9.8 8.4-5.5 0-9.8-3.8-9.8-8.4 0-2.3.9-4.3 2.5-6 .1-.1.2-.2.2-.3-.2-.2-.4-.3-.5-.4-1.3-1.1-2.2-2.8-2.2-4.8 0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8 0 .4-.1.8-.2 1.2.2.1.4.3.6.4.2.2.4.4.6.6.6.6 1.3 1.1 2.1 1.5.2.1.4.2.6.3.2.1.4.2.6.2.2.1.4.1.6.1.2 0 .4 0 .6-.1.2-.1.4-.1.6-.2.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.d=-2.2 2.1-4.8 3.6-7.4 3.6-2.6 0-4.8-1.6-4.8-3.6z" />
            </svg>
            Xで連絡する
          </Link>
        </div>
      </section>
    </>
  );
}

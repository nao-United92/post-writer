'use client';

import MainNav from '@/components/main-nav';
import SiteFooter from '@/components/site-footer';
import { buttonVariants } from '@/components/ui/button';
import { marketingConfig } from '@/config/marketing';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      <header className="z-40 bg-background">
        <div className="container mx-auto flex h-20 items-center py-2">
          {!pathname.startsWith('/editor/new') && (
            <MainNav items={marketingConfig.mainNav} />
          )}
        </div>
      </header>
      <main className="container max-w-4xl mx-auto py-6 lg:py-10">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

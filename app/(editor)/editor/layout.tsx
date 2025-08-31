'use client';

import SiteFooter from '@/components/site-footer';

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="grid flex-1 gap-12">
        <main className="flex flex-col w-full flex-1 overflow-hidden">
          {children}
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}

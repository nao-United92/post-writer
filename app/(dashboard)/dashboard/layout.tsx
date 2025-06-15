import MainNav from '@/components/main-nav';
import SiteFooter from '@/components/site-footer';
import { buttonVariants } from '@/components/ui/button';
import { marketingConfig } from '@/config/marketing';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen flex-col space-y-6'>
      <header className="sticky top-0 z-40 border-b bg-background">
        <div>
          <MainNav items={marketingConfig.mainNav}/>
        </div>
      </header>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

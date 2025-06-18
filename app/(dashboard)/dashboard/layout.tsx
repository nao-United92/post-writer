import DashboardNav from '@/components/dashboard-nav';
import MainNav from '@/components/main-nav';
import SiteFooter from '@/components/site-footer';
import { buttonVariants } from '@/components/ui/button';
import { dashboardConfig } from '@/config/dashboard';
import { marketingConfig } from '@/config/marketing';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="constainer mx-auto grid items-center gap-10 py-8">
      {children}
    </div>
  );
}

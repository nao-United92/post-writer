import { Link } from 'lucide-react';
import { Icon, Icon as Icons } from '@/components/ui/icon';

interface DashboardNavProps {
  items: SidebarNavItems[];
}

export default function DashboardNav({ items }: DashboardNavProps) {
  return (
    <nav>
      {items.map((item, index) => {
        const Icon = Icons[item.icon || 'arrowRight'];
        return (
          <Link href={item.href} key={index}>
            <span
              className={`flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground`}
            >
              <Icon />
              {item.title}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

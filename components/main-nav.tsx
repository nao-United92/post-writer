'use client';

import { NavItem } from '@/types';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import MobileNav from './mobile-nav';
import { Button } from './ui/button'; // Import Button component

interface MainNavProps {
  items: NavItem[];
  children?: ReactNode;
}

export default function MainNav({ items }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="flex w-full items-center justify-between">
      {' '}
      {/* Added w-full and justify-between */}
      <div className="flex items-center md:gap-10">
        {' '}
        {/* Group left items */}
        <Link href={'/'} className="hidden md:flex items-center space-x-2">
          <span className="font-bold hidden sm:inline-block">Post Writer</span>
        </Link>
        <nav className="md:flex gap-6 hidden">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-lg sm:text-sm font-medium hover:text-foreground/80"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        {' '}
        {/* Group right items */}
        <Link href="/login">
          {' '}
          {/* Link for Login button */}
          <Button>ログイン</Button>
        </Link>
        <button
          className="md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <span>メニュー</span>
        </button>
      </div>
      {showMobileMenu && <MobileNav items={items} />}
    </div>
  );
}

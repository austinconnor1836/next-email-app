// /app/_components/navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// interface NavBarProps {
  // onToggleSplitView: () => void;
  // onThemeSwitch: () => void;
// }

// const Navbar: React.FC<NavBarProps> = ({ onToggleSplitView, onThemeSwitch }) => {
const Navbar: React.FC = () => {
  const pathname = usePathname();

  // Check if the current route is the root (/)
  const isRootRoute = pathname === '/';

  return (
    <nav className="dark:bg-slate-900 dark:text-slate-400 fixed top-0 left-0 z-50 w-full p-4 shadow-lg">
    {/* // <nav className="fixed top-0 left-0 z-50 w-full p-4 bg-white/70 shadow-lg backdrop-blur-sm"> */}
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/posts" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Curious?
          </Link>
        </div>
        <div className="relative flex space-x-4">
          <button
            // onClick={onThemeSwitch}
            className="switch"
          >
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

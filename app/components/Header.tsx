"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className='bg-bg-base text-primary font-mono uppercase tracking-[1.4px] text-sm border-b border-border-default sticky top-0 z-[1000]'>
      <div className='flex justify-between items-center w-full max-w-[1200px] mx-auto px-8 py-6'>
        <Link
          href='/'
          className='font-mono font-bold tracking-tighter text-white text-xl'
        >
          MINSANG_DEV
        </Link>
        <div className='hidden md:flex gap-8'>
          <Link
            href='/blog'
            className={`transition-opacity duration-200 hover:opacity-50 ${pathname.includes("/blog") ? "opacity-100" : "opacity-70"}`}
          >
            POSTS
          </Link>
          {/* <Link 
            href="/projects" 
            className={`transition-opacity duration-200 hover:opacity-50 ${pathname.includes('/projects') ? 'opacity-100' : 'opacity-70'}`}
          >
            PROJECTS
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;

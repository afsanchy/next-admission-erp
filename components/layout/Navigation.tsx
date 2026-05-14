'use client';

import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/enrollment', label: 'Enroll' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-neutral-900 shadow-md">
      <ul className="flex justify-center items-center max-w-full mx-auto flex-wrap">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={`inline-block px-6 py-4 text-sm md:text-base font-semibold transition-all ${
                  isActive
                    ? 'text-white bg-white/10 border-b-4 border-white pb-3'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

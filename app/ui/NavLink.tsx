'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();

  const active = pathname === href
    ? 'text-[#b05b74] font-semibold'
    : 'text-[#fffff1] hover:text-[#b05b74] transition-colors duration-200 text-xl';

  return (
    <Link href={href} className={`block py-2 px-4 ${active}`}>
      {label}
    </Link>
  );
}
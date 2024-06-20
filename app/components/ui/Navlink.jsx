'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, ...rest }) => {
  const pathname = usePathname(); //тут отримали шлях
  const isActive = href === pathname; //ту порівняли

  return (
    <Link className={isActive ? 'text-cyan-300' : ''} href={href} {...rest} />
  );
};
export default NavLink;

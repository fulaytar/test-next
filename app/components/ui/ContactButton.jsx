'use client';

import { usePathname, useRouter } from 'next/navigation';

const ContactButton = () => {
  const pathname = usePathname(); //тут отримали шлях
  const isActive = '/contact' === pathname; //ту порівняли true or false

  const router = useRouter(); //пов'язаний з кешом/http

  function handleClick() {
    router.push('/contact');
  }

  return (
    <button className={isActive ? 'text-cyan-300' : ''} onClick={handleClick}>
      Contacts
    </button>
  );
};

export default ContactButton;

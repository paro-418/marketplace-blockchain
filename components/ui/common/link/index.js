import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ActiveLink({ children, href }) {
  const { pathname } = useRouter();
  return (
    <Link
      href={href}
      className={`${pathname === href ? 'font-extrabold ' : ''}`}
    >
      {children}
    </Link>
  );
}

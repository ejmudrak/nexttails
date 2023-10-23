import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BackButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className='absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl border-[1px]'
    >
      <ArrowLeft size={24} />
    </Link>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {

  return (
    <main className="bg-neutral-100 min-h-screen bg-slate-300">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center bg-blue-400">
          <Image src="/logo.svg" alt="logo" width={152} height={56} />
          <Button asChild variant="secondary">
            <Link href="sign-up">
              Logout
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">{children}</div>
      </div>
    </main>
  );
};

export default AuthLayout;
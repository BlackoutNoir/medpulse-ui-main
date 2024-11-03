'use client';

import React from 'react';
import { ContactProvider } from '../../contexts/ContactContext'; // Adjust the path as necessary
import ChatNav from '@/features/chats/components/ChatNav';
import { ReactNode } from 'react';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  // const session = await getServerSession(authOptions)
  // if(!session) notFound()

  return (
    <ContactProvider>
      <ChatNav />
      <main className="p-4">{children}</main>
    </ContactProvider>
  );
};

export default Layout;

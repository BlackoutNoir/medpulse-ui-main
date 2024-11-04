import React from 'react';
import { ContactProvider } from '../../contexts/ContactContext'; // Adjust the path as necessary
import ChatNav from '@/features/chats/components/ChatNav';
import { ReactNode } from 'react';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import Chats from '@/features/chats/components/Chats';
import { Separator } from '@/components/ui/separator';
import { fetchRedis } from '@/helpers/redis';
import { getContactsByUserId } from '@/helpers/get-contacts-by-id';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  const session = await getServerSession(authOptions)
  if (!session) notFound()

  const contacts = await getContactsByUserId(session.user.id)
  console.log('contacts', contacts)

  const unseenRequestCount = (
    (await fetchRedis(
      'smembers',
      `user:${session.user.id}:incoming_contact_requests`
    )) as User[]
  ).length

  return (
    <ContactProvider>
      <ChatNav />
      <div className="flex flex-col md:flex-row h-screen p-2">
        {/* Desktop view */}
        <div className="hidden md:block w-1/3 p-4 border-r">
          <Chats />
        </div>
        <Separator className="hidden md:block h-full" orientation="vertical" />
        {/* Chat Content */}
        <div className="hidden md:flex flex-1 p-4">{children}</div>

        {/* Mobile view */}
        <div className="md:hidden p-2">
          <Chats />
        </div>
      </div>
    </ContactProvider>
  );
};

export default Layout;

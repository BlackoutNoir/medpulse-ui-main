import React, { ReactNode } from 'react';
import ChatNav from '@/features/chat/components/ChatNav';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <ChatNav />
      <main className="p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;

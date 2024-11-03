import React, { ReactNode } from 'react';
import TextBar from '@/features/chats/components/TextBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;

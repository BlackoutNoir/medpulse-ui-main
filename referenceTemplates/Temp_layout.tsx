import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] });
//import { UserProvider } from '@/utils/userContext'

export default function layout({ children }) {
  const name = 'MedPulse';
  const pathname = usePathname();
  const [showLayout, setShowLayout] = useState(true);

  useEffect(() => {
    if (pathname.includes('/login')) {
      setShowLayout(false);
    } else {
      setShowLayout(true);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          {showLayout && <Navbar />}
          <main className="flex-grow">{children}</main>
          {showLayout && <Footer />}
        </UserProvider>
        <CookieConsentPopup />
      </body>
    </html>
  );
}

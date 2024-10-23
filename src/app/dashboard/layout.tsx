import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="p-4 bg-blue-200">
          <nav className="bg-red-100 flex justify-between items-center">
            <Image src="/logo.svg" alt="logo" width={152} height={56} />
            <Button variant="secondary">Logout</Button>
          </nav>
          
          <SidebarTrigger />

          <div className="bg-neutral-500">
            {children}
          </div>
        </div>

     
        
      </main>
    </SidebarProvider>
  );
}

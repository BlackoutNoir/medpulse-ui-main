import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Menu,
  UserPlus,
  UserPlus2,
  Home,
  MessageSquarePlus,
  CirclePlus,
  SquarePlus,
} from 'lucide-react'; // Import the House icon

const ChatNav: React.FC = () => {
  return (
    <nav className="bg-white border-b p-3 flex items-center justify-between">
      <div className="flex items-center">
        <div className="hidden md:flex space-x-2 mr-4">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          {/* <Button variant="ghost" className="w-full justify-start">
            <MessageSquarePlus className="mr-2 h-4 w-4" />
            New Chat
          </Button> */}
          <div className="w-4"></div>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden bg-blue-700 text-white rounded-3xl hover:bg-blue-700">
                <Menu className="h-6 w-6 bg-blue-700 text-white" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Quick actions for your chat app.</SheetDescription>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <UserPlus className="mr-2 h-4 w-4" />
                  New Chat
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Contact
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <UserPlus2 className="mr-2 h-4 w-4" />
                  Contact Requests
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="text-xl font-bold">Chats</div>
      <div className="flex items-center">
        <div className="w-4"></div>
        <div className="hidden md:flex space-x-2 mr-4">
          <Button variant="ghost">
            <UserPlus className="mr-2 h-4 w-4" />
            Add Contact
          </Button>
          <Button variant="ghost">
            <UserPlus2 className="mr-2 h-4 w-4" />
            Contact Requests
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default ChatNav;

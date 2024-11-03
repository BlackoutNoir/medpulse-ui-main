'use client';

import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Contact {
  id: string;
  name: string;
  profilePicture: string;
}

interface ChatContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ChatContactCardProps> = ({ contact }) => {
  return (
    <Link href={`/chats/${contact.id}`}>
      <Card className="shadow-none hover:bg-gray-50 transition-bg cursor-pointer duration-200 border-t rounded-none flex justify-between items-center">
        <CardContent className="flex items-center py-4">
          <Avatar className="mr-4 h-14 w-14">
            <AvatarImage src={contact.profilePicture} alt={contact.name} />
            <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold">{contact.name}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {/* {truncatedMessage} */}
            </CardDescription>
          </div>
        </CardContent>
        <ChevronRight className="h-6 w-6 mr-2 text-blue-700" />
      </Card>
    </Link>
  );
};

export default ContactCard;

'use client';

import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';

interface Contact {
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  profilePicture: string;
}

interface ChatContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ChatContactCardProps> = ({ contact }) => {
  return (
    <Card className="shadow-none hover:bg-gray-50 transition-bg cursor-pointer duration-200 border-t  rounded-none">
      <CardContent className="flex items-center py-4">
        <Avatar className="mr-4 h-14 w-14">
          <AvatarImage src={contact.profilePicture} alt={contact.name} />
          <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-lg font-semibold">{contact.name}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {contact.lastMessage}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;

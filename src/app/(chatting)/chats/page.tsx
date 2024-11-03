'use client';

import React, { useState } from 'react';
import ContactCard from '@/features/chats/components/ContactCard';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MessageCirclePlus } from 'lucide-react';

const ChatsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const contacts = [
    {
      id: 'john-doe',
      name: 'John Doe',
      lastMessage: 'Hey! How are you?',
      lastMessageTime: '10:30 AM',
      profilePicture: 'link',
    },
    {
      id: 'jane-smith',
      name: 'Jane Smith',
      lastMessage: 'Looking forward to our meeting!',
      lastMessageTime: 'Yesterday',
      profilePicture: 'link',
    },
    {
      id: 'mike-johnson',
      name: 'Mike Johnson',
      lastMessage: 'Can we reschedule our appointment?',
      lastMessageTime: '2 hours ago',
      profilePicture: 'link',
    },
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Chat</h1>
        <Button
          variant="outline"
          className="justify-start bg-blue-700 text-white hover:bg-blue-800 hover:text-white shadow-none transition-all ease-in-out duration-300"
        >
          <MessageCirclePlus className="h-4 w-4" />
          New Chat
        </Button>
      </div>
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 h-4 w-4" />
        <input
          type="text"
          placeholder="Search for a contact..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 p-2 border rounded w-full text-sm focus:outline-none hover:bg-gray-50 transition-transform"
        />
      </div>
      <div className="pt-2">
        {filteredContacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default ChatsPage;

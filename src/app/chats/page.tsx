'use client';

import React, { useState } from 'react';
import ContactCard from '@/features/chat/components/ContactCard';
import { Search } from 'lucide-react';

const ChatsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const contacts = [
    {
      name: 'John Doe',
      lastMessage: 'Hey! How are you?',
      lastMessageTime: '10:30 AM',
      profilePicture: 'https://example.com/path-to-image.jpg',
    },
    {
      name: 'Jane Smith',
      lastMessage: 'Looking forward to our meeting!',
      lastMessageTime: 'Yesterday',
      profilePicture: 'https://example.com/path-to-another-image.jpg',
    },
    {
      name: 'Mike Johnson',
      lastMessage: 'Can we reschedule our appointment?',
      lastMessageTime: '2 hours ago',
      profilePicture: 'https://example.com/path-to-yet-another-image.jpg',
    },
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-2">
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

import ContactCard from '@/features/chats/components/ContactCard';
import { useState } from 'react';

interface ChatsListProps {
  contacts: {
    id: string;
    name: string;
    lastMessage: string;
    lastMessageTime: string;
    profilePicture: string;
  }[];
}

const ChatsList: React.FC<ChatsListProps> = ({ contacts }) => {
  return (
    <div className="pt-2">
      <ul role="list" className="max-h-[25rem] overflow-y-auto space-y-2">
        {contacts.map((contact, index) => (
          <li key={index}>
            <ContactCard contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatsList;

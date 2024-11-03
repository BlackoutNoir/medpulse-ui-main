'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useContact } from '@/app/contexts/ContactContext';

const contacts: { [key: string]: { name: string; avatar: string } } = {
  'john-doe': { name: 'John Doe', avatar: 'link_to_john_avatar' },
  'jane-smith': { name: 'Jane Smith', avatar: 'link_to_jane_avatar' },
  'mike-johnson': { name: 'Mike Johnson', avatar: 'link_to_mike_avatar' },
};

const ChatPage: React.FC = () => {
  const { chatid } = useParams();
  const { setContactName, setContactAvatar } = useContact();

  const contact = contacts[chatid as keyof typeof contacts] || { name: 'Guest', avatar: '' };

  useEffect(() => {
    setContactName(contact.name);
    setContactAvatar(contact.avatar);

    return () => {
      setContactName('Chats');
      setContactAvatar('');
    };
  }, [contact.name, contact.avatar, setContactName, setContactAvatar]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Hello, {contact.name}!</h1>
    </div>
  );
};

export default ChatPage;

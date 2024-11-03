'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContactContextType {
  contactName: string;
  contactAvatar: string; // Add avatar to the context
  setContactName: (name: string) => void;
  setContactAvatar: (avatar: string) => void; // Function to set avatar
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [contactName, setContactName] = useState('Chats'); // Default value
  const [contactAvatar, setContactAvatar] = useState(''); // Default avatar

  return (
    <ContactContext.Provider value={{ contactName, contactAvatar, setContactName, setContactAvatar }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};

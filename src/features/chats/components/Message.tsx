import React from 'react';

interface Message {
  id: string;
  content: string;
  senderId: string;
  timestamp: string;
}

interface MessagesProps {
  messages: Message[];
  chatId: string;
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-2 p-4 overflow-y-auto">
      {messages.map((message) => (
        <div key={message.id} className={`message ${message.senderId === '1' ? 'sent' : 'received'}`}>
          <span>{message.content}</span>
          <span className="text-xs text-gray-500">{message.timestamp}</span>
        </div>
      ))}
    </div>
  );
};

export default Messages;

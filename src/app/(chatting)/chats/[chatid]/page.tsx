import ChatInput from '@/features/chats/components/ChatInput';
import Messages from '@/features/chats/components/Message';
import { fetchRedis } from '@/helpers/redis';
import { authOptions } from '@/lib/auth';
import { messageArrayValidator } from '@/lib/validations/message';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ChatPageProps {
  params: {
    chatId: string;
  };
}

export async function generateMetadata({ params }: { params: { chatId: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) notFound();
  const [userId1, userId2] = params.chatId.split('--');
  const { user } = session;

  const chatPartnerId = user.id === userId1 ? userId2 : userId1;
  const chatPartnerRaw = (await fetchRedis('get', `user:${chatPartnerId}`)) as string;
  const chatPartner = JSON.parse(chatPartnerRaw) as User;

  // return { title: `FriendZone | ${chatPartner.name} chat` }
}

async function getChatMessages(chatId: string) {
  try {
    const results: string[] = await fetchRedis('zrange', `chat:${chatId}:messages`, 0, -1);

    const dbMessages = results.map(message => JSON.parse(message) as Message);

    const reversedDbMessages = dbMessages.reverse();

    const messages = messageArrayValidator.parse(reversedDbMessages);

    return messages;
  } catch (error) {
    notFound();
  }
}

const ChatPage: React.FC<ChatPageProps> = async ({ params }) => {
  const { chatId } = params;
  const session = await getServerSession(authOptions);
  if (!session) notFound();

  const { user } = session;

  const [userId1, userId2] = chatId.split('--');

  if (user.id !== userId1 && user.id !== userId2) {
    notFound();
  }

  const chatPartnerId = user.id === userId1 ? userId2 : userId1;
  // new

  const chatPartnerRaw = (await fetchRedis('get', `user:${chatPartnerId}`)) as string;
  const chatPartner = JSON.parse(chatPartnerRaw) as User;
  const initialMessages = await getChatMessages(chatId);

  return (
    <div className="flex-1 justify-between flex flex-col h-full max-h-[calc(100vh-6rem)]"></div>
  );
};

export default ChatPage;

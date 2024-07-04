import ChatForm from '@/features/forms/chat-form';
import WebSocketFetcher from '@/features/websocket-fetcher';

export default function ChatPage() {
  return (
    <div className="container">
      <div>
        <WebSocketFetcher />
      </div>
      <ChatForm />
    </div>
  );
}

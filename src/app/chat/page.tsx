import ChatForm from '@/features/forms/chat-form';
import MessageList from '@/features/lists/message-list';
import UserList from '@/features/lists/user-list';

export default function ChatPage() {
  return (
    <div className="container">
      <div>
        <div>
          <UserList users={[]} />
        </div>
        <div>
          <MessageList messages={[]} />
        </div>
      </div>
      <ChatForm />
    </div>
  );
}

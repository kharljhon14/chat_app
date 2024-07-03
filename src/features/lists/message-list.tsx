import { MessageType } from '@/types/websocket-message';

interface Props {
  messages: MessageType[];
}

export default function MessageList({ messages }: Props) {
  return (
    <ul className="list-disc">
      {messages.map((message, idx) => (
        <li key={idx}>{message.message}</li>
      ))}
    </ul>
  );
}

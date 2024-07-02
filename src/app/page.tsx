'use client';

import { WebSocketMessageType } from '@/types/webSocketMessage';
import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

export default function Home() {
  const [messageHistory, setMessageHistory] = useState<WebSocketMessageType[]>([]);
  const { sendJsonMessage, lastMessage, lastJsonMessage, readyState } =
    useWebSocket<WebSocketMessageType>('http://127.0.0.1:8000/');

  useEffect(() => {
    if (lastJsonMessage !== null) {
      setMessageHistory((prev) => [...prev, lastJsonMessage]);
    }
  }, [lastJsonMessage]);

  return (
    <div>
      <h1>Chat App</h1>

      <ul>
        {messageHistory.map((message, idx) => (
          <li key={idx}>{message.message_type}</li>
        ))}
      </ul>
    </div>
  );
}

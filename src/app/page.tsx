'use client';

import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

export default function Home() {
  const [messageHistory, setMessageHistory] = useState<MessageEvent<any>[]>([]);
  const { sendJsonMessage, lastMessage, readyState } = useWebSocket('http://127.0.0.1:8000/');

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage]);

  return (
    <div>
      <h1>Chat App</h1>

      <ul>
        {messageHistory.map((message, idx) => (
          <li key={idx}>{message.data}</li>
        ))}
      </ul>
    </div>
  );
}

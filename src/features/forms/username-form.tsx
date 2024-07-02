'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { WebSocketMessageType } from '@/types/websocket-message';
import { FormEvent } from 'react';
import useWebSocket from 'react-use-websocket';

export default function UsernameForm() {
  const { sendJsonMessage, lastMessage, lastJsonMessage, readyState } =
    useWebSocket<WebSocketMessageType>('http://127.0.0.1:8000/');

  return (
    <form>
      <div className="space-y-2">
        <Input
          name="username"
          placeholder="Username"
        />
        <Button>Submit</Button>
      </div>
    </form>
  );
}

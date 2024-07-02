'use client';

import { joinServer } from '@/actions/join-server';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { WebSocketMessageType } from '@/types/websocket-message';
import { FormEvent } from 'react';
import { useFormState } from 'react-dom';
import useWebSocket from 'react-use-websocket';

export default function UsernameForm() {
  // const { sendJsonMessage, lastMessage, lastJsonMessage, readyState } =
  //   useWebSocket<WebSocketMessageType>('http://127.0.0.1:8000/');

  const [formState, action] = useFormState(joinServer, { errors: {} });

  return (
    <form action={action}>
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

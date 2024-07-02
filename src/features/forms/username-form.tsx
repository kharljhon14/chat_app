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
    <form
      action={action}
      autoComplete="off"
    >
      <div className="space-y-2">
        <div>
          <Input
            name="username"
            placeholder="Username"
            className={`${formState.errors.username && 'border-red-500 focus-visible:ring-red-50'}`}
          />

          {formState.errors.username && (
            <small className="text-red-500">{formState.errors.username}</small>
          )}
        </div>

        <Button>Join Chat</Button>
      </div>
    </form>
  );
}

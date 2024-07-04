'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UsernameSchema, UsernameSchemaType } from '@/schemas/username';
import { zodResolver } from '@hookform/resolvers/zod';

import { SubmitHandler, useForm } from 'react-hook-form';
import useWebSocket from 'react-use-websocket';
import { useRouter } from 'next/navigation';

export default function UsernameForm() {
  const router = useRouter();
  const { sendJsonMessage, lastMessage, readyState } = useWebSocket('http://127.0.0.1:8000/');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UsernameSchemaType>({ resolver: zodResolver(UsernameSchema) });

  const onSubmit: SubmitHandler<UsernameSchemaType> = (data) => {
    sendJsonMessage({
      message_type: 'NewUser',
      users: null,
      message: null,
      username: data.username
    });

    router.push('/chat');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="space-y-2">
        <div>
          <Input
            {...register('username')}
            placeholder="Username"
            className={`${errors.username?.message && 'border-red-500 focus-visible:ring-red-50'}`}
          />

          {errors.username?.message && (
            <small className="text-red-500 text-xs">{errors.username?.message}</small>
          )}
        </div>

        <Button>Join Chat</Button>
      </div>
    </form>
  );
}

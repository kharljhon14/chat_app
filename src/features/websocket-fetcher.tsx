'use client';

import { useCallback, useEffect, useState } from 'react';
import MessageList from './lists/message-list';
import UserList from './lists/user-list';
import useWebSocket from 'react-use-websocket';

export default function WebSocketFetcher() {
  useEffect(() => {}, []);

  return (
    <>
      <UserList users={[]} />
      <MessageList messages={[]} />
    </>
  );
}

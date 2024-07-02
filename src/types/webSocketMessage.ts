export interface Message {
  author: string;
  message: string;
  created_at: string;
}

export interface WebSocketMessage {
  message_type: 'UserList' | 'NewMessage';
  users: string[] | null;
  message: Message | null;
}

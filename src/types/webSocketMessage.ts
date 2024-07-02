export interface MessageType {
  author: string;
  message: string;
  created_at: string;
}

export interface WebSocketMessageType {
  message_type: 'UserList' | 'NewMessage';
  users: string[] | null;
  message: MessageType | null;
}

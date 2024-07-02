import { WebSocketMessageType } from '@/types/websocket-message';
import { z } from 'zod';
const joinServerSchema = z.object({
  username: z.string().min(3)
});

interface JoinServerFormState {
  errors: {
    username?: string[];
  };
  success?: boolean;
}

export async function joinServer(
  _formState: JoinServerFormState,
  formData: FormData
): Promise<JoinServerFormState> {
  const username = formData.get('username');
  const result = joinServerSchema.safeParse({
    username
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    };
  }

  const ws = new WebSocket('http://127.0.0.1:8000/');

  ws.onopen = () => {
    if (username) {
      const ws_msg: WebSocketMessageType = {
        message_type: 'NewUser',
        users: null,
        message: null,
        username: username.toString()
      };
      ws.send(JSON.stringify(ws_msg));
    }
  };

  // Todo: Redirect user to chat

  return {
    errors: {},
    success: true
  };
}

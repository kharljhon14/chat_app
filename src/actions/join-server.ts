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
    ws.send(JSON.stringify({ username: username }));
  };
  return {
    errors: {},
    success: true
  };
}

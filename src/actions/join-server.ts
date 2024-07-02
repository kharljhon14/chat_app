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
  const result = joinServerSchema.safeParse({
    username: formData.get('username')
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    };
  }

  const ws = new WebSocket('http://127.0.0.1:8000/');

  ws.onopen = () => {
    console.log('CONNECTED');
  };

  return {
    errors: {},
    success: true
  };
}

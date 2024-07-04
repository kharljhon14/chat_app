import { z } from 'zod';

export const UsernameSchema = z.object({
  username: z.string().min(3)
});

export type UsernameSchemaType = z.infer<typeof UsernameSchema>;

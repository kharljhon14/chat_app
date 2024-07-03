import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function ChatForm() {
  return (
    <form>
      <div className="space-y-2">
        <div>
          <Textarea
            name="message"
            placeholder="Type your message here."
          />
        </div>
        <Button>Send</Button>
      </div>
    </form>
  );
}

import UsernameForm from '@/features/forms/username-form';

export default function Home() {
  // const [messageHistory, setMessageHistory] = useState<WebSocketMessageType[]>([]);
  // const { sendJsonMessage, lastMessage, lastJsonMessage, readyState } =
  //   useWebSocket<WebSocketMessageType>('http://127.0.0.1:8000/');

  // useEffect(() => {
  //   if (lastJsonMessage !== null) {
  //     setMessageHistory((prev) => [...prev, lastJsonMessage]);
  //   }
  // }, [lastJsonMessage]);

  return (
    <div className="container">
      <h1>Chat App</h1>
      <UsernameForm />
    </div>
  );
}

interface Props {
  users: string[];
}

export default function UserList({ users }: Props) {
  return (
    <ul className="list-disc">
      {users.map((user, idx) => (
        <li key={idx}>{user}</li>
      ))}
    </ul>
  );
}

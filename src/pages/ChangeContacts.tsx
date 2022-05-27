import { Header } from '../components/Header';

interface Props {
  operation: 'create' | 'update';
}

export function ChangeContacts({ operation }: Props) {
  return (
    <div className="bg-primary-bg h-full">
      <Header />

      {operation === 'create' ? (
        <h1>Create new contact</h1>
      ) : (
        <h1>Edit contact</h1>
      )}
    </div>
  );
}

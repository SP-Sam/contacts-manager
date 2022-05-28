import { CreateContactForm } from '../components/contacts/CreateContactForm';
import { Header } from '../components/Header';

interface Props {
  operation: 'create' | 'update';
}

export function ChangeContacts({ operation }: Props) {
  return (
    <div className="bg-primary-bg h-full flex flex-col items-center">
      <Header />

      {operation === 'create' ? (
        <div className="w-11/12 pb-6 max-w-[800px] bg-white rounded-lg drop-shadow-lg mt-8 laptop-g:mt-24">
          <div className="text-center py-12">
            <h1 className="text-2xl text-primary-medium font-extrabold">
              Cadastre um novo contato
            </h1>
            <p className="text-neutral-dark mt-4">
              Preencha as informações para cadastrar um novo contato
            </p>
          </div>
          <CreateContactForm />
        </div>
      ) : (
        <h1>Edit contact</h1>
      )}
    </div>
  );
}

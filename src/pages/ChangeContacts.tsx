import { useEffect } from 'react';
import { CreateContactForm } from '../components/contacts/CreateContactForm';
import { EditContactForm } from '../components/contacts/EditContactForm';
import { Header } from '../components/Header';

interface Props {
  operation: 'create' | 'edit';
}

export function ChangeContacts({ operation }: Props) {
  useEffect(() => {
    if (operation === 'create') {
      document.title = 'Cadastrar contato | Contacts Manager';
    } else {
      document.title = 'Editar contato | Contacts Manager';
    }
  }, []);

  return (
    <div className="bg-primary-bg h-full flex flex-col items-center">
      <Header />

      {operation === 'create' && (
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
      )}

      {operation === 'edit' && (
        <div className="w-11/12 pb-6 max-w-[800px] bg-white rounded-lg drop-shadow-lg mt-8 laptop-g:mt-24">
          <div className="text-center py-12">
            <h1 className="text-2xl text-primary-medium font-extrabold">
              Edite o contato selecionado
            </h1>
            <p className="text-neutral-dark mt-4">
              Altere as informações para editar o contato
            </p>
          </div>
          <EditContactForm />
        </div>
      )}
    </div>
  );
}

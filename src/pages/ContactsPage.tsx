import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactsTable } from '../components/contacts/ContactsTable';
import { Header } from '../components/Header';
import { ContactsContext } from '../context/ContactsContext';
import { getContacts } from '../utils/fetchContacts';
import { getLocalStorage } from '../utils/manageLocalStorage';

export function ContactsPage() {
  const { setContacts } = useContext(ContactsContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Contacts Manager';

    const tokenData = getLocalStorage('tokenData');

    if (tokenData) {
      getContacts(tokenData.token).then(res => {
        const contactList = res.map((contact: any) => {
          return {
            id: contact.id,
            name: contact.name,
            mobile: contact.mobile,
            email: contact.email,
          };
        });

        setContacts(contactList);
      });
    }
  }, []);

  return (
    <div className="bg-primary-bg flex flex-col items-center">
      <Header />

      <main className="w-11/12 rounded-lg p-6 flex flex-col items-center bg-white drop-shadow-lg mt-7">
        <div className="h-28 flex justify-between items-center w-full px-7">
          <h1 className="text-primary-medium font-extrabold text-2xl">
            Listagem de contatos
          </h1>

          <button
            onClick={() => navigate('/contacts/create')}
            className="bg-feedback-focus-dark text-white rounded-lg px-6 py-4 hover:bg-[#2c4cd1] transition duration-100"
          >
            Adicionar novo contato
          </button>
        </div>

        <div className="w-full h-[400px] laptop-g:h-[500px] overflow-auto">
          <ContactsTable />
        </div>
      </main>
    </div>
  );
}

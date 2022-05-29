import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IContact } from '../interfaces/ContactsInterfaces';
import { getLocalStorage } from '../utils/manageLocalStorage';
import { ContactsContext } from './ContactsContext';

interface Props {
  children: ReactNode;
}

export function ContactsProvider({ children }: Props) {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [contactToEdit, setContactToEdit] = useState<IContact>({
    id: 0,
    name: '',
    mobile: '',
    email: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    verifyLogin();
  }, []);

  function verifyLogin(): void {
    const tokenData = getLocalStorage('tokenData');

    if (tokenData === null) {
      navigate('/');
    } else {
      const { expires_at } = tokenData;

      if (Date.parse(expires_at) < Date.now()) navigate('/');
    }
  }

  return (
    <ContactsContext.Provider
      value={{ contacts, setContacts, contactToEdit, setContactToEdit }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

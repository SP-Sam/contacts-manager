import { ReactNode, useEffect, useState } from 'react';
import { IContact } from '../interfaces/ContactsInterfaces';
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

  return (
    <ContactsContext.Provider
      value={{ contacts, setContacts, contactToEdit, setContactToEdit }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

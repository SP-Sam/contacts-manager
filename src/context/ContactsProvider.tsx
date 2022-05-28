import { ReactNode, useEffect, useState } from 'react';
import { IContact } from '../interfaces/ContactsInterfaces';
import { ContactsContext } from './UserContext';

interface Props {
  children: ReactNode;
}

export function ContactsProvider({ children }: Props) {
  const [contacts, setContacts] = useState<IContact[]>([]);

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactsContext.Provider>
  );
}

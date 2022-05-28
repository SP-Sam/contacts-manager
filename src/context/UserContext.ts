import { createContext, Dispatch, SetStateAction } from 'react';
import { IContact } from '../interfaces/ContactsInterfaces';

type PropsContactsContext = {
  contacts: IContact[];
  setContacts: Dispatch<SetStateAction<IContact[]>>;
};

const DEFAULT_VALUE = {
  contacts: [],
  setContacts: () => { }
};

const ContactsContext = createContext<PropsContactsContext>(DEFAULT_VALUE);

export { ContactsContext };


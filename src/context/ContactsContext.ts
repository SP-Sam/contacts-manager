import { createContext, Dispatch, SetStateAction } from 'react';
import { IContact } from '../interfaces/ContactsInterfaces';

type PropsContactsContext = {
  contacts: IContact[];
  setContacts: Dispatch<SetStateAction<IContact[]>>;
  contactToEdit: IContact;
  setContactToEdit: Dispatch<SetStateAction<IContact>>;
};

const DEFAULT_VALUE = {
  contacts: [],
  setContacts: () => { },
  contactToEdit: {
    id: 0,
    name: '',
    mobile: '',
    email: ''
  },
  setContactToEdit: () => { }
};

const ContactsContext = createContext<PropsContactsContext>(DEFAULT_VALUE);

export { ContactsContext };


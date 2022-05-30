import { useContext } from 'react';
import { ContactsContext } from '../../context/ContactsContext';
import { ContactTableRow } from './ContactTableRow';
import chevronDown from '../../assets/chevron-down.svg';

export function ContactsTable() {
  const { contacts } = useContext(ContactsContext);

  return (
    <table className="w-full text-lg text-left">
      <thead className="text-primary-medium text-xl font-extrabold border-b-2 border-b-[#ADB5BD]">
        <tr>
          <th scope="col" className="py-4 pl-8">
            <span className="flex">
              #
              <img
                src={chevronDown}
                alt="Seta para baixo"
                className="w-3 ml-2"
              />
            </span>
          </th>
          <th scope="col" className="pl-12">
            <span className="flex">
              Nome
              <img
                src={chevronDown}
                alt="Seta para baixo"
                className="w-3 ml-2"
              />
            </span>
          </th>
          <th scope="col" className="pl-12">
            <span className="flex">
              Celular
              <img
                src={chevronDown}
                alt="Seta para baixo"
                className="w-3 ml-2"
              />
            </span>
          </th>
          <th scope="col" className="pl-12">
            <span className="flex">
              Email
              <img
                src={chevronDown}
                alt="Seta para baixo"
                className="w-3 ml-2"
              />
            </span>
          </th>
          <th scope="col" className="pl-12">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, i) => {
          return <ContactTableRow key={contact.id} contact={contact} i={i} />;
        })}
      </tbody>
    </table>
  );
}

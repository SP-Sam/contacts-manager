import { useContext } from 'react';
import { ContactsContext } from '../../context/UserContext';
import { IContact } from '../../interfaces/ContactsInterfaces';
import { getLocalStorage } from '../../pages/manageLocalStorage';
import { deleteContact } from '../../utils/fetchContacts';
import edit from '/assets/edit.svg';
import trash from '/assets/trash.svg';

interface Props {
  contact: IContact;
  i: number;
}

export function ContactTableRow({
  contact: { id, name, mobile, email },
  i,
}: Props) {
  const bg = i % 2 === 0 ? 'bg-neutral-light' : 'bg-white';
  const { contacts, setContacts } = useContext(ContactsContext);

  function removeContact() {
    const tokenData = getLocalStorage('tokenData');

    deleteContact(id, tokenData.token)
      .then(_res => {
        const newContacts = contacts.filter(contact => contact.id !== id);

        setContacts(newContacts);
      })
      .catch(err => console.log(err));
  }

  return (
    <tr className={`text-neutral-dark ${bg}`}>
      <td className="text-primary-medium font-extrabold pl-8">{id}</td>
      <td className="pl-12">{name}</td>
      <td className="pl-12">{mobile}</td>
      <td className="pl-12">{email}</td>
      <td className="flex py-4 pl-12">
        <button className="flex items-center mr-8 hover:text-gray-500 transition duration-100">
          <img src={edit} alt="Editar" className="mr-1.5" />
          <span className="pt-1">Editar</span>
        </button>

        <button
          onClick={removeContact}
          className="flex items-center hover:text-gray-500 transition duration-100"
        >
          <img src={trash} alt="Excluir" className="mr-1" />
          <span className="pt-0.5">Excluir</span>
        </button>
      </td>
    </tr>
  );
}

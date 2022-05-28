import { IContact } from '../../interfaces/ContactsInterfaces';
import edit from '/assets/edit.svg';
import trash from '/assets/trash.svg';

interface Props {
  contact: IContact;
  i: number;
}

export default function ContactTableRow({
  contact: { id, name, mobile, email },
  i,
}: Props) {
  const bg = i % 2 === 0 ? 'bg-neutral-light' : 'bg-white';

  return (
    <tr className={`text-neutral-dark ${bg}`}>
      <td className="text-primary-medium font-extrabold pl-8">{id}</td>
      <td className="pl-12">{name}</td>
      <td className="pl-12">{mobile}</td>
      <td className="pl-12">{email}</td>
      <td className="flex py-4 pl-12">
        <button className="flex items-center mr-8">
          <img src={edit} alt="Editar" className="mr-1.5" />
          <span className="pt-1">Editar</span>
        </button>

        <button className="flex items-center">
          <img src={trash} alt="Excluir" className="mr-1" />
          <span className="pt-0.5">Excluir</span>
        </button>
      </td>
    </tr>
  );
}

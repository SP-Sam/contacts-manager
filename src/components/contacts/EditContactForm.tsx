import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactsContext } from '../../context/ContactsContext';
import { updateContact } from '../../utils/fetchContacts';
import { getLocalStorage } from '../../utils/manageLocalStorage';
import { SubmitButton } from '../SubmitButton';

export function EditContactForm() {
  const { contactToEdit } = useContext(ContactsContext);
  const navigate = useNavigate();

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMobile, setContactMobile] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setContactName(contactToEdit.name);
    setContactEmail(contactToEdit.email);
    setContactMobile(contactToEdit.mobile);
  }, []);

  useEffect(() => {
    if (
      contactName.length < 4 ||
      contactMobile.length !== 11 ||
      !isEmailValid(contactEmail)
    ) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [contactName, contactEmail, contactMobile]);

  function isEmailValid(email: string) {
    const emailRegex = /\S+@\S+\.\S+/;

    return emailRegex.test(email);
  }

  function handleChange(
    flag: 'name' | 'email' | 'mobile',
    value: string,
  ): void {
    if (flag === 'name') setContactName(value);
    if (flag === 'email') setContactEmail(value);
    if (flag === 'mobile') {
      if (Number(value) < 1) setContactMobile('');
      else setContactMobile(value);
    }
  }

  function handleSubmit() {
    const toEdit = {
      name: contactName,
      email: contactEmail,
      mobile: contactMobile,
    };

    const tokenData = getLocalStorage('tokenData');

    updateContact(contactToEdit.id, toEdit, tokenData.token).then(res => {
      alert(`${res.name} editado com sucesso`);
      navigate('/contacts');
    });
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
      className="text-primary-dark px-8 flex flex-col"
    >
      <label htmlFor="contact-name" className="flex flex-col font-extrabold">
        Nome Completo
        <input
          type="text"
          value={contactName}
          onChange={e => handleChange('name', e.target.value)}
          id="contact-name"
          placeholder="Digite o nome do contato"
          className="bg-neutral-light text-neutral-dark mt-0.5 p-4 rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
        />
      </label>

      <div className="flex flex-col md:flex-row md:mt-3 md:mb-11 laptop-g:mb-12">
        <label
          htmlFor="email"
          className="flex flex-col font-extrabold w-full mt-3 md:mr-5"
        >
          Email
          <input
            type="email"
            value={contactEmail}
            onChange={e => handleChange('email', e.target.value)}
            id="email"
            placeholder="Digite o email"
            className="bg-neutral-light text-neutral-dark mt-0.5 p-4 rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
          />
        </label>

        <label
          htmlFor="mobile"
          className="flex flex-col font-extrabold w-full mt-3"
        >
          Celular
          <input
            type="number"
            value={contactMobile}
            onChange={e => handleChange('mobile', e.target.value)}
            id="mobile"
            placeholder="Digite o celular"
            className="bg-neutral-light text-neutral-dark mt-0.5 p-4 rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
          />
        </label>
      </div>
      <SubmitButton isDisabled={isButtonDisabled}>Editar Contato</SubmitButton>
    </form>
  );
}

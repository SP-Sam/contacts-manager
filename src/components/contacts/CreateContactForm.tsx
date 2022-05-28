import { SubmitButton } from '../SubmitButton';

export function CreateContactForm() {
  return (
    <form className="text-primary-dark px-8 flex flex-col">
      <label htmlFor="contact-name" className="flex flex-col font-extrabold">
        Nome Completo
        <input
          type="text"
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
            type="tel"
            id="mobile"
            placeholder="Digite o celular"
            className="bg-neutral-light text-neutral-dark mt-0.5 p-4 rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
          />
        </label>
      </div>
      <SubmitButton isDisabled={false}>Cadastrar Contato</SubmitButton>
    </form>
  );
}

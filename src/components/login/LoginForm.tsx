export function LoginForm() {
  return (
    <form className="flex flex-col text-primary-dark p-3 w-11/12 mt-5 max-w-lg">
      <label htmlFor="email-input" className="flex flex-col font-extrabold">
        Email
        <input
          type="text"
          id="email-input"
          placeholder="Digite seu email"
          className="bg-neutral-light pl-2 py-3 text-neutral-dark rounded-lg"
        />
      </label>

      <label
        htmlFor="password-input"
        className="flex flex-col font-extrabold mt-4"
      >
        Senha
        <input
          type="password"
          id="password-input"
          placeholder="Digite sua senha"
          className="bg-neutral-light pl-2 py-3 text-neutral-dark rounded-lg"
        />
      </label>

      <button className="bg-primary-dark text-white rounded-lg h-14 mt-4 lg:mt-12">
        Fazer Login
      </button>
    </form>
  );
}

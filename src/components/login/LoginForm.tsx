import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUserCredentials } from '../../interfaces/UserCredentials';
import { login } from '../../utils/fetchLogin';
import { SubmitButton } from '../SubmitButton';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (email.length < 3 || password.length < 3) setIsButtonDisabled(true);
    else setIsButtonDisabled(false);
  }, [email, password]);

  function handleChange(flag: 'email' | 'password', value: string): void {
    setInvalidCredentials(false);
    if (flag === 'email') setEmail(value);
    if (flag === 'password') setPassword(value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const userCredentials: IUserCredentials = {
      email,
      password,
    };

    login(userCredentials)
      .then(res => {
        localStorage.setItem('tokenData', JSON.stringify(res));
        navigate('/contacts');
      })
      .catch(_err => setInvalidCredentials(true));
  }

  return (
    <form
      onSubmit={e => handleSubmit(e)}
      className="flex flex-col text-primary-dark p-3 w-11/12 mt-5 max-w-lg"
    >
      <label htmlFor="email-input" className="flex flex-col font-extrabold">
        Email
        <input
          type="text"
          value={email}
          onChange={({ target: { value } }) => handleChange('email', value)}
          id="email-input"
          placeholder="Digite seu email"
          className="bg-neutral-light pl-2 py-3 text-neutral-dark rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
        />
      </label>

      <label
        htmlFor="password-input"
        className="flex flex-col font-extrabold mt-4"
      >
        Senha
        <input
          type="password"
          value={password}
          onChange={({ target: { value } }) => handleChange('password', value)}
          id="password-input"
          placeholder="Digite sua senha"
          className="bg-neutral-light pl-2 py-3 text-neutral-dark rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
        />
      </label>
      {invalidCredentials && (
        <span className="text-orange-600 mt-1.5">Credenciais inválidas</span>
      )}
      <SubmitButton isDisabled={isButtonDisabled}>Fazer login</SubmitButton>
    </form>
  );
}

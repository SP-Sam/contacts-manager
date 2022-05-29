import { useEffect } from 'react';
import { LoginForm } from '../components/login/LoginForm';
import loginImage from '/assets/login-image.svg';

export function LoginPage() {
  useEffect(() => {
    document.title = 'Login | Contacts Manager';
  }, []);

  return (
    <div className="flex flex-col h-full items-center sm:flex-row sm:justify-around">
      <div className="w-1/2 flex justify-center">
        <img
          src={loginImage}
          alt="Imagem da tela de login"
          className="mt-12 sm:m-0 w-3/4 sm:w-11/12 max-w-lg"
        />
      </div>

      <div className="w-full flex flex-col items-center sm:w-1/2">
        <div className="flex flex-col items-center mt-4">
          <h1 className="text-3xl text-[#244677] font-bold">Bem-vindo!</h1>
          <p className="text-[#495057] text-sm text-center mt-3 mobile-g:text-base px-6">
            Faça login para acessar nossa plataforma
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}

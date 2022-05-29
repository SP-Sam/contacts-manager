import { useLocation, useNavigate } from 'react-router-dom';
import arrowLeft from '/assets/arrow-left.svg';

export function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleClick() {
    if (location.pathname === '/contacts') {
      localStorage.removeItem('tokenData');
      navigate('/');
    } else if (
      location.pathname === '/contacts/create' ||
      location.pathname === '/contacts/edit'
    ) {
      navigate('/contacts');
    }
  }

  return (
    <button
      onClick={handleClick}
      className="text-neutral-dark text-sm flex items-center hover:text-[#343a40]"
    >
      <img src={arrowLeft} alt="Voltar" className="w-full" />
      <span className="ml-1">Voltar</span>
    </button>
  );
}

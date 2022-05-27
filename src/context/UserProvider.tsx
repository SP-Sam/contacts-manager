import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

interface Props {
  children: ReactNode;
}

export function UserProvider({ children }: Props) {
  const navigate = useNavigate();

  function verifyLogin(): void {
    const tokenData = localStorage.getItem('tokenData');

    if (tokenData === null) {
      navigate('/');
    } else {
      const { expires_at } = JSON.parse(tokenData);

      if (Date.parse(expires_at) < Date.now()) navigate('/');
    }
  }

  useEffect(() => {
    verifyLogin();
  }, []);

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
}

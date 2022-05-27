import { createContext, } from 'react';

// type PropsUserContext = {
//   isLogged: boolean;
//   setIsLogged: Dispatch<SetStateAction<boolean>>;
// };

const DEFAULT_VALUE = {};

const UserContext = createContext(DEFAULT_VALUE);

export { UserContext };

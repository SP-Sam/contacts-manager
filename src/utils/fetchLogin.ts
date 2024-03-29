import axios from 'axios';
import { IUserCredentials } from '../interfaces/UserCredentials';

const LOGIN_ENDPOINT =
  'https://contacts-api.prd.parceirodaconstrucao.com.br/auth/login';

export const login = async ({ email, password }: IUserCredentials) => {
  return axios.post(LOGIN_ENDPOINT, { email, password }).then(res => res.data);
};

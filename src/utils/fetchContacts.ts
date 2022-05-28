import axios from 'axios';

const CONTACTS_ENDPOINT = 'https://contacts-api.prd.parceirodaconstrucao.com.br/contacts';

export async function getContacts(token: string) {
  return axios.get(CONTACTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.data);
}

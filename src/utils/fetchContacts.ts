import axios from 'axios';
import { INewContact } from '../interfaces/ContactsInterfaces';

const CONTACTS_ENDPOINT = 'https://contacts-api.prd.parceirodaconstrucao.com.br/contacts';

export async function getContacts(token: string) {
  return axios.get(CONTACTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.data);
}

export async function createContact(newContact: INewContact, token: string) {
  return axios.post(CONTACTS_ENDPOINT, newContact, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.data);
}

export async function updateContact(id: number, toEdit: INewContact, token: string) {
  return axios.put(`${CONTACTS_ENDPOINT}/${id}`, toEdit, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.data);
}

export async function deleteContact(id: number, token: string) {
  return axios.delete(`${CONTACTS_ENDPOINT}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.data);
}

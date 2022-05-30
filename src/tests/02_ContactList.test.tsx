import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactTableRow } from '../components/contacts/ContactTableRow';

import { ContactsContext } from '../context/ContactsContext';
import { ContactsPage } from '../pages/ContactsPage';
import { formatMobile } from '../utils/formatMobile';
import { renderWithRouter } from './helpers/renderWithRouter';
import { contactListMock } from './mocks/contactListMock';

describe('Contacts page tests', () => {
  describe('Button to add new contact tests', () => {
    it('should be a button for creating a new contact', () => {
      const toEdit = {
        id: 0,
        name: '',
        mobile: '',
        email: '',
      };

      renderWithRouter(
        <ContactsContext.Provider
          value={{
            contacts: contactListMock,
            setContacts: () => {},
            contactToEdit: toEdit,
            setContactToEdit: () => {},
          }}
        >
          <ContactsPage />
        </ContactsContext.Provider>,
      );

      const createContactButton = screen.getByRole('button', {
        name: 'Adicionar novo contato',
      });

      expect(createContactButton).toBeInTheDocument();
    });

    it('should be a button for creating a new contact', () => {
      const toEdit = {
        id: 0,
        name: '',
        mobile: '',
        email: '',
      };

      renderWithRouter(
        <ContactsContext.Provider
          value={{
            contacts: contactListMock,
            setContacts: () => {},
            contactToEdit: toEdit,
            setContactToEdit: () => {},
          }}
        >
          <ContactsPage />
        </ContactsContext.Provider>,
      );

      const createContactButton = screen.getByRole('button', {
        name: 'Adicionar novo contato',
      });

      expect(createContactButton).toBeInTheDocument();
    });

    it('should navigate to /contacts/create by clicking the add new user button', async () => {
      const toEdit = {
        id: 0,
        name: '',
        mobile: '',
        email: '',
      };

      const { history } = renderWithRouter(
        <ContactsContext.Provider
          value={{
            contacts: contactListMock,
            setContacts: () => {},
            contactToEdit: toEdit,
            setContactToEdit: () => {},
          }}
        >
          <ContactsPage />
        </ContactsContext.Provider>,
      );

      const createContactButton = screen.getByRole('button', {
        name: 'Adicionar novo contato',
      });

      await userEvent.click(createContactButton);

      await waitFor(() =>
        expect(history.location.pathname).toBe('/contacts/create'),
      );
    });
  });

  describe('Contacts table tests', () => {
    it('should render a table with a header containing "#", "Nome", "Celular", "Email" and "Ações".', () => {
      const toEdit = {
        id: 0,
        name: '',
        mobile: '',
        email: '',
      };

      renderWithRouter(
        <ContactsContext.Provider
          value={{
            contacts: contactListMock,
            setContacts: () => {},
            contactToEdit: toEdit,
            setContactToEdit: () => {},
          }}
        >
          <ContactsPage />
        </ContactsContext.Provider>,
      );

      const contactsTable = screen.getByRole('table');
      expect(contactsTable).toBeInTheDocument();

      const contactTableRows = screen.getAllByRole('row');
      expect(contactTableRows).toHaveLength(4);

      expect(contactTableRows[0]).toHaveTextContent('#');
      expect(contactTableRows[0]).toHaveTextContent('Nome');
      expect(contactTableRows[0]).toHaveTextContent('Celular');
      expect(contactTableRows[0]).toHaveTextContent('Email');
      expect(contactTableRows[0]).toHaveTextContent('Ações');
    });

    it('should render a table containing a list of contacts, where each contact has "id", "name", "mobile", "email"', () => {
      const toEdit = {
        id: 0,
        name: '',
        mobile: '',
        email: '',
      };

      renderWithRouter(
        <ContactsContext.Provider
          value={{
            contacts: contactListMock,
            setContacts: () => {},
            contactToEdit: toEdit,
            setContactToEdit: () => {},
          }}
        >
          <ContactsPage />
        </ContactsContext.Provider>,
      );

      const contactsTable = screen.getByRole('table');
      expect(contactsTable).toBeInTheDocument();

      const contactTableRows = screen.getAllByRole('row');
      expect(contactTableRows).toHaveLength(4);

      expect(contactTableRows[1]).toHaveTextContent(`${contactListMock[0].id}`);
      expect(contactTableRows[1]).toHaveTextContent(contactListMock[0].name);
      expect(contactTableRows[1]).toHaveTextContent(
        formatMobile(contactListMock[0].mobile),
      );
      expect(contactTableRows[1]).toHaveTextContent(contactListMock[0].email);
    });

    it('each contact should have an edit button and a delete button', () => {
      const toEdit = {
        id: 0,
        name: '',
        mobile: '',
        email: '',
      };

      renderWithRouter(
        <ContactsContext.Provider
          value={{
            contacts: contactListMock,
            setContacts: () => {},
            contactToEdit: toEdit,
            setContactToEdit: () => {},
          }}
        >
          <ContactsPage />
        </ContactsContext.Provider>,
      );

      const editButtons = screen.getAllByText('Editar');
      editButtons.forEach(button => {
        expect(button).toHaveTextContent('Editar');
      });

      const deleteButtons = screen.getAllByText('Excluir');
      deleteButtons.forEach(button => {
        expect(button).toHaveTextContent('Excluir');
      });
    });

    it('clicking on the edit button should navigate to /contacts/edit', async () => {
      const toEdit = {
        id: 0,
        name: '',
        mobile: '',
        email: '',
      };

      const { history } = renderWithRouter(
        <ContactsContext.Provider
          value={{
            contacts: contactListMock,
            setContacts: () => {},
            contactToEdit: toEdit,
            setContactToEdit: () => {},
          }}
        >
          <ContactsPage />
        </ContactsContext.Provider>,
      );

      const editButtons = screen.getAllByText('Editar');
      await userEvent.click(editButtons[0]);

      await waitFor(() =>
        expect(history.location.pathname).toBe('/contacts/edit'),
      );
    });
  });
});

export {};

import { screen } from '@testing-library/react';
import { CreateContactForm } from '../components/contacts/CreateContactForm';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Create contact form tests', () => {
  describe('Tests if the form has the correct elements', () => {
    beforeEach(() => renderWithRouter(<CreateContactForm />));

    it('should have a name input on the form', () => {
      const nameInput = screen.getByLabelText('Nome Completo');

      expect(nameInput).toBeInTheDocument();
      expect(nameInput).toHaveAttribute('type', 'text');
    });

    it('should have an email input on the form', () => {
      const emailInput = screen.getByLabelText('Email');

      expect(emailInput).toBeInTheDocument();
      expect(emailInput).toHaveAttribute('type', 'email');
    });

    it('should have a mobile input on the form', () => {
      const mobileInput = screen.getByLabelText('Celular');

      expect(mobileInput).toBeInTheDocument();
      expect(mobileInput).toHaveAttribute('type', 'number');
    });

    it('should have a submit button on the form', () => {
      const submitButton = screen.getByRole('button', {
        name: 'Cadastrar Contato',
      });

      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toHaveAttribute('type', 'submit');
    });
  });
});

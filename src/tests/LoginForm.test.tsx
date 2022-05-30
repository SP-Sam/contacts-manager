import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from '../components/login/LoginForm';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('LoginForm component tests', () => {
  describe('Tests if the form has the correct elements', () => {
    it('should have an email input on the form', () => {
      renderWithRouter(<LoginForm />);

      const emailInput = screen.getByLabelText('Email');

      expect(emailInput).toBeInTheDocument();
      expect(emailInput).toHaveAttribute('type', 'email');
    });

    it('should have a password input on the form', () => {
      renderWithRouter(<LoginForm />);

      const passwordInput = screen.getByLabelText('Senha');

      expect(passwordInput).toBeInTheDocument();
      expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('should have a submit button on the form', () => {
      renderWithRouter(<LoginForm />);

      const submitButton = screen.getByRole('button', { name: 'Fazer login' });

      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toHaveAttribute('type', 'submit');
    });
  });

  describe('Test login', () => {
    it('should display a warning message and not login when the email is invalid', async () => {
      renderWithRouter(<LoginForm />);

      const emailInput = screen.getByLabelText('Email');
      const passwordInput = screen.getByLabelText('Senha');

      const submitButton = screen.getByRole('button', { name: 'Fazer login' });

      await userEvent.type(emailInput, 'invalid@email.com');
      await userEvent.type(passwordInput, 'Mob20we23##');

      await userEvent.click(submitButton);

      const message = await screen.findByText('Credenciais inválidas');

      expect(message).toBeInTheDocument();
    });

    it('should display a warning message and not login when the password is invalid', async () => {
      renderWithRouter(<LoginForm />);

      const emailInput = screen.getByLabelText('Email');
      const passwordInput = screen.getByLabelText('Senha');

      const submitButton = screen.getByRole('button', { name: 'Fazer login' });

      await userEvent.type(emailInput, 'user@diwe.com.br');
      await userEvent.type(passwordInput, 'wrongPassword');

      await userEvent.click(submitButton);

      const message = await screen.findByText('Credenciais inválidas');

      expect(message).toBeInTheDocument();
    });
  });
});

export {};

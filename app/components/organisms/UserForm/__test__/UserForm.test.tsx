import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { UserForm } from '../UserForm';
import { UserFormData } from '../../../../hooks/schema';

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn(),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('UserForm', () => {
  const mockSubmit = jest.fn();
  const mockUseForm = useForm as jest.Mock;

  beforeEach(() => {
    mockUseForm.mockReturnValue({
      register: jest.fn(),
      handleSubmit: (fn: any) => (e: any) => fn(e),
      formState: {
        errors: {},
        isSubmitting: false,
      },
      getValues: () => ({}),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar o formulário com todos os campos obrigatórios', () => {
    render(<UserForm onSubmit={mockSubmit} />);
    
    expect(screen.getByText('form.title')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /form.name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /form.email/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/form.password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/form.confirmPassword/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'form.submit' })).toBeInTheDocument();
  });

  it('deve chamar onSubmit quando o formulário é enviado com dados válidos', async () => {
    render(<UserForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByRole('textbox', { name: /form.name/i }), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByRole('textbox', { name: /form.email/i }), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/form.password/i), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByLabelText(/form.confirmPassword/i), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByLabelText(/form.genderOptions.male/i));
    fireEvent.click(screen.getByLabelText(/form.acceptTerms/i));

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalled();
    });
  });

  it('deve exibir mensagens de erro quando a validação falhar', () => {
    const errors = {
      name: { message: 'Nome é obrigatório' },
      email: { message: 'Formato de email inválido' },
      password: { message: 'Senha deve ter pelo menos 8 caracteres' },
    };

    mockUseForm.mockReturnValueOnce({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      formState: {
        errors,
        isSubmitting: false,
      },
    });

    render(<UserForm onSubmit={mockSubmit} />);

    expect(screen.getByText('Nome é obrigatório')).toBeInTheDocument();
    expect(screen.getByText('Formato de email inválido')).toBeInTheDocument();
    expect(screen.getByText('Senha deve ter pelo menos 8 caracteres')).toBeInTheDocument();
  });

  it('deve desabilitar o botão de enviar quando isSubmitting for verdadeiro', () => {
    mockUseForm.mockReturnValueOnce({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      formState: {
        errors: {},
        isSubmitting: true,
      },
    });

    render(<UserForm onSubmit={mockSubmit} />);

    const submitButton = screen.getByRole('button', { name: 'form.submitting' });
    expect(submitButton).toBeDisabled();
  });

  it('deve preencher os campos com valores padrão quando fornecidos', () => {
    const defaultValues = {
      name: 'Usuário Padrão',
      email: 'padrao@exemplo.com',
      notifications: true,
    };

    mockUseForm.mockReturnValueOnce({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      formState: {
        errors: {},
        isSubmitting: false,
      },
      getValues: () => defaultValues,
    });

    render(<UserForm onSubmit={mockSubmit} defaultValues={defaultValues} />);

    expect(screen.getByRole('textbox', { name: /form.name/i })).toHaveValue(defaultValues.name);
    expect(screen.getByRole('textbox', { name: /form.email/i })).toHaveValue(defaultValues.email);
    expect(screen.getByRole('checkbox', { name: /form.notifications/i })).toBeChecked();
  });
});
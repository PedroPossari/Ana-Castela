import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userFormSchema, UserFormData } from '../../hooks/schema';
import { FormGroup } from '../molecules/FormGroup';
import { Input, Textarea, Checkbox, Radio } from '../atoms/FormControls';
import { Button } from '../atoms/FormButton';

interface UserFormProps {
  onSubmit: (data: UserFormData) => void;
  defaultValues?: Partial<UserFormData>;
}

export const UserForm: React.FC<UserFormProps> = ({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 text-gray-900">
      <h1 className="text-2xl font-bold mb-6">Cadastro de Usuário</h1>
      
      <FormGroup label="Nome completo" htmlFor="name" error={errors.name?.message} required>
        <Input
          id="name"
          type="text"
          placeholder="Digite seu nome"
          registration={register('name')}
          error={errors.name?.message}
        />
      </FormGroup>

      <FormGroup label="E-mail" htmlFor="email" error={errors.email?.message} required>
        <Input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          registration={register('email')}
          error={errors.email?.message}
        />
      </FormGroup>

      <FormGroup label="Senha" htmlFor="password" error={errors.password?.message} required>
        <Input
          id="password"
          type="password"
          placeholder="Digite sua senha"
          registration={register('password')}
          error={errors.password?.message}
        />
      </FormGroup>

      <FormGroup label="Confirmar senha" htmlFor="confirmPassword" error={errors.confirmPassword?.message} required>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
          registration={register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />
      </FormGroup>

      <FormGroup label="Bio (Opcional)" htmlFor="bio" error={errors.bio?.message}>
        <Textarea
          id="bio"
          placeholder="Fale um pouco sobre você"
          rows={3}
          registration={register('bio')}
          error={errors.bio?.message}
        />
      </FormGroup>

      <FormGroup label="Gênero" error={errors.gender?.message} required>
        <div className="space-y-2">
          <Radio
            id="male"
            value="male"
            label="Masculino"
            registration={register('gender')}
          />
          <Radio
            id="female"
            value="female"
            label="Feminino"
            registration={register('gender')}
          />
          <Radio
            id="other"
            value="other"
            label="Outro"
            registration={register('gender')}
          />
        </div>
      </FormGroup>

      <FormGroup error={errors.acceptTerms?.message}>
        <Checkbox
          id="acceptTerms"
          label="Aceito os termos e condições"
          registration={register('acceptTerms')}
        />
      </FormGroup>

      <FormGroup>
        <Checkbox
          id="notifications"
          label="Desejo receber notificações por e-mail"
          registration={register('notifications')}
        />
      </FormGroup>

      <div className="flex justify-end space-x-3 mt-6">
        <Button type="button" variant="secondary">
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Cadastrar'}
        </Button>
      </div>
    </form>
  );
};
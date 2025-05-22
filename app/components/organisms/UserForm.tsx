import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

import { userFormSchema, UserFormData } from '../../hooks/schema';
import { FormGroup } from '../molecules/FormGroup';
import { Input, Textarea, Checkbox, Radio } from '../atoms/FormControls';
import { Button } from '../atoms/FormButton';

interface UserFormProps {
  onSubmit: (data: UserFormData) => void;
  defaultValues?: Partial<UserFormData>;
}

export const UserForm: React.FC<UserFormProps> = ({ onSubmit, defaultValues }) => {
  const { t } = useTranslation();

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
      <h1 className="text-2xl font-bold mb-6">{t('form.title')}</h1>

      <FormGroup label={t('form.name')} htmlFor="name" error={errors.name?.message} required>
        <Input
          id="name"
          type="text"
          placeholder={t('form.name')}
          registration={register('name')}
          error={errors.name?.message}
        />
      </FormGroup>

      <FormGroup label={t('form.email')} htmlFor="email" error={errors.email?.message} required>
        <Input
          id="email"
          type="email"
          placeholder={t('form.email')}
          registration={register('email')}
          error={errors.email?.message}
        />
      </FormGroup>

      <FormGroup label={t('form.password')} htmlFor="password" error={errors.password?.message} required>
        <Input
          id="password"
          type="password"
          placeholder={t('form.password')}
          registration={register('password')}
          error={errors.password?.message}
        />
      </FormGroup>

      <FormGroup label={t('form.confirmPassword')} htmlFor="confirmPassword" error={errors.confirmPassword?.message} required>
        <Input
          id="confirmPassword"
          type="password"
          placeholder={t('form.confirmPassword')}
          registration={register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />
      </FormGroup>

      <FormGroup label={t('form.bio')} htmlFor="bio" error={errors.bio?.message}>
        <Textarea
          id="bio"
          placeholder={t('form.bio')}
          rows={3}
          registration={register('bio')}
          error={errors.bio?.message}
        />
      </FormGroup>

      <FormGroup label={t('form.gender')} error={errors.gender?.message} required>
        <div className="space-y-2">
          <Radio
            id="male"
            value="male"
            label={t('form.genderOptions.male')}
            registration={register('gender')}
          />
          <Radio
            id="female"
            value="female"
            label={t('form.genderOptions.female')}
            registration={register('gender')}
          />
          <Radio
            id="other"
            value="other"
            label={t('form.genderOptions.other')}
            registration={register('gender')}
          />
        </div>
      </FormGroup>

      <FormGroup error={errors.acceptTerms?.message}>
        <Checkbox
          id="acceptTerms"
          label={t('form.acceptTerms')}
          registration={register('acceptTerms')}
        />
      </FormGroup>

      <FormGroup>
        <Checkbox
          id="notifications"
          label={t('form.notifications')}
          registration={register('notifications')}
        />
      </FormGroup>

      <div className="flex justify-end space-x-3 mt-6">
        <Button type="button" variant="secondary">
          {t('form.cancel')}
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? t('form.submitting') : t('form.submit')}
        </Button>
      </div>
    </form>
  );
};

import { z } from 'zod';

export const userFormSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  confirmPassword: z.string(),
  bio: z.string().optional(),
  acceptTerms: z.boolean().refine(val => val, 'Você deve aceitar os termos'),
  gender: z.enum(['male', 'female', 'other']),
  notifications: z.boolean(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Senhas não coincidem',
  path: ['confirmPassword'],
});

export type UserFormData = z.infer<typeof userFormSchema>;
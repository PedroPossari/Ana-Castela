import React from 'react';
import { Label, ErrorMessage } from '../atoms/FormControls/FormControls';

interface FormGroupProps {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  htmlFor,
  required,
  error,
  children,
  className = ''
}) => (
  <div className={`mb-4 ${className}`}>
    {label && <Label htmlFor={htmlFor} required={required}>{label}</Label>}
    {children}
    <ErrorMessage message={error} />
  </div>
);
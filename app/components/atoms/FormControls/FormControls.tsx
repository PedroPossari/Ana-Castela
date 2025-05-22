import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface BaseProps {
  registration?: UseFormRegisterReturn;
  error?: string;
  className?: string;
}

export const Input: React.FC<
  BaseProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ registration, error, className = "", ...props }) => (
  <input
    {...registration}
    {...props}
    className={`w-full p-2 border rounded ${
      error ? "border-red-500" : "border-gray-300"
    } ${className}`}
  />
);

export const Textarea: React.FC<
  BaseProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ registration, error, className = "", ...props }) => (
  <textarea
    {...registration}
    {...props}
    className={`w-full p-2 border rounded ${
      error ? "border-red-500" : "border-gray-300"
    } ${className}`}
  />
);

interface CheckboxProps extends Omit<BaseProps, "error"> {
  label: string;
}

export const Checkbox: React.FC<
  CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ registration, label, className = "", ...props }) => (
  <label className="flex items-center space-x-2">
    <input
      type="checkbox"
      {...registration}
      {...props}
      className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${className}`}
    />
    <span>{label}</span>
  </label>
);

interface RadioProps extends Omit<BaseProps, "error"> {
  label: string;
}

export const Radio: React.FC<
  RadioProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ registration, label, className = "", ...props }) => (
  <label className="flex items-center space-x-2">
    <input
      type="radio"
      {...registration}
      {...props}
      className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ${className}`}
    />
    <span>{label}</span>
  </label>
);

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  required,
  ...props
}) => (
  <label {...props} className="block text-sm font-medium text-gray-700 mb-1">
    {children}
    {required && <span className="text-red-500 ml-1">*</span>}
  </label>
);

export const ErrorMessage: React.FC<{ message?: string }> = ({ message }) =>
  message ? <p className="mt-1 text-sm text-red-600">{message}</p> : null;

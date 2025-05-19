import { Input } from '../atoms/Input'
import { Text } from '../atoms/Text'
import { FormFieldProps } from "../../types";

export const FormField = ({
  label,
  id,
  type = 'text',
  error,
  required = false,
  ...props
}: FormFieldProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-1">
        <Text>
          {label} {required && <span className="text-red-500">*</span>}
        </Text>
      </label>
      <Input id={id} type={type} hasError={!!error} {...props} />
      {error && (
        <Text className="mt-1 text-red-500">
          {error}
        </Text>
      )}
    </div>
  )
}
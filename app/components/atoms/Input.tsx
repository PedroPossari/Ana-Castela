interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = ({
  hasError = false,
  className,
  ...props
}: InputProps) => {
  return (
    <input
      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
        hasError
          ? "border-red-500 focus:ring-red-200"
          : "border-gray-300 focus:ring-blue-200"
      } ${className}`}
      {...props}
    />
  );
};

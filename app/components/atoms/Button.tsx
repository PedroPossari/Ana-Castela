import { ButtonProps } from "../../types";

export const Button = ({
  children,
  onClick,
  className = "",
  href,
}: ButtonProps) => {
  const baseStyles = `px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors ${className}`;

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseStyles}
    >
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
};

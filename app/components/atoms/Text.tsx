interface TextProps {
  as?: "h1" | "h2" | "h3" | "p" | "span";
  children: React.ReactNode;
  className?: string;
}

export const Text = ({ as = "p", children, className = "" }: TextProps) => {
  const Tag = as;

  const baseStyles = {
    h1: "text-3xl font-bold text-gray-800 mb-6",
    h2: "text-2xl font-bold text-gray-800 mb-4",
    h3: "text-xl font-bold text-gray-800 mb-3",
    p: "text-gray-700 mb-4 leading-relaxed",
    span: "text-current",
  };

  return <Tag className={`${baseStyles[as]} ${className}`}>{children}</Tag>;
};

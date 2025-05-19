import { SectionTitleProps } from "../../types";

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="text-3xl font-bold text-gray-800 mb-6">{children}</h2>;
}

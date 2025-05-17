import { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="text-3xl font-bold text-gray-800 mb-6">{children}</h2>;
}

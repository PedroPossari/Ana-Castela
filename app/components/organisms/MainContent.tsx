import { ReactNode } from "react";

type MainContentProps = {
  children: ReactNode;
};

export function MainContent({ children }: MainContentProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

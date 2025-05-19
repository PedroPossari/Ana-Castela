// components/templates/PostLayout.tsx
import { Text } from "../atoms/Text";
import { PostLayoutProps } from "../../types";

export const PostLayout = ({
  title,
  description,
  children,
}: PostLayoutProps) => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <main className="flex-grow container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Text as="h1" className="text-center">
          {title}
        </Text>
        <Text
          as="p"
          className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          {description}
        </Text>

        {children}
      </div>
    </main>
  </div>
);

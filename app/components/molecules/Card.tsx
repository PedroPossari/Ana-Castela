// components/molecules/Card.tsx
import { Text } from "../atoms/Text";
import { Media } from "../Midia/Midia";
import { ContentCardProps } from "../../types";

export const Card = ({
  title,
  content,
  imageSrc,
  imageAlt,
  index,
  className = "",
}: ContentCardProps) => (
  <div
    className={`bg-white rounded-xl shadow-md overflow-hidden mb-8 hover:shadow-lg transition-shadow ${className}`}
  >
    <div className="md:flex">
      <div className="md:flex-shrink-0 md:w-1/3">
        <Media src={imageSrc} alt={imageAlt} />
      </div>
      <div className="p-6 md:p-8">
        <span className="inline-block bg-purple-300 text-gray-800 font-bold px-3 py-1 rounded-full text-sm mb-3">
          Curiosidade #{index + 1}
        </span>
        <Text as="h3">{title}</Text>
        <Text>{content}</Text>
      </div>
    </div>
  </div>
);

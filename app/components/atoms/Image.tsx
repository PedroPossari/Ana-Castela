import { ImageProps } from "../../types";

export const Image = ({ src, alt, className = "" }: ImageProps) => (
  <img
    src={src}
    alt={alt}
    className={`w-full h-48 object-cover ${className}`}
    loading="lazy"
  />
);

import NextImage from "next/image";
import { MediaProps } from "../../types";

export const Media = ({
  src,
  alt,
  width = 400,
  height = 300,
  className = "",
}: MediaProps) => (
  <div className={`overflow-hidden rounded-lg ${className}`}>
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="object-cover w-full h-full"
    />
  </div>
);

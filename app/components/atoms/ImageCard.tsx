type ImageCardProps = {
  image: string;
  title: string;
};

export const ImageCard = ({ image, title }: ImageCardProps) => (
  <div className="w-48 cursor-pointer hover:scale-105 transition-transform duration-200">
    <img src={image} alt={title} className="rounded-lg shadow-md" />
    <p className="mt-2 text-center text-black text-sm">{title}</p>
  </div>
);

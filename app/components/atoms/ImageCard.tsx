type ImageCardProps = {
  image: string;
  title: string;
  titleClassName?: string;
};

export const ImageCard = ({ image, title, titleClassName = "" }: ImageCardProps) => (
  <div className="w-48 cursor-pointer hover:scale-105 transition-transform duration-200 flex flex-col gap-2 group">
    <img 
      src={image} 
      alt={title} 
      className="rounded-lg shadow-md w-full h-48 object-cover" 
    />
    <div className={`text-center px-1 ${titleClassName}`}>
      <p className="text-sm text-black group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
        {title}
      </p>
    </div>
  </div>
);
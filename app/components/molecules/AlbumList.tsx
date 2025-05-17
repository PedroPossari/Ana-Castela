import Link from "next/link";
import { ImageCard } from "../atoms/ImageCard";

type Album = {
  id: string;
  name: string;
  images: {
    url: string;
  }[];
};

type AlbumListProps = {
  albums: Album[];
};

export const AlbumList = ({ albums }: AlbumListProps) => (
  <div className="flex flex-wrap justify-center items-center gap-6 w-full text-black">
    {albums.map((album) => (
      <Link
        href={`https://open.spotify.com/intl-pt/album/${album.id}`}
        key={album.id}
        className="no-underline group"
      >
        <ImageCard 
          image={album.images[0]?.url} 
          title={album.name}
          titleClassName="font-semibold text-lg text-white group-hover:text-purple-600 transition-colors duration-300"
        />
      </Link>
    ))}
  </div>
);
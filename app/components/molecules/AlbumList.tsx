import Link from "next/link";
import { ImageCard } from "../atoms/ImageCard";

type AlbumListProps = {
  albums: any[];
};

export const AlbumList = ({ albums }: AlbumListProps) => (
  <div className="flex flex-wrap justify-center items-center gap-6 w-full">
    {albums.map((album) => (
      <Link
        href={`https://open.spotify.com/intl-pt/album/${album.id}`}
        key={album.id}
        className="no-underline"
      >
        <ImageCard image={album.images[0]?.url} title={album.name} />
      </Link>
    ))}
  </div>
);

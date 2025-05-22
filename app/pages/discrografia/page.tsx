// app/albums/page.tsx (Server Component — sem "use client")
import { getAnaCastelaAlbums } from "../../hooks/getArtistAlbums";
import { AlbumsClient } from "../../components/organisms/AlbumsClient/AlbumsClient";

export default async function AlbumsPage() {
  const albums = await getAnaCastelaAlbums();

  return <AlbumsClient albums={albums} />;
}

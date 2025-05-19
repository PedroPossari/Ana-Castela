import { getAnaCastelaAlbums } from "../../hooks/getArtistAlbums";
import { AlbumList } from "../../components/molecules/AlbumList";
import { MainContent } from "@/app/components/organisms/MainContent";

export default async function AlbumsPage() {
  const albums = await getAnaCastelaAlbums();

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="bg-gray-100">
        <MainContent>
          <h1 className="text-2xl font-bold mb-4 text-black">
            Álbuns da Ana Castela
          </h1>
          <AlbumList albums={albums} />
        </MainContent>
      </main>
    </div>
  );
}
<main className="p-6"></main>;

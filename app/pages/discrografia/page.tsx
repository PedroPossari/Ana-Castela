import { getAnaCastelaAlbums } from "../../hooks/getArtistAlbums";
import { AlbumList } from "../../components/molecules/AlbumList";
import { Header } from "@/app/components/organisms/Header";
import { HeroSection } from "@/app/components/organisms/HeroSection";
import { MainContent } from "@/app/components/organisms/MainContent";
import { Footer } from "@/app/components/organisms/Footer";

export default async function AlbumsPage() {
  const albums = await getAnaCastelaAlbums();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="bg-gray-100">
        <HeroSection />
        <MainContent>
          <h1 className="text-2xl font-bold mb-4 text-black">
            Álbuns da Ana Castela
          </h1>
          <AlbumList albums={albums} />
        </MainContent>
      </main>
      <Footer />
    </div>
  );
}
<main className="p-6"></main>;

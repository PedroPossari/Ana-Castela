import { Header } from "@/app/components/organisms/Header";
import { HeroSection } from "@/app/components/organisms/HeroSection";
import { MainContent } from "@/app/components/organisms/MainContent";
import { getAnaCastelaPopularTracks } from "../../hooks/getPopularTracks";
import { TrackCard } from "../../components/molecules/TrackCard";

export default async function MusicasPopulares() {
  const tracks = await getAnaCastelaPopularTracks(3);

  return (
    <>
      <Header />
      <main className="bg-gray-100">
        <HeroSection />
        <MainContent>
          <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Top 3 Músicas Mais Populares da Ana Castela
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tracks.map((track) => (
                  <TrackCard key={track.id} track={track} />
                ))}
              </div>
            </div>
          </div>
        </MainContent>
      </main>
    </>
  );
}

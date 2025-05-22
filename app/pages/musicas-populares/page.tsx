import { getAnaCastelaPopularTracks } from "../../hooks/getPopularTracks";
import { PopularTracksSection } from "../../components/organisms/PopularTracksSection";

export default async function MusicasPopularesPage() {
  const tracks = await getAnaCastelaPopularTracks(3);

  return (
    <main className="bg-gray-100">
      <PopularTracksSection tracks={tracks} />
    </main>
  );
}
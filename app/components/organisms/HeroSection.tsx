import { AnaCastelaPlayer } from "../molecules/SpotifyPlayer";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ana Castelo</h1>
          <p className="text-xl mb-6">
            Bem-vindo ao meu mundo de música e arte
          </p>
        </div>
        <div className="md:w-1/2">
          <AnaCastelaPlayer />
        </div>
      </div>
    </section>
  );
}

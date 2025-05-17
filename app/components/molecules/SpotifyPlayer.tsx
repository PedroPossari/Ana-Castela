"use client";

export function AnaCastelaPlayer() {
  const handleClick = () => {
    window.open(
      "https://open.spotify.com/intl-pt/artist/2CKOmarVWvWqkNWUatHCex",
      "_blank"
    );
  };

  return (
    <div
      className="bg-neutral-900 p-4 rounded-lg cursor-pointer hover:bg-neutral-800 transition-colors"
      onClick={handleClick}
    >
      <div className="flex items-center gap-3">
        <img
          src="/images/Boiadeira.png"
          alt="Ana Castela"
          className="w-14 h-14 rounded-md"
        />
        <div className="overflow-hidden">
          <h3 className="text-white font-medium truncate">Ana Castela</h3>
          <p className="text-neutral-400 text-sm truncate">Ouça no Spotify</p>
        </div>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { AlbumListProps } from "../../../types";
import { useFavorites } from "../../../context/FavoritesContext";

export const AlbumList = ({ albums }: AlbumListProps) => {
  const { favorites, toggleFavorite } = useFavorites();

  const share = async (url: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        alert("Link copiado para a área de transferência!");
      } else {
        alert("Compartilhamento não suportado neste navegador.");
      }
    } catch (error) {
      console.error("Erro ao copiar o link:", error);
      alert("Erro ao copiar o link.");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full">
      {albums.map((album) => {
        const albumUrl = `https://open.spotify.com/intl-pt/album/${album.id}`;
        const isFavorited = favorites.includes(album.id);

        return (
          <div key={album.id} className="relative bg-white-900 rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 group">
            <Link href={albumUrl} target="_blank" className="no-underline block">
              <img src={album.images[0]?.url} alt={album.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-black text-base group-hover:text-purple-500 transition-colors duration-200">
                  {album.name}
                </h3>
              </div>
            </Link>

            <div className="absolute top-3 right-3 flex space-x-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(album.id);
                }}
                aria-label={isFavorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                className={`w-9 h-9 flex items-center justify-center rounded-full bg-zinc-800 bg-opacity-80 hover:bg-purple-600 transition-colors ${isFavorited ? "text-purple-400" : "text-black"}`}
              >
                {isFavorited ? "★" : "☆"}
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  share(albumUrl);
                }}
                aria-label="Compartilhar"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-800 bg-opacity-80 hover:bg-purple-600 transition-colors text-black"
              >
                🔗
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
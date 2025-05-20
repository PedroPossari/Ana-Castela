"use client";
import { createContext, useContext, useEffect, useState, Dispatch, SetStateAction } from "react";

interface FavoritesContextType {
  favorites: string[];
  setFavorites: Dispatch<SetStateAction<string[]>>;
  toggleFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favoritedAlbums");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const toggleFavorite = (id: string) => {
    const updated = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];

    setFavorites(updated);
    localStorage.setItem("favoritedAlbums", JSON.stringify(updated));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites deve ser usado dentro do FavoritesProvider");
  }
  return context;
};
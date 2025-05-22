"use client";

import { useTranslation } from "react-i18next";
import { AlbumList } from "../molecules/AlbumList";
import { MainContent } from "../organisms/MainContent";

type AlbumsClientProps = {
  albums: any[]; 
};

export function AlbumsClient({ albums }: AlbumsClientProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="bg-gray-100">
        <MainContent>
          <h1 className="text-2xl font-bold mb-4 text-black">
            {t("albumsPage.title")}
          </h1>
          <AlbumList albums={albums} />
        </MainContent>
      </main>
    </div>
  );
}

"use client";

import { AnaCastelaPlayer } from "../molecules/SpotifyPlayer";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-xl mb-6">
            {t("hero.subtitle")}
          </p>
        </div>
        <div className="md:w-1/2">
          <AnaCastelaPlayer />
        </div>
      </div>
    </section>
  );
}

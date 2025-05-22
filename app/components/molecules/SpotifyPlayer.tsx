"use client";

import { useTranslation } from "react-i18next";

export function AnaCastelaPlayer() {
  const { t } = useTranslation();

  const handleClick = () => {
    window.open(
      "https://open.spotify.com/intl-pt/artist/2CKOmarVWvWqkNWUatHCex",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="bg-neutral-900 p-4 rounded-lg cursor-pointer hover:bg-neutral-800 transition-colors flex items-center gap-3 w-full text-left"
      aria-label={t("anaCastela.ariaLabel")}
      type="button"
    >
      <img
        src="/images/Boiadeira.png"
        alt="Ana Castela"
        className="w-14 h-14 rounded-md flex-shrink-0"
      />
      <div className="overflow-hidden">
        <h3 className="text-white font-medium truncate">Ana Castela</h3>
        <p className="text-neutral-400 text-sm truncate">
          {t("anaCastela.listenOnSpotify")}
        </p>
      </div>
    </button>
  );
}

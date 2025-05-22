"use client";

import { useTranslation } from "react-i18next";
import { TrackCard } from "../../components/molecules/TrackCard";
import { Track } from "../../hooks/getPopularTracks";

type PopularTracksSectionProps = {
  tracks: Track[];
};

export function PopularTracksSection({ tracks }: PopularTracksSectionProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          {t("popularTracks.title")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </div>
  );
}

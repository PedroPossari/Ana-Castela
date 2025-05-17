import { getSpotifyToken } from "./getToken";

export interface Track {
  id: string;
  name: string;
  album: {
    name: string;
    images: { url: string }[];
  };
  duration_ms: number;
  popularity: number;
  external_urls: {
    spotify: string;
  };
}

export const getAnaCastelaPopularTracks = async (limit: number = 3): Promise<Track[]> => {
  const token = await getSpotifyToken();

  const searchRes = await fetch(
    `https://api.spotify.com/v1/search?q=ana%20castela&type=artist&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  
  const searchData = await searchRes.json();
  const artistId = searchData.artists.items[0]?.id;

  if (!artistId) throw new Error("Artista não encontrado");

  const tracksRes = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=BR`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const tracksData = await tracksRes.json();
  return tracksData.tracks.slice(0, limit) as Track[];
};
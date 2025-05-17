import { getSpotifyToken } from "./getToken";

export const getAnaCastelaAlbums = async () => {
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

  if (!artistId) throw new Error("Artista não encontrada");

  const albumRes = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single&limit=20`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const albumData = await albumRes.json();
  return albumData.items;
};

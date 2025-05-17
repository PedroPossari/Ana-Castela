export type Post = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    imageUrl: string;
    category: string;
    date: string;
    readTime: number;
  };
  
  export interface SpotifyTrack {
    name: string;
    artist: string;
    albumImage: string;
    url: string;
  }
  
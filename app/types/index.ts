import React, { ReactNode } from "react";

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
  url: string;
};

export interface SpotifyTrack {
  name: string;
  artist: string;
  albumImage: string;
  url: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export type ImageCardProps = {
  image: string;
  title: string;
  titleClassName?: string;
};

export interface MediaProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export type SectionTitleProps = {
  children: ReactNode;
};

export type Album = {
  id: string;
  name: string;
  images: {
    url: string;
  }[];
};

export type AlbumListProps = {
  albums: Album[];
};

export type BlogPostCardProps = {
  post: Post;
};
export interface ContentCardProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
  className?: string;
}

export interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  error?: string;
  required?: boolean;
}

export type MainContentProps = {
  children: ReactNode;
};

export interface PostLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

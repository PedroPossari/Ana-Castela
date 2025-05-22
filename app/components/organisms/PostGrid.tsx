"use client";

import { BlogPostCard } from "../molecules/BlogPostCard";
import { SectionTitle } from "../atoms/SectionTitle";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function PostGrid() {
  const { t } = useTranslation();

  const posts = t("postGrid2.posts", { returnObjects: true }) as {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    date: string;
    readTime: number;
    url: string;
    imageUrl: string;
  }[];

  return (
    <div>
      <SectionTitle>{t("postGrid.title")}</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.slug}`} className="block group">
            <div
              className="transition-all duration-300 ease-in-out 
                         group-hover:scale-[1.02] group-hover:shadow-lg 
                         active:scale-[1.02] active:shadow-lg
                         active:opacity-90"
            >
              <BlogPostCard
                post={{
                  id: post.id,
                  slug: post.slug,
                  title: post.title,
                  excerpt: post.excerpt,
                  content: post.content,
                  category: post.category,
                  date: post.date,
                  readTime: post.readTime,
                  url: post.url,
                  imageUrl: post.imageUrl,
                }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

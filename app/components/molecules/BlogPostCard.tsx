import Image from "next/image";
import { BlogPostCardProps } from "../../types";

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-sm text-purple-600">{post.category}</span>
        <h3 className="text-xl text-neutral-400 font-bold mt-2 mb-3 hover:text-purple-600">
          <div>{post.title}</div>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </article>
  );
}

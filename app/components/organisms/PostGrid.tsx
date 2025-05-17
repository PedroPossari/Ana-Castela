import { mockPosts } from "../../data/mockPosts";
import { BlogPostCard } from "../molecules/BlogPostCard";
import { SectionTitle } from "../atoms/SectionTitle";
import Link from "next/link";

export function PostGrid() {
  return (
    <div>
      <SectionTitle>A Trajetória de Sucesso nos Prêmios</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {mockPosts.map((post) => (
          <Link 
            key={post.id} 
            href={`/posts/${post.id}`}
            className="block group" // Adicionei 'group' para estilização hover
          >
            <div className="transition-all duration-300 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg">
              <BlogPostCard post={post} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
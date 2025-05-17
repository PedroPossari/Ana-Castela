import { mockPosts } from "../../data/mockPosts";
import { BlogPostCard } from "../molecules/BlogPostCard";
import { SectionTitle } from "../atoms/SectionTitle";

export function PostGrid() {
  return (
    <div>
      <SectionTitle>A Trajetória de Sucesso nos Prêmios</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {mockPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

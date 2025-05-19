import { MainContent } from "./components/organisms/MainContent";
import { PostGrid } from "./components/organisms/PostGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <MainContent>
          <PostGrid />
        </MainContent>
      </main>
    </div>
  );
}

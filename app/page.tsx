import { Footer } from "./components/organisms/Footer";
import { Header } from "./components/organisms/Header";
import { HeroSection } from "./components/organisms/HeroSection";
import { MainContent } from "./components/organisms/MainContent";
import { PostGrid } from "./components/organisms/PostGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <HeroSection />
        <MainContent>
          <PostGrid />
        </MainContent>
      </main>
      <Footer />
    </div>
  );
}

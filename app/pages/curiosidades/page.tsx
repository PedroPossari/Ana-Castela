import { PostLayout } from "../../components/organisms/PostLayout";
import { Card } from "../../components/molecules/Card";
import { curiosities } from "../../data/curiosidadesData";
import { Header } from "@/app/components/organisms/Header";
import { HeroSection } from "@/app/components/organisms/HeroSection";
import { MainContent } from "@/app/components/organisms/MainContent";
import { Footer } from "@/app/components/organisms/Footer";


export default function Curiosidades() {
  return (
    <>
    <main className="min-h-screen bg-gray-50">
    <Header />
    <HeroSection />
    <MainContent>
    <PostLayout
      title="6 Curiosidades sobre Ana Castela"
      description="Fatos interessantes sobre a vida e carreira da cantora"
    >
      <div className="mt-8">
        {curiosities.map((item, index) => (
          <Card
            key={index}
            index={index}
            title={item.title}
            content={item.content}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
          />
        ))}
      </div>
    </PostLayout>
    </MainContent>
    </main>
    <Footer />
    </>
  );
}
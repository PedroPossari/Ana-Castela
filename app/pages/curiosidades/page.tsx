"use client";

import { useTranslation } from "react-i18next";
import { PostLayout } from "../../components/organisms/PostLayout";
import { Card } from "../../components/molecules/Card";
import { MainContent } from "@/app/components/organisms/MainContent";

export default function Curiosidades() {
  const { t } = useTranslation();
  const curiosities = t("curiosidades.items", { returnObjects: true }) as {
    title: string;
    content: string;
    imageSrc: string;
    imageAlt: string;
  }[];

  return (
    <main className="min-h-screen bg-gray-50">
      <MainContent>
        <PostLayout
          title={t("curiosidades.title")}
          description={t("curiosidades.description")}
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
  );
}

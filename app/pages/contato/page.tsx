"use client";
import { ContactForm } from '../../components/organisms/ContactForm'
import { Header } from "@/app/components/organisms/Header";
import { HeroSection } from "@/app/components/organisms/HeroSection";
import { MainContent } from "@/app/components/organisms/MainContent";

export default function ContactPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 py-12">
        <MainContent>
          <title>Contato | Meu Blog</title>
          <meta name="description" content="Entre em contato conosco" />

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <h1 className="text-4xl text-center text-gray-900 mb-8">
              Entre em Contato
            </h1>
            
            <ContactForm />

            <div className="mt-12 border-t pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Outras formas de contato
              </h2>
              <p className="text-gray-600 text-center">
                📧 Email: <a href="mailto:contato@fansAnaCastelo.com" className="text-blue-600 hover:underline">contato@fansAnaCastelo.com</a>
              </p>
              <p className="text-gray-600 text-center mt-2">
                📞 Telefone: <a href="tel:+5511999999999" className="text-blue-600 hover:underline">(11) 99999-9999</a>
              </p>
            </div>
          </div>
        </MainContent>
      </main>
    </>
  );
}

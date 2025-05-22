"use client";

import { useTranslation } from "react-i18next";
import { UserForm } from "../../components/organisms/UserForm/UserForm";
import { MainContent } from "@/app/components/organisms/MainContent";
import { UserFormData } from "../../hooks/schema";

export default function ContactPage() {
  const { t } = useTranslation();

  const handleSubmit = async (data: UserFormData) => {
    console.log("Dados do formulário:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(t("contactPage.successAlert"));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 py-12">
      <MainContent>
        <title>{t("contactPage.title")}</title>
        <meta name="description" content={t("contactPage.description")} />

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <UserForm onSubmit={handleSubmit} />

          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              {t("contactPage.otherContacts")}
            </h2>
            <p className="text-gray-600 text-center">
              📧 {t("contactPage.emailLabel")}{" "}
              <a
                href="mailto:contato@fansAnaCastelo.com"
                className="text-blue-600 hover:underline"
              >
                contato@fansAnaCastelo.com
              </a>
            </p>
            <p className="text-gray-600 text-center mt-2">
              📞 {t("contactPage.phoneLabel")}{" "}
              <a
                href="tel:+5511999999999"
                className="text-blue-600 hover:underline"
              >
                (11) 99999-9999
              </a>
            </p>
          </div>
        </div>
      </MainContent>
    </main>
  );
}

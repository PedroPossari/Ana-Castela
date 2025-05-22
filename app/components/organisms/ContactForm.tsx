"use client";

import { useState } from "react";
import { FormField } from "../molecules/FormField";
import { Button } from "../atoms/FormButton";
import { Text } from "../atoms/Text";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = t("contactForm.errors.name");
    if (!formData.email.trim()) {
      newErrors.email = t("contactForm.errors.email.required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contactForm.errors.email.invalid");
    }
    if (!formData.message.trim())
      newErrors.message = t("contactForm.errors.message");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="p-6 bg-green-50 rounded-md">
        <Text className="text-green-800">
          {t("contactForm.successMessage")}
        </Text>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <Text className="mb-6 text-center">{t("contactForm.title")}</Text>

      <FormField
        label={t("contactForm.fields.name")}
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
      />

      <FormField
        label={t("contactForm.fields.email")}
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />

      <div className="mb-4">
        <label htmlFor="message" className="block mb-1">
          <Text>
            {t("contactForm.fields.message")}{" "}
            <span className="text-red-500">*</span>
          </Text>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && (
          <Text className="mt-1 text-red-500">{errors.message}</Text>
        )}
      </div>

      <div className="text-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting
            ? t("contactForm.submitting")
            : t("contactForm.submitButton")}
        </Button>
      </div>
    </form>
  );
};

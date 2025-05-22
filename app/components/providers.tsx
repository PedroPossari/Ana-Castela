// app/providers.tsx
"use client";

import { FavoritesProvider } from "../context/FavoritesContext";
import { I18nProvider } from "./I18nProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <FavoritesProvider>
        {children}
      </FavoritesProvider>
    </I18nProvider>
  );
}
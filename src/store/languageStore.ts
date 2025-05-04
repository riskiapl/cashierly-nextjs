import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LanguageState } from "@/types/languageTypes";

const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "id", // Default language
      languages: ["id", "en"], // List of supported languages
      setLanguage: (language: string) => set({ language }),
    }),
    {
      name: "language-storage", // Name for the storage
    }
  )
);

export default useLanguageStore;

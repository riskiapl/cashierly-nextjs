import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LanguageState } from "@/types/languageTypes";
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  LANGUAGE_STORAGE_KEY,
} from "@/lib/helper";

const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: DEFAULT_LANGUAGE,
      languages: SUPPORTED_LANGUAGES,

      setLanguage: (language: string) => set({ language }),
    }),
    {
      name: LANGUAGE_STORAGE_KEY,
    }
  )
);

export default useLanguageStore;

// Language constants
export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["id", "en"];
export const LANGUAGE_STORAGE_KEY = "language-storage";

// Helper function to get language from storage (works in both client and server contexts)
export const getLanguageFromStorage = () => {
  // When in a browser context
  if (typeof window !== "undefined" && window.localStorage) {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        return {
          language: data.state?.language || DEFAULT_LANGUAGE,
          languages: data.state?.languages || SUPPORTED_LANGUAGES,
        };
      } catch (e) {
        console.error("Error parsing language from storage:", e);
      }
    }
  }

  // Default return if no storage or parsing fails
  return {
    language: DEFAULT_LANGUAGE,
    languages: SUPPORTED_LANGUAGES,
  };
};

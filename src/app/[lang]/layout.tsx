import { notFound } from "next/navigation";
import useLanguageStore from "@/store/languageStore";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

export default async function Layout({ children, params }: LayoutProps) {
  // Get the supported languages from the store
  // Note: We can't directly use the useLanguageStore hook here because
  // this is a server component. Instead, we need to access the initial state.
  const initialState = useLanguageStore.getState();
  const supportedLanguages = initialState.languages;

  // Check if the provided lang parameter is supported
  const { lang } = await params;
  if (!supportedLanguages.includes(lang)) {
    notFound(); // Redirects to the 404 page
  }

  return <>{children}</>;
}

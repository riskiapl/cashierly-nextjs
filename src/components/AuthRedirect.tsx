"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useLanguageStore from "@/store/languageStore";
import PageLoader from "./PageLoader";

export default function AuthRedirect({
  children,
  redirectType, // 'auth' for auth layout, 'dashboard' for dashboard layout
}: {
  children: React.ReactNode;
  redirectType: "auth" | "dashboard";
}) {
  const router = useRouter();
  const { language } = useLanguageStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use try-catch to handle cases where localStorage might not be available
    try {
      const authData = localStorage.getItem("auth");

      if (redirectType === "auth") {
        // In auth layout (login, register, etc.)
        if (authData) {
          // User is authenticated, redirect to dashboard
          router.replace(`/${language}/`);
          return; // Keep loading true during redirect
        }
      } else if (redirectType === "dashboard") {
        // In dashboard layout
        if (!authData) {
          // User is not authenticated, redirect to login
          router.replace(`/${language}/login`);
          return; // Keep loading true during redirect
        }
      }

      // If we reach here, no redirect is happening, so we can stop loading
      setLoading(false);
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      setLoading(false);
    }
  }, [language, redirectType, router]);

  if (loading) {
    return <PageLoader />;
  }

  return <>{children}</>;
}

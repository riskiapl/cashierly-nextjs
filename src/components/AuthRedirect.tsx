"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useLanguageStore from "@/store/languageStore";

export default function AuthRedirect({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { language } = useLanguageStore();

  useEffect(() => {
    const authData = localStorage.getItem("authToken");

    if (authData) {
      router.replace(`/${language}/dashboard`); // misalnya dashboard sebagai halaman utama setelah login
    } else {
      router.replace(`/${language}/login`);
    }
  }, [router, language]);

  return <>{children}</>;
}

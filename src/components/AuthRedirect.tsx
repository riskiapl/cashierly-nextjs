"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthRedirect({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const authData = localStorage.getItem("authToken");

    if (authData) {
      router.replace("/dashboard"); // misalnya dashboard sebagai halaman utama setelah login
    } else {
      router.replace("/login");
    }
  }, [router]);

  return <>{children}</>;
}

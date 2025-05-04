import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cashierly | Login",
  description: "Authentication pages for Cashierly application",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

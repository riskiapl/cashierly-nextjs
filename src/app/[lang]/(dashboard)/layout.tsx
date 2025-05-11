import React from "react";
import AuthRedirect from "@/context/AuthRedirect";

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthRedirect redirectType="dashboard">{children}</AuthRedirect>;
}

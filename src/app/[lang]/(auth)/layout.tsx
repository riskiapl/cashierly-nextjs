import React from "react";

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted py-6 px-4 sm:px-6 lg:px-8 relative">
      <div>{children}</div>
    </div>
  );
}

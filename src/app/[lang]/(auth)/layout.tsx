"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo.png";
import AuthRedirect from "@/components/AuthRedirect";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { TypographyH2, TypographyP } from "@/components/ui/typography";

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthRedirect redirectType="auth">
      <div className="min-h-screen flex items-center justify-center bg-muted py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-4 right-4 z-10">
          <ThemeSwitcher />
        </div>
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="flex justify-center">
              <Image
                src={Logo}
                alt="Cashierly Logo"
                width={100}
                height={100}
                className={cn("w-auto", "mb-2")}
                priority
              />
            </div>
            <TypographyH2 className="mt-6">Cashierly</TypographyH2>
            <TypographyP className="mt-2">
              Manage your business transactions efficiently
            </TypographyP>
          </CardHeader>
          <CardContent>{children}</CardContent>
          <CardFooter className="flex flex-col gap-2 text-center">
            <TypographyP className="text-xs">
              &copy; {new Date().getFullYear()} Cashierly. All rights reserved.
            </TypographyP>
          </CardFooter>
        </Card>
      </div>
    </AuthRedirect>
  );
}

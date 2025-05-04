import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo.png";

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
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
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Cashierly
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Manage your business transactions efficiently
          </p>
        </div>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
        <div className="text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Cashierly. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

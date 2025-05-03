// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;

  // Jika belum login dan mengakses halaman selain auth, redirect ke login
  const isAuthPage = request.nextUrl.pathname.startsWith("/(auth)");

  if (!token && !isAuthPage) {
    const loginUrl = new URL("/(auth)/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Jika sudah login dan mengakses halaman login/register, redirect ke dashboard
  if (token && isAuthPage) {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  LANGUAGE_STORAGE_KEY,
} from "@/lib/helper";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for API routes and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files like images, css, etc.
  ) {
    return NextResponse.next();
  }

  // Get language data from cookie
  let lang = DEFAULT_LANGUAGE;
  let supportedLanguages = SUPPORTED_LANGUAGES;

  const languageCookie = request.cookies.get(LANGUAGE_STORAGE_KEY)?.value;

  if (languageCookie) {
    try {
      // Parse the JSON from cookie
      const languageData = JSON.parse(languageCookie);
      // Get language from store
      lang = languageData.state?.language || DEFAULT_LANGUAGE;
      // Get supported languages from store
      supportedLanguages = languageData.state?.languages || SUPPORTED_LANGUAGES;
    } catch (e) {
      // Use defaults if parsing fails
      console.error("Error parsing language cookie:", e);
    }
  }

  // Create regex pattern dynamically from supported languages
  const langPattern = supportedLanguages.join("|");
  const pathnameHasLang = pathname.match(
    new RegExp(`^\\/(${langPattern})($|\\/.*)`)
  );

  if (pathnameHasLang) {
    return NextResponse.next();
  }

  // Create new URL with language prefix
  const newUrl = new URL(`/${lang}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

// Configure which paths should trigger this middleware
export const config = {
  matcher: [
    // Skip public files and api routes
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

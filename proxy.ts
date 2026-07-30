import { NextResponse } from "next/server";
import { auth } from "@/auth";

const PUBLIC_PATHS = ["/login"];

export default auth((req) => {
  const { pathname } = req.nextUrl;
  // Las rutas /api/* manejan su propia sesión y devuelven 401/403 JSON o texto;
  // redirigirlas a /login rompería a los clientes fetch() (recibirían HTML).
  const isApiRoute = pathname.startsWith("/api/");
  const isPublic = PUBLIC_PATHS.includes(pathname) || isApiRoute;

  if (!req.auth && !isPublic) {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (req.auth && pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.svg$).*)"],
};

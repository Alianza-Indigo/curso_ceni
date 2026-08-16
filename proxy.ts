import { NextResponse } from "next/server";
import { auth } from "@/auth";

const PUBLIC_PATHS = ["/", "/login"];

export default auth((req) => {
  const { pathname } = req.nextUrl;
  // Las rutas /api/* manejan su propia sesión y devuelven 401/403 JSON o texto;
  // redirigirlas a /login rompería a los clientes fetch() (recibirían HTML).
  // /admin/* tiene su propio sistema de sesión (cookie firmada, no Auth.js) y
  // valida acceso en cada página; no debe pasar por el gate de sesión de estudiante.
  const isApiRoute = pathname.startsWith("/api/");
  const isAdminRoute = pathname.startsWith("/admin");
  // /verificar/[folio] es la página pública de verificación de constancias —
  // cualquiera con un folio (por ejemplo, desde el QR de la constancia) debe
  // poder consultarla sin tener sesión ni cuenta en el curso.
  const isVerificarRoute = pathname.startsWith("/verificar/");
  const isPublic = PUBLIC_PATHS.includes(pathname) || isApiRoute || isAdminRoute || isVerificarRoute;

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
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|jpg|jpeg|png|gif|webp|avif|ico)$).*)",
  ],
};

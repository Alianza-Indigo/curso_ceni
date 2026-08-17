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

  const res = NextResponse.next();

  // Anti back/forward cache para las páginas protegidas del curso.
  // Sin esto, al cerrar sesión el navegador puede restaurar desde su bfcache
  // una copia en caché de una página del curso al presionar "Atrás", mostrando
  // contenido de una sesión ya cerrada. Con `no-store` la página deja de ser
  // elegible para el bfcache: al presionar "Atrás" el navegador hace una
  // petición nueva y este middleware la redirige a /login.
  if (!isPublic) {
    res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
    res.headers.set("Pragma", "no-cache");
    res.headers.set("Expires", "0");
  }

  return res;
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|jpg|jpeg|png|gif|webp|avif|ico|pdf|docx|xlsx)$).*)",
  ],
};

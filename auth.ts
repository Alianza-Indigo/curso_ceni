import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db";

// Nombre de la cookie de sesión, declarado explícitamente (en vez de dejar
// que Auth.js lo infiera) porque lib/credenciales-auth.ts necesita crear
// sesiones de base de datos "a mano" para el login por contraseña y debe
// escribir la cookie con el mismo nombre que Auth.js espera leer.
export const NOMBRE_COOKIE_SESION =
  process.env.NODE_ENV === "production" ? "__Secure-authjs.session-token" : "authjs.session-token";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // Un empleado invitado puede crear primero una contraseña (User sin
      // Account de Google) y más tarde entrar con Google usando el mismo
      // correo; sin este flag, Auth.js bloquea esa combinación con
      // OAuthAccountNotLinked para evitar account-takeover. Es aceptable acá
      // porque el correo ya está verificado por dos vías: lo capturó la
      // organización al invitar, y el propio token de invitación de un solo
      // uso ya demuestra control del inbox antes de llegar a este punto.
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  session: { strategy: "database" },
  cookies: {
    sessionToken: {
      name: NOMBRE_COOKIE_SESION,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    session({ session, user }) {
      if (session.user) session.user.id = user.id;
      return session;
    },
  },
});

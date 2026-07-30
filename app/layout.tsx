import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import HeaderCurso from "@/components/HeaderCurso";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Curso CENI · Alianza Índigo Neurodivergente A.C.",
  description:
    "Curso interactivo de Certificación de Entornos Neuroinclusivos (CENI). No necesitas PARECER para SER.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#070b2f]">
        <a href="#contenido-principal" className="skip-link">
          Ir al contenido principal
        </a>
        <HeaderCurso />
        <main id="contenido-principal" className="flex-1">
          {children}
        </main>
        <footer className="border-t border-[#e5def4] bg-[#fbfaff] py-6 text-center text-xs text-[#6c6690]">
          Alianza Índigo Neurodivergente A.C. · Curso CENI v1.0 — 2025 · &quot;No necesitas PARECER para SER&quot;
        </footer>
      </body>
    </html>
  );
}

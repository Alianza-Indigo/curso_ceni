import { signIn } from "@/auth";
import { GraduationCap } from "lucide-react";

export const metadata = { title: "Iniciar sesión · Curso CENI" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const { callbackUrl } = await searchParams;

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#4b18a8] text-white">
        <GraduationCap className="h-7 w-7" aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-serif text-3xl font-black text-[#070b2f]">Curso CENI</h1>
      <p className="mt-2 text-sm text-[#6c6690]">
        Certificación de Entornos Neuroinclusivos · Alianza Índigo Neurodivergente A.C.
      </p>
      <p className="mt-6 text-sm text-[#20234a]">
        Inicia sesión para guardar tu progreso, tus resultados de quiz y obtener tu constancia al
        aprobar el examen final.
      </p>

      <form
        className="mt-8 w-full"
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: callbackUrl || "/" });
        }}
      >
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg border border-[#e3dfef] bg-white px-6 text-sm font-black uppercase text-[#070b2f] shadow-sm hover:bg-[#f5f1ff]"
        >
          <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
            <path
              fill="#FFC107"
              d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
            />
            <path
              fill="#FF3D00"
              d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
            />
          </svg>
          Continuar con Google
        </button>
      </form>

      <p className="mt-6 text-xs text-[#6c6690]">
        &quot;No necesitas PARECER para SER.&quot;
      </p>
    </div>
  );
}

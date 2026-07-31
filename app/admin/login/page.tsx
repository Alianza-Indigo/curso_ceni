import { ShieldCheck } from "lucide-react";
import AdminLoginForm from "@/components/AdminLoginForm";

export const metadata = { title: "Admin · Curso CENI" };

export default function AdminLoginPage() {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center px-4 py-24 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#070b2f] text-white">
        <ShieldCheck className="h-7 w-7" aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-serif text-2xl font-black text-[#070b2f]">Panel de administración</h1>
      <p className="mt-2 text-sm text-[#6c6690]">Acceso restringido — Alianza Índigo Neurodivergente A.C.</p>

      <AdminLoginForm />
    </div>
  );
}

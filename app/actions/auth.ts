"use server";

import { signIn, signOut } from "@/auth";

export async function signOutAction() {
  // El parámetro `salir=1` le indica a la landing que active el blindaje del
  // botón "Atrás" del navegador (evita volver al curso o al OAuth de Google).
  await signOut({ redirectTo: "/?salir=1" });
}

export async function signInGoogleAction() {
  await signIn("google", { redirectTo: "/" });
}

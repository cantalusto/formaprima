"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { supabaseConfigurado } from "@/lib/supabase/config";

export type LoginState = { erro: string };

export async function entrar(
  _estado: LoginState,
  formData: FormData
): Promise<LoginState> {
  if (!supabaseConfigurado()) {
    return { erro: "Configure o Supabase no arquivo .env.local para entrar." };
  }

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || password.length < 6) {
    return { erro: "Informe um e-mail e uma senha válida." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { erro: "E-mail ou senha incorretos." };
  redirect("/producao");
}

export async function sair() {
  if (supabaseConfigurado()) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }
  redirect("/login");
}

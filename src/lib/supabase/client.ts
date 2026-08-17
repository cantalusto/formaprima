"use client";

import { createBrowserClient } from "@supabase/ssr";
import { configuracaoSupabase } from "./config";

export function createClient() {
  const { url, chave } = configuracaoSupabase();
  return createBrowserClient(url, chave);
}

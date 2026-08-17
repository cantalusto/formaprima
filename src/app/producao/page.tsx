import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ProducaoClient } from "./ProducaoClient";
import { ProducaoCompartilhada } from "./ProducaoCompartilhada";
import { createClient } from "@/lib/supabase/server";
import { supabaseConfigurado } from "@/lib/supabase/config";

export const metadata: Metadata = {
  title: "Produção",
  robots: { index: false, follow: false },
};

export default async function ProducaoPage() {
  if (!supabaseConfigurado()) return <ProducaoClient />;

  const supabase = await createClient();
  const { data: authData } = await supabase.auth.getUser();
  if (!authData.user) redirect("/login");

  const { data: perfil } = await supabase
    .from("profiles")
    .select("nome, role, ativo")
    .eq("id", authData.user.id)
    .single();

  if (!perfil?.ativo) redirect("/login");

  const { data: pedidos, error } = await supabase
    .from("orders")
    .select(`
      id, codigo, origem, entrega, payment_status, art_status,
      production_status, total, created_at, updated_at,
      customers ( nome, whatsapp, empresa ),
      order_items ( id, descricao, largura, altura, quantidade, total ),
      order_status_history ( id, tipo, descricao, created_at )
    `)
    .order("created_at", { ascending: false });

  return (
    <ProducaoCompartilhada
      usuario={{ nome: perfil.nome, role: perfil.role }}
      pedidos={pedidos ?? []}
      erro={error ? "Não foi possível carregar os pedidos agora." : null}
    />
  );
}

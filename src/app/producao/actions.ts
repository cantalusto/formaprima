"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

const pagamentos = ["pendente", "parcial", "pago", "cancelado", "estornado"] as const;
const artes = ["nao_enviada", "recebida", "em_analise", "correcao_solicitada", "aprovada", "nao_necessaria"] as const;
const producoes = ["pedido_aberto", "aguardando_liberacao", "na_fila", "em_producao", "acabamento", "pronto", "despachado", "entregue", "cancelado"] as const;

type Campo = "payment_status" | "art_status" | "production_status";

export async function atualizarStatusPedido(id: string, campo: Campo, valor: string) {
  const permitidos = campo === "payment_status" ? pagamentos : campo === "art_status" ? artes : producoes;
  if (!id || !(permitidos as readonly string[]).includes(valor)) {
    return { ok: false, erro: "Alteração inválida." };
  }

  const supabase = await createClient();
  const { data: authData } = await supabase.auth.getUser();
  if (!authData.user) return { ok: false, erro: "Sua sessão expirou." };

  const { data: perfil } = await supabase
    .from("profiles")
    .select("ativo")
    .eq("id", authData.user.id)
    .single();
  if (!perfil?.ativo) return { ok: false, erro: "Acesso não autorizado." };

  if (campo === "production_status" && producoes.indexOf(valor as (typeof producoes)[number]) >= producoes.indexOf("na_fila")) {
    const { data: pedido } = await supabase
      .from("orders")
      .select("payment_status, art_status")
      .eq("id", id)
      .single();
    const arteLiberada = pedido?.art_status === "aprovada" || pedido?.art_status === "nao_necessaria";
    if (pedido?.payment_status !== "pago" || !arteLiberada) {
      return { ok: false, erro: "Confirme o pagamento e libere a arte antes da produção." };
    }
  }

  const { error } = await supabase
    .from("orders")
    .update({ [campo]: valor, updated_at: new Date().toISOString() })
    .eq("id", id);
  if (error) return { ok: false, erro: "Não foi possível salvar a alteração." };

  const rotulo = campo === "payment_status" ? "Pagamento" : campo === "art_status" ? "Arte" : "Produção";
  await supabase.from("order_status_history").insert({
    order_id: id,
    tipo: campo,
    descricao: `${rotulo}: ${valor.replaceAll("_", " ")}`,
    changed_by: authData.user.id,
  });

  revalidatePath("/producao");
  return { ok: true, erro: "" };
}

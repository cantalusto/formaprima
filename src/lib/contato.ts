/** Canal de atendimento — usado nos links de WhatsApp do site. */
export const WHATSAPP_NUMERO = "558192687656";
export const WHATSAPP_EXIBICAO = "(81) 9268-7656";

/** Chave PIX para pagamento manual (Fase 1 do bureau).
 *  ⚠️ Confirmar a chave definitiva com o Sérgio antes de publicar. */
export const PIX_CHAVE = WHATSAPP_EXIBICAO;

export function linkWhatsApp(mensagem: string) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

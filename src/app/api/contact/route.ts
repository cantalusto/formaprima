import { NextResponse } from "next/server";

type ContactPayload = {
  nome?: string;
  email?: string;
  assunto?: string;
  mensagem?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { nome, email, assunto, mensagem } = body;

  if (!nome || !email || !mensagem) {
    return NextResponse.json(
      { error: "Campos obrigatórios: nome, email, mensagem." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  // TODO: integrate with email provider (Resend, SendGrid) or persistence.
  // For now, log the submission so it can be observed in server logs.
  console.log("[contact] new submission", { nome, email, assunto, mensagem });

  return NextResponse.json({ ok: true });
}

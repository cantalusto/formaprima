"use client";

import { useActionState } from "react";
import { entrar, type LoginState } from "./actions";
import { ArrowRight, LoaderCircle, LockKeyhole, Mail } from "lucide-react";

const inicial: LoginState = { erro: "" };

export function LoginForm() {
  const [estado, action, pendente] = useActionState(entrar, inicial);
  return (
    <form action={action} className="mt-8 space-y-5">
      <div>
        <label htmlFor="login-email" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.1em] text-grafite">
          E-mail
        </label>
        <div className="group relative">
          <Mail aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-grafite2 transition-colors group-focus-within:text-terra" strokeWidth={1.7} />
          <input id="login-email" name="email" type="email" required autoComplete="email" placeholder="voce@formaprima.com.br" className="h-13 w-full rounded-xl border border-white/[0.09] bg-carvao pl-12 pr-4 text-sm text-branco outline-none transition-[border-color,box-shadow] placeholder:text-grafite2 focus:border-terra/60 focus:shadow-[0_0_0_3px_rgba(201,79,44,0.1)]" />
        </div>
      </div>
      <div>
        <div className="mb-2 flex items-center justify-between gap-4">
          <label htmlFor="login-password" className="text-[11px] font-semibold uppercase tracking-[0.1em] text-grafite">
            Senha
          </label>
          <span className="text-[11px] text-grafite2">Mínimo de 6 caracteres</span>
        </div>
        <div className="group relative">
          <LockKeyhole aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-grafite2 transition-colors group-focus-within:text-terra" strokeWidth={1.7} />
          <input id="login-password" name="password" type="password" required minLength={6} autoComplete="current-password" placeholder="Sua senha" className="h-13 w-full rounded-xl border border-white/[0.09] bg-carvao pl-12 pr-4 text-sm text-branco outline-none transition-[border-color,box-shadow] placeholder:text-grafite2 focus:border-terra/60 focus:shadow-[0_0_0_3px_rgba(201,79,44,0.1)]" />
        </div>
      </div>
      <div aria-live="polite" aria-atomic="true">
        {estado.erro && <p role="alert" className="rounded-xl border border-red-400/15 bg-red-500/10 px-4 py-3 text-xs leading-relaxed text-red-200">{estado.erro}</p>}
      </div>
      <button disabled={pendente} className="group flex h-13 w-full cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-terra px-6 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(201,79,44,0.18)] transition-[transform,opacity,background-color] hover:-translate-y-0.5 hover:bg-terra2 disabled:cursor-wait disabled:opacity-60">
        {pendente ? (
          <><LoaderCircle aria-hidden="true" className="size-4 animate-spin" /> Entrando…</>
        ) : (
          <>Acessar plataforma <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" /></>
        )}
      </button>
    </form>
  );
}

import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { configuracaoSupabase, supabaseConfigurado } from "./config";

export async function atualizarSessao(request: NextRequest) {
  if (!supabaseConfigurado()) {
    return NextResponse.next({ request });
  }

  let response = NextResponse.next({ request });
  const { url, chave } = configuracaoSupabase();
  const supabase = createServerClient(url, chave, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (cookiesToSet) => {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  const { data } = await supabase.auth.getClaims();
  const usuario = data?.claims;
  const caminhoProtegido = request.nextUrl.pathname.startsWith("/producao");

  if (caminhoProtegido && !usuario) {
    const urlLogin = request.nextUrl.clone();
    urlLogin.pathname = "/login";
    urlLogin.searchParams.set("retorno", request.nextUrl.pathname);
    return NextResponse.redirect(urlLogin);
  }

  if (request.nextUrl.pathname === "/login" && usuario) {
    return NextResponse.redirect(new URL("/producao", request.url));
  }

  return response;
}

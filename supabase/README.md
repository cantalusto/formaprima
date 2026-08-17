# Supabase da Forma Prima

1. Crie um projeto no Supabase.
2. Abra o SQL Editor e execute `migrations/20260816000100_base_operacional.sql`.
3. Copie `.env.example` para `.env.local` e preencha URL e chave pública.
4. Em Authentication > Users, crie o primeiro usuário da equipe.
5. No SQL Editor, promova esse usuário: `update public.profiles set role = 'admin' where id = 'UUID_DO_USUARIO';`.

O painel `/producao` passa a exigir login quando as variáveis do Supabase estão configuradas. As políticas RLS impedem acesso às tabelas sem um usuário ativo da equipe.

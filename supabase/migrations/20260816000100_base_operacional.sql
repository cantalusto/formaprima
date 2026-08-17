create extension if not exists pgcrypto;

create type public.app_role as enum ('admin', 'atendente', 'producao');
create type public.payment_status as enum ('pendente', 'parcial', 'pago', 'cancelado', 'estornado');
create type public.art_status as enum ('nao_enviada', 'recebida', 'em_analise', 'correcao_solicitada', 'aprovada', 'nao_necessaria');
create type public.production_status as enum ('pedido_aberto', 'aguardando_liberacao', 'na_fila', 'em_producao', 'acabamento', 'pronto', 'despachado', 'entregue', 'cancelado');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nome text not null,
  role public.app_role not null default 'producao',
  ativo boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.customers (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  whatsapp text not null,
  email text,
  empresa text,
  cpf_cnpj text,
  cidade text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create sequence public.order_number_seq start 1;
create table public.orders (
  id uuid primary key default gen_random_uuid(),
  codigo text not null unique default ('FP' || to_char(current_date, 'YYMMDD') || lpad(nextval('public.order_number_seq')::text, 5, '0')),
  tracking_token uuid not null unique default gen_random_uuid(),
  customer_id uuid not null references public.customers(id),
  origem text not null check (origem in ('online', 'balcao')),
  entrega text not null,
  payment_status public.payment_status not null default 'pendente',
  art_status public.art_status not null default 'nao_enviada',
  production_status public.production_status not null default 'pedido_aberto',
  total numeric(12,2) not null check (total >= 0),
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  descricao text not null,
  largura numeric(10,3),
  altura numeric(10,3),
  quantidade integer not null check (quantidade > 0),
  area_cobrada numeric(12,3),
  preco_m2 numeric(12,2),
  total numeric(12,2) not null check (total >= 0),
  configuracao jsonb not null default '{}'::jsonb,
  observacoes text
);

create table public.order_status_history (
  id bigint generated always as identity primary key,
  order_id uuid not null references public.orders(id) on delete cascade,
  tipo text not null,
  descricao text not null,
  changed_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table public.order_files (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  order_item_id uuid references public.order_items(id) on delete cascade,
  storage_path text not null unique,
  nome_original text not null,
  mime_type text not null,
  tamanho_bytes bigint not null check (tamanho_bytes > 0),
  uploaded_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create or replace function public.is_staff()
returns boolean language sql stable security definer set search_path = '' as $$
  select exists(select 1 from public.profiles where id = auth.uid() and ativo = true);
$$;

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, nome)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'nome', new.email, 'Usuário'));
  return new;
end;
$$;

create trigger on_auth_user_created after insert on auth.users
for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.customers enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.order_status_history enable row level security;
alter table public.order_files enable row level security;

create policy "equipe le perfis" on public.profiles for select to authenticated using (public.is_staff());
create policy "equipe gerencia clientes" on public.customers for all to authenticated using (public.is_staff()) with check (public.is_staff());
create policy "equipe gerencia pedidos" on public.orders for all to authenticated using (public.is_staff()) with check (public.is_staff());
create policy "equipe gerencia itens" on public.order_items for all to authenticated using (public.is_staff()) with check (public.is_staff());
create policy "equipe gerencia historico" on public.order_status_history for all to authenticated using (public.is_staff()) with check (public.is_staff());
create policy "equipe gerencia arquivos" on public.order_files for all to authenticated using (public.is_staff()) with check (public.is_staff());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('artes', 'artes', false, 52428800, array['application/pdf','image/png','image/jpeg','image/vnd.adobe.photoshop'])
on conflict (id) do nothing;

-- =============================================================================
-- SportPharm — public published-articles feed
-- Run this in the Supabase SQL editor AFTER sportpharm-hq/supabase/hq.sql
--
-- WHY A SEPARATE TABLE:
-- hq_kv is readable only by authenticated HQ members (hq_kv_read). Website
-- visitors are anonymous, so they cannot read it — and they should not, because
-- hq_kv holds drafts, review notes, campaigns and everything else internal.
-- This table carries ONLY what is already published, and is safe to read
-- publicly by design.
-- =============================================================================

create table if not exists public.published_articles (
  slug         text primary key,
  title        text not null,
  excerpt      text,
  category     text,
  series       text,
  tags         jsonb default '[]'::jsonb,
  author       text,
  image        text,
  source_url   text,
  html         text,                       -- pre-rendered by HQ.renderBlocks()
  body         text,
  published_at timestamptz,
  updated_at   timestamptz default now()
);

alter table public.published_articles enable row level security;

-- ANYONE may read the published feed. This is the public website's entire view.
drop policy if exists pub_articles_read on public.published_articles;
create policy pub_articles_read
  on public.published_articles
  for select
  to anon, authenticated
  using (true);

-- Only signed-in HQ members may publish/update/unpublish.
drop policy if exists pub_articles_write on public.published_articles;
create policy pub_articles_write
  on public.published_articles
  for all
  to authenticated
  using (public.hq_is_member())
  with check (public.hq_is_member());

create index if not exists published_articles_series_idx
  on public.published_articles (series, published_at desc);

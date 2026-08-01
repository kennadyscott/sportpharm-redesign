# Connecting SportPharm HQ → the public website

Goal: hitting **Publish** in HQ makes an article appear on the website. One
Supabase project serves both.

```
HQ (CMS)  ──publish──▶  Supabase `published_articles`  ──read──▶  sportpharm-site
 authenticated              anon SELECT allowed              anonymous visitors
```

---

## What you do (about 10 minutes)

**1. Create the Supabase project**
<https://supabase.com> → New project. Name it `sportpharm`. Save the database
password somewhere safe. Wait for it to finish provisioning.

**2. Run the two SQL files** (Supabase → SQL Editor → New query → paste → Run)
1. `sportpharm-hq/supabase/hq.sql` — HQ's own tables (`hq_kv`, `hq_members`)
2. `sportpharm-site/docs/supabase-published-articles.sql` — the public feed table

Order matters: the second references `hq_is_member()` from the first.

**3. Send me two values** — Project Settings → API:
- **Project URL** (`https://xxxxx.supabase.co`)
- **anon / public key** (the long one labelled `anon`)

Both are safe to share and safe to embed in a webpage — they are designed to be
public. Row-level security is what actually protects the data. **Do not send the
`service_role` key.** That one bypasses all security and must never be in a
website.

**4. Add yourself as an HQ member** so you can sign in and publish. HQ's README
covers seats; the SQL creates the `hq_members` table it reads.

---

## What I do once you send those two values

1. Paste them into `sportpharm-hq/hq-config.js` (`SPHQ_CLOUD`) — flips HQ from
   solo mode to live mode, so the team shares one workspace.
2. Add a publish hook in HQ: on publish/unpublish, upsert/delete the article in
   `published_articles` using the existing `Store.publishedFeed()` shape.
3. Build the site-side reader: `articles.html` lists the feed, and article pages
   render `html` (already produced by `HQ.renderBlocks()`, so the site shows
   exactly what the writer saw).
4. Migrate the hardcoded article cards to read from the feed.
5. Test end to end: publish in HQ → confirm it appears on the site.

---

## Security notes

- **`hq_kv` stays locked to authenticated members.** Drafts, review notes,
  campaigns and internal data are never publicly readable.
- **`published_articles` is deliberately world-readable** — it only ever holds
  content you have already chosen to publish.
- Publishing/unpublishing still requires being a signed-in HQ member.
- The six SEO drafts should clear **clinical review** before publishing; the
  article series' own note asks for pharmacist and sports-medicine sign-off.

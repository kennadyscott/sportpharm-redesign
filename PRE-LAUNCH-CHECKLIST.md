# SportPharm — Pre-Launch Checklist

_Things to verify **before pointing the real domain** at this site. Started 2026-07-28._

The site currently lives at a prototype URL that nobody is being sent to, so several
things below are safe to leave broken **until real traffic arrives**. Moving the domain
is the trigger — that's when each of these stops being theoretical.

---

## 🔴 Blockers — must work before real traffic

### 1. Contact form actually delivers
**Status: NOT CONNECTED.** The modal on 8 pages (`index`, `wasabirub`, `push-through-or-stop`,
`wasabirub-product`, `superhot-product`, `icetrarub-product`, `find-your-rub`,
`how-it-works`) writes to the *visitor's own* `localStorage` and fires a `mailto:`.
Nothing reaches SportPharm. `mailto:` silently does nothing for most mobile/webmail users.

- [ ] Stand up the Supabase `leads` table (see `SPORTPHARM-HQ-BRIEF.md` §2b)
- [ ] Repoint the modal on **all 8 pages** from `mailto:` → Supabase insert
- [ ] RLS: INSERT allowed for anon, SELECT only for authenticated
- [ ] **Submit one real test and confirm it lands in HQ** — don't assume
- [ ] Revert the interim "One last step / your email app should have opened" copy back to
      a true "Message sent." once delivery is real

### 2. Admin console is publicly reachable
`admin.html` is a static file on GitHub Pages — **anyone who guesses the URL can open it.**
Its login is a prototype gate (any credentials work), not a lock.

- [ ] Remove `admin.html` from the public site, or
- [ ] Put it behind real auth (Supabase Auth), or
- [ ] Confirm it holds no real data and accept the risk knowingly

### 3. Placeholder destinations
Many CTAs point at `coming-soon.html?f=…`.

- [ ] Audit every `coming-soon` link and decide: build it, or remove the CTA
- [ ] **"What to Bring to Your Appointment"** appears in 3 guided-tool results — highest
      value page to build
- [ ] Confirm no dead `href="#"` links remain

---

## 🟡 Should fix — quality and credibility

### 4. CMS does not feed the site
**Status: DISCONNECTED.** Articles on the site are **hand-built static HTML files**
(`article-nsaids.html`, `article-recovery-habits.html`, `article-return-injury.html`).
The admin console's Blog module writes only to `localStorage`. **No page reads it.**
Publishing in the CMS changes nothing on the live site.

- [ ] Decide the publish pipeline (Supabase / git-backed / Payload — see HQ brief §4)
- [ ] Migrate the 3 existing articles into it
- [ ] Verify: publish in CMS → appears on site

### 5. Missing image assets
These are referenced but absent (they fail silently via `onerror`):
`blog-1/2/3.png`, `home-pros.png`, `pro-hero.png`, `pro-support.png`,
`injury-rotator-cuff/tennis-elbow/shin-splints/concussion.png`

- [ ] Source or remove each

### 6. Representation
Everyday Athlete page is now 7 of 13 images featuring people of color (up from 3).
Remaining gaps: **Push Through cards** and **Articles** rows still lean white.

- [ ] Next imagery batch should target those 6 slots
- [ ] Continue including varied ages and body types

### 7. Analytics
- [ ] Connect real analytics — the admin console's numbers are seeded demo data
- [ ] Verify tracking fires on the new domain

---

## 🟢 Before/at domain switch

- [ ] DNS + HTTPS verified
- [ ] Update allowed origins in Supabase to the new domain
- [ ] Re-point analytics property
- [ ] Update any absolute `kennadyscott.github.io` URLs to the new domain
- [ ] Test the full **Find the Right Support** flow on the live domain
- [ ] Mobile pass — deferred by design until the main site settled
- [ ] Legal/medical review of disclaimer language on guided tool + injury content
- [ ] Confirm product claims (OTC external analgesic language) are compliant

---

## Notes
- **Image caching:** when overwriting an image filename, bump its `?v=` query or browsers
  serve the stale one. Bitten by this repeatedly.
- **Parallel sessions:** always `git fetch` + rebase before pushing.
- The HQ/CMS work is scoped separately in `~/Documents/Claude/SPORTPHARM-HQ-BRIEF.md`.

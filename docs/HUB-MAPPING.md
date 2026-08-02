# sportpharm.com crawl — which pages belong to which hub

Crawled from `sportpharm.com/sitemap-1.xml`, cross-checked against the live nav,
services index and store. **56 real pages, plus 40 pages of theme boilerplate
that should not be indexed at all.**

---

## The three findings that matter most

### 1. There is a prescription product line — `/rx/`

**KetoRub · NeuroRub · LidoRub · MisicaRub · USDiclo · IontoSone**

Seven compounded **prescription** topicals, none of which appear in the mockups or
in anything we have built. These are hard HCP-only: they cannot appear on a
consumer site under any circumstances, and they are the strongest reason the two
audiences need separate front doors.

### 2. There is already a membership/login system

`/login/` · `/membership-levels/` · `/membership-account/` · `/membership-checkout/`

Gated-access infrastructure already exists. Before designing anything, we need to
know **what it gates and who is enrolled** — it may already be the HCP
verification mechanism, which changes the plan for both sites.

### 3. The consumer/professional boundary is asserted but not enforced

Every page carries: *"This page is not intended to be viewed or accessible to the
general public or to consumers. It is intended to be viewed and accessible to
athletic trainers and other properly licensed Health Care Professionals."*

**Including the store**, which sells $29.95 OTC topicals with no verification of
any kind. That is a contradiction the business should resolve deliberately rather
than inherit:

- If it is boilerplate applied site-wide, it is inaccurate on the store and
  should be scoped to the pages that need it.
- If it is intentional, then OTC products are being sold from a site that
  disclaims the audience buying them.

**Either reading argues for wasabirub.com** — consumer products need a home that
is actually addressed to consumers.

---

## The mapping

### → wasabirub.com (Everyday Athlete)

| Page | Note |
|---|---|
| `/product/wasabirub-otc/` | $29.95 OTC |
| `/product/wasabirub-super-hot-otc-.../` | $39.95 OTC |
| `/product/icetrarub-otc-.../` | $39.95 OTC |
| `/product/fire-ice-duo/` | $64.99 |
| `/product/duo-bundle-original-super-hot/` | $59.99 |
| `/product/recovery-duo/` | $64.99 |
| `/wasabirub/` | Existing brand page &mdash; supersede with the new site |
| `/store/` | The consumer half of it |
| `/5-essential-summer-pain-management-tips/` | Athlete voice |
| `/how-baseball-players-can-prevent-and-treat-blisters/` | Athlete voice |
| `/recovery-isnt-one-size-fits-all-.../` | Athlete voice |
| `/the-science-behind-the-relief-.../` | Ingredient education &mdash; strong hub fit |

Plus the 25 pages and 10 articles already built.

### → sportpharm.com (Healthcare / AT)

| Group | Pages |
|---|---|
| **Rx line** | `/rx/` + ketorub, neurorub, lidorub, misicarub, usdiclo, iontosone |
| **Services** | compounding, drug-repackaging, supplement-support, inventory-management, retail-pharmacy-services, concierge-sports-pharmacy, `/services-inquiry/`, `/order-form/` |
| **Conferences** | cata-2026, acc-2026, nbata-2026, big-east-2026, nata-2026-professional, nata-2026-students |
| **Gated access** | login, membership-levels, membership-account, membership-checkout |
| **HCP articles** | in-house dispensing playbook · sideline-ready emergency preparedness · cuts and lacerations · Penthrox / green whistle · targeted anti-inflammatory care · NBA recovery and compounded topicals |

### → Both (deliberate overlap)

| Page | Why both |
|---|---|
| `/about/`, `/about/robert-nickell/`, `/about/brandon-welch/` | Founder credibility sells to both. Same facts, different emphasis |
| `/about/faq/`, `/about/contact/` | Needs a version per site |
| `/sportpharm-partners-with-trushield-.../` | Clean-sport certification matters to athletes *and* to the ATs who clear products |
| `/product/team-trifecta-bundle/`, `/product/wasabirub-team-bundle/` | **The genuine edge case.** OTC products bought in bulk by an AT for a roster |
| `/product/infectious-control-towels-icc/` | Facility product, team-purchased |
| `/news/`, `/privacy-policy/`, `/terms-and-conditions/` | Both, per site |

---

## The Pro Athlete gap

**Nothing on the live site addresses professional athletes directly.** The
conference pages are AT-facing; the services are procurement-facing; the store is
consumer-facing.

So the Pro Athlete hub is **entirely net-new content**, not a re-sort of what
exists. That is worth knowing before scoping: it is the only one of the three
without an existing base to build on.

Its distinct territory, from the language already drafted:

- **Eligibility** &mdash; banned substances, clean-sport certification, what is in a
  product and whether it is cleared
- **Availability** &mdash; travel, compressed schedules, relief that survives a road trip
- The athlete is the subject; the fear is testing positive or missing games

Versus Healthcare/AT, where the professional is buying **on behalf of a roster**
and the fear is running out, mis-dosing or failing an audit &mdash; unit-dose,
inventory, compliance documentation.

---

## Cleanup the crawl surfaced

**40 theme boilerplate pages are in the sitemap and indexable:**
`/elements/*` (24 pages), `/home/home-02/`, `/home/home-03/`, `/home/footer*/`,
`/blog/blog-grid/`, `/blog/blog-single/`, `/case-studies/`, `/shop-single/`,
`/under-construction/`, `/page-not-found/`.

Leftover demo content from the WordPress theme. It dilutes crawl budget, and
`/under-construction/` and `/page-not-found/` being indexable is its own problem.
**Removing these is quick and should happen regardless of any other decision.**

**Also noted:** the Services submenu lists 6, but our July inventory recorded 8 —
Blister Packaging and Customized Services are no longer linked, though they may
still exist. Worth confirming which are current.

**Education points to `sportsrxnetwork.com`** — an entirely separate domain.
Nobody has explained what that property is or how it relates. Worth asking.

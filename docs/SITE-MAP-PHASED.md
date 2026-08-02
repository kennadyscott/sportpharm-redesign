# Full page map — wasabirub.com and sportpharm.com

Every page across both properties: what exists, what it is built in, and which
phase builds it. Cross-referenced against the live sportpharm.com crawl.

**Where things stand:** 63 pages in the repo — **30 in the new design**, **32 in
the old "legacy cluster"**, 1 utility. The live sportpharm.com has **56 real
pages** plus 40 theme boilerplate pages that should not be indexed at all.

---

## PHASE 1 — wasabirub.com · athlete-facing

The near-complete half. **25 of 30 pages already built in the new design.**

### Hub and pathways — BUILT (11)
| Page | Purpose |
|---|---|
| `index.html` | Everyday Athlete home |
| `push-through-or-stop.html` | Pathway + guided support finder |
| `recovery-made-simple.html` | Pathway |
| `sports-pharmacy-explained.html` | Pathway — the pharmacy advantage |
| `is-this-for-me.html` | Pathway — identity/orientation |
| `soreness-check.html` | Tool |
| `build-recovery-plan.html` | Tool — 5 questions, personalised output |
| `pain-relief-options.html` | Comparison — where WasabiRub sits |
| `find-your-rub.html` | Product selector |
| `how-it-works.html` | Cool-then-heat science |
| `articles.html` | Article index |

### Articles — BUILT (10)
All ten live. **All still need clinical sign-off before launch.**

### Product — BUILT (4)
`wasabirub.html` (brand home) · `wasabirub-product.html` · `superhot-product.html` · `icetrarub-product.html`

### Still to build
| Page | Note |
|---|---|
| **`pro-athlete.html` — rework** | Exists, but built as a mini-hub. Needs to become a **driver**: two exits only — try WasabiRub, or hand off to your trainer |
| Cart | Does not exist. Every Add to Cart currently shows a toast and does nothing |
| Checkout | Classic WooCommerce templates — decide at build time, not after |
| Order confirmation / account | If accounts are in scope at all |
| Shipping, returns, terms | Required before selling |

---

## PHASE 2 — sportpharm.com · the HCP site

**The real gap.** Two pages exist in the new design; the live site has ~40 HCP
pages behind them.

### Built (2, both starting points)
| Page | State |
|---|---|
| `sports-medicine.html` | 427 words, covers all 8 services as an overview. Good bones, needs to become a section |
| `for-professionals.html` | 431 words. Currently orphaned — 0 inbound links. Decide: merge into the above, or make it the HCP landing page |

### To build — Services (8)
Compounding · Drug Repackaging · Blister Packaging · Inventory Management ·
Retail Pharmacy Services · Concierge Sports Pharmacy · Supplement Support ·
Customized Services

*Note: the live submenu shows only 6 — Blister Packaging and Customized Services
are no longer linked there, though our page covers them. Confirm which are current.*

### To build — Rx line (7)
`/rx/` index · KetoRub · NeuroRub · LidoRub · MisicaRub · USDiclo · IontoSone

**Prescription compounded topicals.** Absent from everything we have built. The
clearest proof this is a real pharmacy rather than a rub brand — and hard
HCP-only.

### To build — Professional products (4)
Team Trifecta Bundle · WasabiRub Team Bundle · Infectious Control Towels · a
professional catalog / order form

### To build — Company (4)
HCP landing page · About · Robert Nickell · Brandon Welch

### To build — HCP articles (6)
In-house dispensing playbook · Sideline-ready emergency preparedness · Cuts and
lacerations · Penthrox / green whistle · Targeted anti-inflammatory care · NBA
recovery and compounded topicals

### To build — Events (6)
NATA 2026 (professional + students) · ACC · CATA · NBATA · Big East

### Decide, do not inherit
- **Membership / login** — already exists on the live site. What does it gate, and who is enrolled?
- **The HCP-only disclaimer** — currently on every page including the consumer store
- **sportsrxnetwork.com** — becoming a link under Resources

---

## PHASE 3 — the legacy cluster · 32 pages

Old design, athlete-facing content. **The biggest open decision in this map.**

| Group | Pages |
|---|---|
| Injury library | acl, ankle-sprain, back-spine, concussion, elbow, hamstring, head-neck, hip-thigh, knee, lower-back, lower-leg-ankle-foot, rotator-cuff, shin-splints, shoulder, tennis-elbow, wrist-hand, injuries |
| Recovery | recovery, recovery-timelines, recovery-tools, rehab-exercises, return-to-play |
| Performance | performance, training, strength-mobility, warmup, injury-prevention |
| Product (old) | products, icetrarub, superhot |
| Other | athlete-hub, roadmap |

This is **~14,000 words of athlete-facing content** — genuinely useful for SEO
and exactly the audience wasabirub.com serves. Three options:

1. **Rebuild in the new design** — most work, keeps the content earning
2. **Retire** — cleanest, forfeits the content
3. **Migrate selectively** — rebuild the injury library (the strongest SEO asset),
   retire the rest

**Recommendation: option 3.** The injury library is 17 pages answering exactly
what people search. The performance and recovery pages overlap heavily with hub
pathways we have already built better.

---

## PHASE 4 — commerce and cleanup

- Cart, checkout, tax, shipping, refunds on whichever platform is chosen
- Abandoned-cart recovery, with a named owner
- **Remove 40 theme boilerplate pages** from sportpharm.com — `/elements/*` (24),
  `/home/home-02/`, `/blog/blog-grid/`, `/case-studies/`, `/under-construction/`,
  `/page-not-found/`. Indexable today. Quick, and worth doing regardless of
  everything else.

---

## Totals

| | Built (new design) | To build | Total |
|---|---|---|---|
| **wasabirub.com** | 25 | ~6 | ~31 |
| **sportpharm.com** | 2 | ~35 | ~37 |
| **Legacy migration** | 0 | 17 (recommended) | 17 |
| | **27** | **~58** | **~85** |

Phase 1 is roughly 80% done. Phase 2 is the real build.

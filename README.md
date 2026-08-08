# SportPharm Redesign — working copy

This repo is a **sandbox**. Nothing here affects the live SportPharm site.

| | Live site | This repo |
|---|---|---|
| Repo | `kennadyscott/sportpharm-site` | `kennadyscott/sportpharm-redesign` |
| URL | https://kennadyscott.github.io/sportpharm-site/ | https://kennadyscott.github.io/sportpharm-redesign/ |
| Local preview | port 4188 | port 4208 |
| Status | **Do not break.** Client-facing. | Free to experiment. |

Forked from `sportpharm-site` at `fa9494a` with full history, so anything fixed
on the live site can be cherry-picked across and vice versa.

## What this is for

Applying the WasabiRub redesign language to the rest of the site — the same
stylistic approach agreed in `wasabirub-redesign`:

- Deep navy `#0f1d33` for dark bands, not near-black
- Red as an accent and action colour, never a dominant background
- No decorative rules; eyebrows uppercase and used sparingly, one per section
- Proof points stated once, not repeated across sections
- Cutouts and photography, never product shots trapped in white boxes
- Master/detail drawers instead of tall stacks of cards
- Type that fits on one line; sections that fit in one screen
- WCAG AA measured against real composited pixels, not assumed

## Scale — read before starting

**89 pages, 23 distinct chromes.** This is not one design system with 89
instances; it is roughly a dozen different builds that grew separately. The unit
of work is the *family*, not the page.

| Pages | Family |
|---|---|
| 23 | Articles |
| 9 | Body-part landing pages |
| 8 | Injury guides |
| 8 | Pharmacy service pages |
| 5 | Company / legal |
| 5 | Sports-pharmacy guides |
| 5 | Performance hub |
| 5 | Recovery hub |
| 3 | Everyday-athlete tools |
| 2–1 | Product pages, hubs, one-offs |

Suggested order: **sports-medicine.html first** as the pattern page, since it is
the page the client asked about and the pharmacy family follows from it.

## Ground rules

- The live repo is the source of truth for anything already shipped.
- Nothing here goes near `sportpharm-site` until it is reviewed and approved.
- Claims, prices, percentages and partner references stay unverified until
  someone signs off.
- Two known claims problems carried over from live and still unresolved:
  `superhot-target-pain.png` has "reduce pain signal transmission … chronic or
  nerve-related pain" baked into the image, and `icetrarub-guidelines.png` has
  "third-party tested for over 480 prohibited substances". Neither can be fixed
  in code.

# The Athlete Hub — a demand engine for WasabiRub

**Prepared for leadership · Decision requested: approve the content-hub strategy
and the domain split**

---

## The short version

SportPharm sells products to people who are hurting. Those people are already
searching — "is this normal soreness," "should I work out when something hurts,"
"topical vs oral pain relief" — **and finding someone else's answer.**

The Athlete Hub captures that demand: educational content that answers the
question honestly, earns the search traffic, builds trust, and puts WasabiRub in
front of someone at the moment they are deciding what to do about pain.

**This is not a redesign. It is a customer-acquisition channel.** The design work
is how the channel gets built.

---

## 1. The problem with a product-first site

Today's site describes what we sell. That works for someone who already knows
SportPharm and already knows they want a topical rub.

It does nothing for the far larger group who don't know us yet. They aren't
searching for "WasabiRub." They're searching for their problem.

| What people actually search | What a product page offers them |
|---|---|
| "sore two days after workout normal" | A product description |
| "should I train with knee pain" | A product description |
| "topical vs oral pain relief" | A product description |

Every one of those searches is a person with pain, actively looking for guidance,
who could reasonably end up buying a topical rub. **Today we are not in that
conversation.**

---

## 2. What the Athlete Hub does

It answers the question first and sells second.

- **Educational pathways** — "Push Through or Stop?", "Recovery Made Simple",
  "Sports Pharmacy, Explained", "Is This for Me?"
- **Interactive tools** — a guided support finder and a recovery-plan builder
  that give real, personalised output rather than a brochure
- **An article library** built around the questions people actually type
- **WasabiRub presented as one option** inside honest guidance — not the reason
  the page exists

The credibility argument is the whole point: **we are a pharmacy.** Answering
medication and pain questions well is the one thing we can do that a supplement
brand or a general fitness site cannot. That is our unfair advantage, and right
now we aren't using it.

---

## 3. The domain decision

**Recommendation: sportpharm.com stays the company site. The Athlete Hub and
WasabiRub product pages live at wasabirub.com.**

Rationale: the hub exists to drive product demand, so keeping it on the product
domain means the traffic it earns lands where the purchase happens.

**The honest cost of that choice, stated plainly:**

`wasabirub.com` is a new domain with **no search authority**. `sportpharm.com`
has years of history and earned trust. Health content is held to a higher
standard by Google than almost any other category — and building that from zero,
on a domain that sells the product, is the slowest starting position there is.

**Expect 6–12 months to meaningful organic traffic, not weeks.** Anyone promising
faster is guessing.

**The alternative, if leadership wants results sooner:** host the hub at
`sportpharm.com/athlete-hub`, where it inherits existing authority, and drive
hard to wasabirub.com from every page. Faster ranking; traffic lands on
SportPharm first. Both are defensible — this is a genuine trade, not a right
answer.

---

## 4. Two stores selling the same three products

The hub, the product pages and the cart all live on **wasabirub.com**. Nothing
has to travel between domains, so there is no lost-cart problem inside the hub.
That is settled.

The problem is on the other side of the split.

**sportpharm.com is WordPress running WooCommerce.** It sells WasabiRub,
IcetraRub and Super Hot today. **wasabirub.com will sell the same three products
through Payload + Stripe.** Same catalogue, two systems that do not know about
each other.

| | sportpharm.com | wasabirub.com |
|---|---|---|
| Platform | WordPress + WooCommerce | Next.js + Payload |
| Payments | WooCommerce checkout | Stripe |
| Orders land in | WooCommerce | Payload |
| Inventory counted in | WooCommerce | Payload |
| Promo codes | WooCommerce coupons | Stripe Promotion Codes |

This is the real version of the concern raised in the room: not a cart that
empties in transit, but **two carts that never see each other.** A customer who
starts on sportpharm.com and finishes on wasabirub.com has a half-filled basket
on a site they have left. And operationally we would be reconciling two order
streams, two stock counts and two discount systems for one product line.

### The decision this forces

**Where does a purchase happen?** There is really only one good answer.

**Recommendation: wasabirub.com becomes the only store.** sportpharm.com stops
selling and becomes what it is best at &mdash; the company, the pharmacy, the
brick-and-mortar presence &mdash; with a **Store** item in its menu that deep-links
to wasabirub.com. One catalogue, one checkout, one order stream, one place a
customer's history lives.

That is already the direction in the site notes ("add Store to menu →
wasabirub.com"). It just needs saying out loud on Tuesday, because it means
**retiring WooCommerce as a selling system**, and that is a decision with an owner
and a migration attached, not a toggle.

### If there is one store, which stack runs it?

Settling on a single store forces a second decision. There are two honest
answers and one trap.

| | **One custom stack** (recommended) | **One WordPress** |
|---|---|---|
| Hub | Next.js + Payload, as planned | Rebuilt as WordPress pages |
| Commerce | Stripe Checkout | WooCommerce |
| We gain | The interactive tools, the review-workflow CMS, one codebase | Tax tables, shipping zones, refunds, inventory and an order UI we already know &mdash; free |
| We give up | Less than it sounds &mdash; see below | The interactive tools and the custom build |

**What "rebuilding commerce ops" actually costs.** Less than the WordPress
column implies. For a three-SKU catalogue most of it is configuration of managed
services, not a build:

| | What it takes |
|---|---|
| Tax | Stripe Tax &mdash; one flag on the checkout session. Rate lookup, US economic-nexus monitoring and filing. A tax code per product; no tables to maintain |
| Shipping | Flat or tiered rates on the checkout session, or Shippo for live carrier rates and label purchase &mdash; **which we already run on another product** |
| Refunds | Stripe Dashboard, no code |
| Inventory | Three SKUs. A quantity column and a decrement on order |
| Order admin | A Payload collection plus the Stripe Dashboard |

WooCommerce's inventory and shipping machinery earns its keep on a 500-SKU
catalogue. We have three, going on four with LidoRub.

One item does deserve care: **OTC topicals are not uniformly taxable** &mdash; some
states exempt OTC drugs and others do not. That is precisely what Stripe's
product tax codes exist for, and a good reason not to hand-roll tax.

**The trap is "integrate WooCommerce into the new site."** That means running
WordPress headless &mdash; alive purely as a commerce backend, talking to the hub over
the Store API with cart-token session handling that is notoriously fiddly. We
would maintain **both** stacks plus the glue between them, and payments would
still settle on Stripe underneath. It is the most work for the least benefit.

**Recommendation: the custom stack.** The hub's value *is* the interactive tools
and the employee review workflow &mdash; the two things WordPress fights hardest. That
was the reasoning behind the original platform decision, and it has not changed.

**And we have already built this once.** Tiny Clothing Swap runs the exact
pattern:

- The **cart lives in the app**, not in Stripe &mdash; guest carts hold item IDs in
  local storage, signed-in carts come from the database
- At checkout a server function **builds the Stripe line items**, recomputing
  every price server-side so a tampered cart cannot underpay, and adds shipping
  as its own line
- Stripe sees a **finished basket once**, at the moment of payment
- A webhook writes the order and its line items back to our database

WasabiRub is the simpler case: three products, one seller, no marketplace payouts
and no per-seller shipping split. This is a known quantity, not a research
project.

### Who runs the store day to day?

The usual argument for buying a commerce platform is that non-technical staff
need to manage it without a developer. Worth being precise, because we are
closer to that than it first appears.

**From Stripe directly**, a non-technical person can already create promotion
codes with limits and expiry, issue full or partial refunds, and see every
payment and customer. That is real, and it is no-code.

**What Stripe cannot be** is the product catalogue or the order desk. Stripe has
payments, not orders &mdash; no fulfilment status, tracking number or shipped/
delivered state. And a product in Stripe is a price, not a page: images,
description, actives and dosage all live in our CMS regardless.

**The dashboard is not something we would build &mdash; Payload is that dashboard.**
Defining Products, Orders and Promotions as collections generates the admin UI,
with roles so a marketing coordinator sees merchandising and not the company's
finances. That is the same mechanism already carrying the article
draft &rarr; review &rarr; publish workflow.

So the honest gap between us and Shopify is not basic product, order and promo
management. It is the long tail: abandoned-cart flows, discount-stacking rules,
gift cards, multi-channel selling and built-in commerce analytics. Real features
&mdash; but a different argument from "our team could not operate it."

### If we chose Shopify later, is this work wasted?

Almost none of it, and this is the cheapest moment to decide.

**Unaffected by the commerce choice:** every article, all four pathways, both
interactive tools, the care guidance, the design system and the CMS review
workflow. That is effectively the entire build, and it is content and UX &mdash;
independent of who processes the payment.

**The only thing tied to the choice is the checkout layer** &mdash; cart UI, the
session-building function, and the add-to-cart wiring on product pages.
**Today none of that exists.** The prototype cart went away with the WasabiRub
layout revert, and there is no payment code on the site.

The cost of switching is therefore near zero right now, and grows once the
checkout is built and real customers and orders live in it. That is an argument
for deciding this deliberately on Tuesday, not for deferring it.

Worth noting too: Shopify headless would not displace Payload for content. Using
a commerce platform for commerce and a headless CMS for content is a common and
sensible pairing &mdash; so this is not an all-or-nothing fork.

### The migration question

Either path has to answer it: **existing WooCommerce customers and order
history.** Migrate them, or make a clean break and keep WooCommerce read-only for
historical lookups. Cheap to decide now, expensive to decide after the new store
takes its first order.

### One technical caution

*Stripe payment links* and *a cart* are not the same thing. Payment Links check
out **one product at a time** and cannot do a multi-item basket, order-level promo
codes, or free-shipping-over-$75 &mdash; all of which the prototype cart had.

A real cart means **Stripe Checkout with line items** assembled by the Payload
backend. That is well-trodden and the chosen stack supports it, but it is
back-end work, not a link you paste onto a product page. Worth being precise
about before it is scoped as the easy part.

**Status today: none of it is wired.** There is no Stripe code on the live site
and no working cart &mdash; the prototype went away with the WasabiRub layout revert.
Every *Add to Cart* button currently on the site shows a toast and does nothing.

## 5. What this requires (be honest about it)

**Ongoing, not one-time.**

- **Clinical review of every article.** Health content requires a pharmacist and
  sports-medicine sign-off before publishing, with named authors and reviewers on
  the page. This is both an ethical obligation and an SEO requirement — Google
  explicitly weights author credentials for health content.
- **A publishing cadence.** A hub that stops updating stops ranking. This needs
  an owner, not a launch.
- **Editorial discipline.** The moment articles become disguised product pitches,
  they stop ranking and stop earning trust. The restraint *is* the strategy.

**What is already built and paid for:** the hub pages, the interactive tools, the
CMS with its review workflow, and six articles drafted and awaiting clinical
review.

---

## 6. Risks worth naming

| Risk | Reality |
|---|---|
| "This is a big change to a site that works" | The current site isn't failing — it just isn't acquiring anyone. This adds a channel; it doesn't remove the existing one. |
| "SEO takes too long" | True. This is a 6–12 month investment, not a campaign. It compounds; ads stop the day you stop paying. |
| "Health content is a liability" | Handled by clinical review, named reviewers and explicit non-diagnostic language — all already built into the content and the tools. |
| "Both sites can just keep selling" | Two systems means two order streams, two stock counts and two discount systems for one product line. The reconciliation cost is ongoing and lands on operations, not on the build. |
| "We'll write six articles and stop" | The most likely failure mode. Requires a named owner and a cadence before launch, not after. |

---

## 7. What we'd measure

Not traffic for its own sake:

- **Organic sessions** to hub pages (leading indicator, months 3–12)
- **Hub → product page** click-through (does education convert?)
- **Contact-form enquiries** from hub pages (pharmacy consultations)
- **Rankings** for the target question set
- **Assisted conversions** — purchases where a hub visit came first

---

## The decision

1. **Approve the content-hub strategy** as a demand channel, not a redesign
2. **Confirm wasabirub.com as the single store** &mdash; and accept that this means retiring WooCommerce as a selling system, with an owner and a migration
3. **Confirm the domain split** — sportpharm.com (company) / wasabirub.com (product + hub),
   or the sportpharm.com/athlete-hub alternative if faster results matter more
4. **Name an owner** for clinical review and publishing cadence

**Timing note:** the domain decision should be made *before* the article cluster
publishes. Content that ranks at one address and later moves loses much of its
earned value, and our current hosting cannot redirect properly. Deciding now is
free; deciding in six months is not.

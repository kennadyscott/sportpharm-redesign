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

## 4. The commerce question to settle first

SportPharm runs on **WordPress with WooCommerce**. That is where the real cart
lives and where checkout happens. **The Athlete Hub is a separate static site
with no cart of its own.**

That is not automatically a problem &mdash; and the hub already shows why. When
`wasabirub.html` sends someone to buy the duo bundle, it links **straight to that
product's WooCommerce page**. No cart is carried across, so no cart can be lost.
Deep-linking products is the pattern that works, and it works on any domain.

**The narrow, real problem:** `products.html` has *Add to Cart* buttons that only
increment a badge and show a toast. Nothing is stored, and there is no checkout.
The hub's **Explore Topicals** CTA now points at that page. So a visitor can add
all three topicals and reach a dead end &mdash; and the dead end is inside our own
static site, not at the WordPress boundary.

**Fix:** remove the cart affordance from `products.html` and deep-link each
product to WooCommerce, exactly as `wasabirub.html` already does. Small, and it
should happen before the hub earns traffic.

### What the domain choice does to this

Carts live in cookies, and cookies are bound to a registrable domain. That is a
browser rule, not a platform limitation &mdash; **putting everything on one
platform does not by itself let a cart follow a customer to a different domain.**

| Arrangement | Does a cart carry across? |
|---|---|
| `hub.sportpharm.com` (subdomain) | **Yes, transparently** &mdash; a cookie scoped to `.sportpharm.com` is shared |
| `sportpharm.com/athlete-hub` (subdirectory) | **Yes** &mdash; same origin, nothing to solve |
| `wasabirub.com` (separate domain) | **Only if we build it** &mdash; a cart token has to be passed in the crossing link and rebuilt on arrival |

The separate-domain option is buildable on one platform, but it is a real work
item, and it is fragile: it works only when someone follows a link, so anyone who
types the domain or returns later arrives empty-handed. Approaches that lean on
third-party cookies should be discounted &mdash; browsers are closing that door.

**The way to avoid the question entirely is to keep deep-linking products and
never hold a cart on two properties.** That works on every option above, including
`wasabirub.com`, and it is what we already do.

So this does not override the domain decision &mdash; it adds one line to it: if we
choose `wasabirub.com`, we accept that a shared cart is a build item we are
choosing not to need.

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
| "The domains can be joined up later" | A shared cart cannot cross domains without being built. Avoidable by deep-linking products — but it has to be a deliberate choice, not an assumption. |
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
2. **Confirm the commerce pattern** &mdash; deep-link products from the hub and hold no cart on a second property. Fix the dead-end buttons on `products.html` before launch
3. **Confirm the domain split** — sportpharm.com (company) / wasabirub.com (product + hub),
   or the sportpharm.com/athlete-hub alternative if faster results matter more
4. **Name an owner** for clinical review and publishing cadence

**Timing note:** the domain decision should be made *before* the article cluster
publishes. Content that ranks at one address and later moves loses much of its
earned value, and our current hosting cannot redirect properly. Deciding now is
free; deciding in six months is not.

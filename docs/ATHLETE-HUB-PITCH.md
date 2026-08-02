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

## 4. The commerce problem this decision creates

**This is the risk that has not been on the table, and it is the one that costs
money directly.**

SportPharm today is a WordPress site with WooCommerce. That is where the real
cart lives, where checkout happens, and where orders, tax and shipping are
configured. **The Athlete Hub is a separate static site with no backend and no
cart of any kind.**

Right now the hub "sells" by linking out to the store — it does that in **56
places**. And every *Add to Cart* button on the hub is a simulation: it
increments a badge and shows an "Added to cart" toast, and nothing is ever added
to anything. Reload the page and it is gone. There is no cart on the hub and no
way to check out from it.

**Splitting the domains turns a system boundary into a domain boundary, at the
exact moment the hub is designed to create.**

The sequence we are trying to build is: someone reads an article about their
pain, decides a topical is worth trying, and buys. Across two properties that
becomes:

1. Reads the article on **wasabirub.com**
2. Clicks *Add to Cart* — sees a confirmation that means nothing
3. Crosses to **sportpharm.com** to check out
4. Arrives with an empty cart and starts over

Most people do not start over. We would be spending 6–12 months earning the
traffic and then dropping it at the checkout step.

A cross-domain split also means no shared login session, cookie consent asked
twice, and purchase attribution broken by default — so the hub cannot even prove
it drove the sale it drove.

### The three ways out

| Option | What it means | Cost |
|---|---|---|
| **A. Hub never holds a cart** | Remove the cart affordance entirely; every product link goes straight to the WooCommerce product page | Cheap, honest, no dead ends. One extra click, and the hub never owns the transaction |
| **B. Hub lives inside WordPress** | Rebuild the hub as pages on the existing install — one system, one cart | Rebuild cost; loses the current static build and its speed |
| **C. Headless** | Hub stays static and talks to the WooCommerce Store API for a real cart | Real engineering, ongoing maintenance, most expensive |

**Recommendation: A now, and revisit C only if the hub proves it converts.** What
we must not do is launch the current state, where the button tells the customer
something untrue.

### This changes the domain decision

Section 3 framed the domain choice as an SEO trade — new domain versus inherited
authority. The cart problem adds a second axis, and it points the same way:

**`sportpharm.com/athlete-hub` keeps the hub on the same origin as the store.**
Same domain, same WooCommerce session, one cart, one consent banner, attribution
intact. The commerce problem disappears rather than being managed.

`wasabirub.com` still has the stronger brand argument for a product-led hub. But
it now carries a build cost that `sportpharm.com/athlete-hub` does not — and that
cost should be named before we choose, not discovered afterwards.

---

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
| "The domains can be joined up later" | The cart break is not cosmetic — it is a lost sale at the moment of intent. Cheapest to solve before the hub earns traffic, not after. |
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
2. **Decide how commerce works across the split** &mdash; option A, B or C above. This is now a precondition of the domain choice, not a follow-up to it
3. **Confirm the domain split** — sportpharm.com (company) / wasabirub.com (product + hub),
   or the sportpharm.com/athlete-hub alternative if faster results matter more
4. **Name an owner** for clinical review and publishing cadence

**Timing note:** the domain decision should be made *before* the article cluster
publishes. Content that ranks at one address and later moves loses much of its
earned value, and our current hosting cannot redirect properly. Deciding now is
free; deciding in six months is not.

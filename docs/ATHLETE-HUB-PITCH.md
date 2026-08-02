# wasabirub.com — leadership brief

> Visual version: https://claude.ai/code/artifact/b3b4a9a5-96ff-4466-ad99-faf67546840c

The Athlete Hub — A Demand Engine for WasabiRub

 
 Prepared for leadership · Decision requested

 wasabirub.comneeds a reason to rank.

 A new domain starts with no search authority. The Athlete Hub is how the product site earns it — educational content that answers what athletes actually search, on the same domain that sells them the answer.

 Three decisions: approve the hub as the demand engine for wasabirub.com, confirm the platform it runs on, and name who operates it.

 

 
 
 sportpharm.com has years of earned trust. wasabirub.com has none — it is a new address, starting at zero.

 Nobody searches for a product they have not heard of. They search for their problem. The hub answers those questions honestly, earns the traffic, and puts WasabiRub in front of someone at the moment they are deciding what to do about pain. We are a pharmacy — answering medication and pain questions credibly is an asset we already own and do not use. A competitor can copy a design. They cannot copy a pharmacist.

 

 
 
 What people actually searchWhat a product page offers them

 
 "sore two days after workout normal" | A product description

 "should I train with knee pain" | A product description

 "is this normal soreness or an injury" | A product description

 
 
 

 
 Why the hub and the product belong on the same domain

 This is the part that makes the arrangement work. Every article that ranks, every link someone shares, every mention earned — all of it accrues to wasabirub.com, and internal links carry that authority straight to the product pages sitting beside it. Content on one domain cannot lend its authority to a product on another. Splitting them would mean earning the traffic and then handing it away at the moment of purchase.

 

 

 
 

## Built and working today

 Not a concept deck. Open any of these in the meeting.

 
 

### Try it live

 Four educational pathways, two interactive tools, and a contact form that already delivers to info@sportpharm.com.

 
 Athlete Hub homeThe four pathways
→
 Recovery plan builder5 questions, personalised output
→
 Push Through or Stop?Guided support finder
→
 Pain-Relief OptionsWhere WasabiRub sits
→
 Sports Pharmacy, ExplainedThe pharmacy advantage
→
 Is This for Me?Identity & orientation
→
 

 

 Also built: ten articles published, a guided support finder, a recovery-plan builder, and a contact form already delivering to info@sportpharm.com.

 

 
 

## sportpharm.com does not change

 The first concern, answered directly: this is a new site on a familiar platform, not a migration of the one that works.

 
 0
changes to sportpharm.com

 0
new platforms to learn

 63
pages already built and working

 0
lines of server-side code in them

 

 
 What we are actually proposing

 sportpharm.com stays exactly as it is — the company and pharmacy site, on the WordPress the team knows and likes. Nothing is migrated, rebuilt or switched off.

 wasabirub.com is a new site on the same platform. Another WordPress install, running WooCommerce, holding the product pages and the hub together. Not a new technology to learn — the same admin screens, the same publishing workflow, the same skills the team already has.

 The hub itself needs almost nothing. We audited all 63 pages: no server-side code, no build step, no API layer. The interactive tools are client-side JavaScript that runs identically inside a WordPress template. Articles become posts and pick up the draft → review → publish workflow that already exists.

 

 
 And no page builder is involved

 A custom theme template renders our own markup verbatim — same CSS, same typography, same brand red. Elementor, Divi and off-the-shelf themes are where "dated and tacky" comes from, and none of them are required or used. The approved design ships as designed.

 

 
 The one real hazard

 Drift. A plugin installed later that injects its own CSS can degrade a carefully built design. A governance rule, not a technical limit — but it needs a named owner.

 

 

 
 

## Who runs this afterwards

 The second concern, and the one that should shape the platform choice more than any feature comparison.

 The build is contracted. The running of it — articles, products, coupon codes, orders — has to sit with a SportPharm employee. Whoever builds the hub is not operating it in a year. That is not a caveat; it is the requirement. Extra build effort is affordable. Extra operating effort is not.

 
 
 The jobCustom buildWordPressShopify

 
 Publish an article | Usable adminThe most widely known publishing screen there is | Basic blog, workable

 Add or edit a product | Usable admin | WooCommerce product screenBest in class

 Create a coupon code | Stripe dashboard — fineBuilt-in Woo couponsBuilt-in discounts

 Refund an order | Stripe dashboard | Woo ordersBest

 Get unstuckNo vendor support lineVast community; any freelancerVendor support + partners

 Hire a replacementSpecialist, not a commodityEasyEasy

 
 
 

 A custom build is not the answer here — and the reason matters. It is not that staff could not use it; the admin is genuinely fine and Stripe handles coupons and refunds natively. It is that every later request — "can we add gift cards?", "Stripe changed an API" — is a build rather than a setting, so it needs a permanent developer relationship rather than a handover. A WordPress freelancer is a commodity findable in a day. A Next.js + Payload + Stripe developer taking a small maintenance contract is not.

 
 Which is an argument for WordPress

 More people know the WordPress editor than any other publishing interface in the world. Articles, pages and coupons are all screens a marketing coordinator can be shown once. And if that person leaves, the replacement is easy to hire — which is the whole point.

 

 

 
 

## What we are deciding, and when

 Three questions have been travelling together. Separating them is what makes this safe.

 
 1
 Decide now
 

**Build wasabirub.com on WordPress + WooCommerce**
 The same platform running sportpharm.com today. The product pages and the hub live together on the new domain, so everything the content earns accrues to the site that sells the product. No new technology, no new skills, and an easy hire if the person running it moves on.

 

 2
 Decide now
 

**Name who runs it**
 Publishing cadence, clinical review of health content, and plugin governance. This is the decision that determines whether the hub still works in a year — and the one most often skipped.

 

 3
 Decide later
 

**Whether sportpharm.com keeps selling**
 Once wasabirub.com has a store, two properties selling the same three products means two order streams, two stock counts and two discount systems. The clean answer is one store — wasabirub.com sells, sportpharm.com carries a Store link to it. Not urgent, but it should not drift.

 

 

 
 Why WordPress rather than something new

 The strongest argument is not technical. It is that this company already runs WordPress, likes it, and can staff it.

 A commerce platform like Shopify has real advantages at scale — native abandoned-cart recovery, and a point-of-sale system that would unify the pharmacy counter with the website. Those become compelling if retail unification matters, or once the catalogue grows well past four products. Neither is true today, and neither needs answering to start.

 

 

 
 

## When WordPress stops being the right answer

 Not a decision for Tuesday — but leadership should see where the line is, so choosing WordPress now reads as informed rather than default.

 
 Where we are3 products, online only

 WordPressBest fit
Already running. Nothing migrates, nothing new to learn.

 ShopifyPremature
A subscription and a migration for three products. Solves problems we do not have yet.

 

 Where we likely are3 products + the counter

 WordPressDepends
POS exists only as third-party plugins. Fine if the counter and the website do not need shared stock.

 ShopifyBest fit
POS is first-class: one inventory, one customer record, staff accounts, real hardware.

 

 Where we may go15+ products + counter

 WordPressStrains
Compounds — variants, stock, more plugins, more patching, POS still a plugin.

 ShopifyBuilt for it
Bulk edit, CSV import, variants, multi-location inventory, staff permissions, reporting.

 

 

 

### Abandoned cart, since it matters to us

 
 
 
 WordPress | Not a core feature. It needs a plugin or an ESP integration. Worth establishing which plugin runs on sportpharm.com today and whether anyone maintains it — "we have abandoned cart" often means a plugin nobody has updated in two years

 Shopify | Native. A first-class object in admin with built-in recovery emails and configurable timing. Nothing to maintain

 
 
 

 The constraint both share: recovery needs an email address. Anyone who fills a cart and leaves before entering contact details is invisible to every system. Nobody recovers a truly anonymous cart.

 
 On prescriptions, since it will come up

 Shopify prohibits prescription fulfilment; WordPress imposes no restriction. Mostly moot — Rx does not belong in a retail cart either way. Dispensing runs through a pharmacy management system, and what sits on a website is a refill or transfer request that hands off to it. It only becomes a real constraint if we want refills and OTC purchases inside one logged-in account. If that is on anyone's roadmap, say so — it changes the answer. Confirm specifics with compliance rather than with this document.

 

 

 
 

## What it actually requires

 Ongoing, not one-time. This is the part that decides whether it works.

 
 
- Clinical review of every article. Pharmacist and sports-medicine sign-off, with named authors and reviewers published on the page. An ethical obligation and a ranking requirement — search engines explicitly weight author credentials for health content. Ten articles are live now and this gate has not yet been applied.

 
- A publishing cadence. A hub that stops updating stops ranking. This needs an owner, not a launch date.

 
- Editorial discipline. The moment articles become disguised product pitches they stop ranking and stop earning trust. The restraint is the strategy.

 
- Plugin governance. One named person deciding what gets installed on wasabirub.com, so the design does not drift.

 
 

 
 

## Risks, answered

 
 
 The concernThe honest answer

 
 "We would be switching platforms" | We would not. sportpharm.com does not change, and wasabirub.com runs on the same WordPress the team already uses. It is a second install, not a new technology.

 "Who runs it when the contractor leaves?" | An employee, on WordPress — the most widely known publishing interface there is. If they move on, a replacement is easy and cheap to hire. That requirement is exactly why a bespoke custom build is not proposed.

 "A new domain will never rank" | It will not on its own — which is the point of the hub. Content is how a new domain earns authority. Expect 6–12 months, and note it compounds and keeps working after the spend stops, which advertising does not.

 "Why not just put it on sportpharm.com?" | It would rank sooner on the older domain. But the traffic would land on SportPharm and the equity would build there — not on the product site we are trying to establish. If wasabirub.com is where we sell, it is where the content has to live.

 "Health content is a liability" | Addressed by clinical review, named reviewers and explicit non-diagnostic language already built into every tool and page. The review gate still needs applying to the ten articles now live.

 "We'll publish ten articles and stop" | The most likely failure mode by some distance. Mitigated only by naming an owner and a cadence before launch.

 
 
 

 

 
 

## How we'll know it's working

 Not traffic for its own sake.

 
 Organic sessions to hub pagesLeading indicator, months 3–12

 Hub → product click-throughDoes education actually convert?

 Enquiries from hub pagesPharmacy consultation demand

 Assisted conversionsPurchases where a hub visit came first

 

 

 
 
 

## The decision

 1Approve the hub as the demand engine for wasabirub.comEducational content that earns the search traffic a new domain cannot get on its own — on the same site that sells the product.

 2Build it on WordPress + WooCommerceThe platform we already run and can already staff. sportpharm.com is untouched.

 3Name who runs itPublishing cadence, clinical review, plugin governance. The decision that determines whether this still works in a year.

 On timing: the search clock has not started. A new domain earns authority slowly, and every month without published, reviewed content is a month the competition keeps the answer. Ten articles are written and live — they need clinical sign-off, not more drafting.

 

 

SportPharm · Athlete Hub strategy · Prepared for leadership review
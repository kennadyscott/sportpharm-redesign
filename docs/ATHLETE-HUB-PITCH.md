# The Athlete Hub — leadership brief

> Visual version: https://claude.ai/code/artifact/b3b4a9a5-96ff-4466-ad99-faf67546840c

The Athlete Hub — A Demand Engine for WasabiRub

 
 Prepared for leadership · Decision requested

 Add an athlete hubto the site we already run.

 A customer-acquisition channel that puts WasabiRub in front of people at the moment they are deciding what to do about pain — built on the platform SportPharm already uses, with the store untouched.

 Three decisions: approve the hub, confirm who runs it, and agree that the commerce and domain questions are answered separately — later.

 

 
 
 SportPharm sells to people who are hurting. Those people are already searching — and finding someone else's answer.

 The hub answers the question honestly, earns the search traffic, and builds the trust that makes a purchase reasonable. We are a pharmacy — answering medication and pain questions credibly is an asset we already own and do not use. A competitor can copy a design. They cannot copy a pharmacist.

 

 
 
 What people actually searchWhat a product page offers them

 
 "sore two days after workout normal" | A product description

 "should I train with knee pain" | A product description

 "is this normal soreness or an injury" | A product description

 
 
 

 Every one of those is a person with pain, actively looking for guidance, who could reasonably end up buying a topical rub. Today we are not in that conversation.

 

 
 Built and working today

 Not a concept deck. Open any of these in the meeting.

 
 Try it live

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

 

 
 This is an addition, not a replacement

 The first concern, answered directly: nothing gets switched off, and nothing migrates.

 
 63
pages, all static HTML

 0
lines of server-side code

 0
changes to the store

 1
external call in the whole site — the contact form

 

 
 What that means in practice

 The hub drops into the WordPress install we already run. We audited every page: no server-side code, no build step, no API layer. The interactive tools are client-side JavaScript that runs identically inside a WordPress page template. Articles become posts — and pick up the draft → review → publish workflow the team already knows.

 The store does not move. WooCommerce keeps its products, its orders, its customers and its plugins, exactly as they are. No migration, no new vendor, no new subscription, no retraining.

 And no page builder is involved. A custom theme template renders our own markup verbatim — same CSS, same typography, same brand red. Elementor, Divi and off-the-shelf themes are where "dated and tacky" comes from; none are required or used.

 

 
 The one real hazard

 Drift. A plugin installed later that injects its own CSS can degrade a carefully built design. That is a governance rule, not a technical limit — but it needs a named owner.

 

 

 
 Who runs this afterwards

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

 

 

 
 The sequence

 Three decisions have been travelling together. They do not need to — and separating them is what makes this safe.

 
 1
 Decide now
 The hub goes into the existing WordPress

 Lowest risk, highest certainty, and it starts the clock that matters — search results take 6–12 months, and that clock has not begun. Nothing migrates, the store is untouched, and the design ships as designed.

 

 2
 Decide later
 The commerce platform, gated on one question

 Do the counter and the website need to share stock and customers? If no — stay on WooCommerce and give abandoned cart a named owner. If yes — Shopify, and the case strengthens as the catalogue grows. Nothing is built on the commerce side yet, so this costs nothing to defer and gets expensive once real orders live somewhere.

 

 3
 Decide later
 The domain, on its own merits

 WordPress runs the hub on either address, so the platform choice does not touch this. sportpharm.com/athlete-hub inherits years of search authority and ranks sooner. wasabirub.com builds brand equity from zero and takes longer. A business call, not a technical one — but it should be made before the article cluster earns its rankings, because content that moves address loses much of what it earned.

 

 

 
 Why the sequence is the recommendation

 Bundled, this asks leadership to approve a website rebuild, a store migration and a domain move on one vote. Three risks, one decision.

 Unbundled, the ask on Tuesday is "add a content hub to the site we already run." Then commerce and domain get answered on their own merits, with time and evidence, instead of being rushed to unblock the content.

 

 

 
 The commerce question, when we get to it

 Not for Tuesday — but worth seeing the shape of it now, so deferring feels informed rather than avoidant.

 
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

 

 

 Abandoned cart, since it matters to us

 
 
 
 WordPress | Not a core feature. It needs a plugin or an ESP integration. Worth establishing which plugin runs on sportpharm.com today and whether anyone maintains it — "we have abandoned cart" often means a plugin nobody has updated in two years

 Shopify | Native. A first-class object in admin with built-in recovery emails and configurable timing. Nothing to maintain

 
 
 

 The constraint both share: recovery needs an email address. Anyone who fills a cart and leaves before entering contact details is invisible to every system. Nobody recovers a truly anonymous cart.

 
 On prescriptions, since it will come up

 Shopify prohibits prescription fulfilment; WordPress imposes no restriction. Mostly moot — Rx does not belong in a retail cart either way. Dispensing runs through a pharmacy management system, and what sits on a website is a refill or transfer request that hands off to it. It only becomes a real constraint if we want refills and OTC purchases inside one logged-in account. If that is on anyone's roadmap, say so — it changes the answer. Confirm specifics with compliance rather than with this document.

 

 

 
 What it actually requires

 Ongoing, not one-time. This is the part that decides whether it works.

 
 
- Clinical review of every article. Pharmacist and sports-medicine sign-off, with named authors and reviewers published on the page. An ethical obligation and a ranking requirement — search engines explicitly weight author credentials for health content. Ten articles are live now and this gate has not yet been applied.

 
- A publishing cadence. A hub that stops updating stops ranking. This needs an owner, not a launch date.

 
- Editorial discipline. The moment articles become disguised product pitches they stop ranking and stop earning trust. The restraint is the strategy.

 
- Plugin governance. One named person who decides what gets installed, so the design does not drift.

 
 

 
 Risks, answered

 
 
 The concernThe honest answer

 
 "We would be switching platforms" | We would not. The hub goes into the WordPress we already run and the store is untouched. This is an addition.

 "Who runs it when the contractor leaves?" | An employee, on WordPress — the most widely known publishing interface there is. And if they leave, a replacement is easy to hire. That requirement is why a custom build is not proposed.

 "SEO takes too long" | True. 6–12 months. It compounds, and it keeps working after the spend stops — which advertising does not. That is an argument for starting now.

 "Health content is a liability" | Addressed by clinical review, named reviewers and explicit non-diagnostic language already built into every tool and page. The review gate still needs applying to what is live.

 "We'll publish ten articles and stop" | The most likely failure mode. Mitigated only by naming an owner and a cadence before launch.

 
 
 

 

 
 How we'll know it's working

 Not traffic for its own sake.

 
 Organic sessions to hub pagesLeading indicator, months 3–12

 Hub → product click-throughDoes education actually convert?

 Enquiries from hub pagesPharmacy consultation demand

 Assisted conversionsPurchases where a hub visit came first

 

 

 
 
 The decision

 1Approve the hub, into our existing WordPressAn addition to the site we already run. The store is untouched and nothing migrates.

 2Name who runs itPublishing cadence, clinical review, and plugin governance. This is the decision that determines whether it still works in a year.

 3Agree commerce and domain are decided separatelyCommerce gated on whether the counter and the website need shared stock. Domain on brand equity versus search authority. Neither blocks the hub.

 On timing: the domain decision should be made before the article cluster earns its rankings. Content that ranks at one address and later moves loses much of its earned value. Deciding in a month is free. Deciding in a year is not.

 

 

SportPharm · Athlete Hub strategy · Prepared for leadership review
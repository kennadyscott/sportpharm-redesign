# Its own site. Our own platform.

_wasabirub.com — leadership brief_

**See it live** — both live on the same domain, wasabirub.com. The product pages and the hub are one site, not two:

- [WasabiRub — the product site](https://kennadyscott.github.io/sportpharm-site/wasabirub.html)
- [The Athlete Hub](https://kennadyscott.github.io/sportpharm-site/index.html)

> Visual version: https://claude.ai/code/artifact/b3b4a9a5-96ff-4466-ad99-faf67546840c

wasabirub.com — A Product Site on the SportPharm Platform

 
 wasabirub.com · Prepared for leadership

 Its own site.Our own platform.

 WasabiRub gets a site of its own — its own domain, its own audience, its own reason to rank. It is built on the platform SportPharm already runs, in a design system shared across both. A separate front door on a foundation we already own.

 Three decisions: approve the hub as the demand engine for wasabirub.com, confirm the platform it runs on, and name who operates it.

 
 
 WasabiRub — the product siteFeel It Work — the new design→
 
 The Athlete HubFour pathways, tools and articles→
 

 Both live on the same domain — wasabirub.com. The product pages and the hub are one site, not two, which is what lets everything the content earns carry through to the product pages beside it. These are working previews at a temporary address while the domain is set up, and are best viewed on a desktop browser.

 

 
 
 sportpharm.com has years of earned trust. wasabirub.com has none — it is a new address, starting at zero.

 Nobody searches for a product they have not heard of. They search for their problem. The hub answers those questions honestly, earns the traffic, and puts WasabiRub in front of someone at the moment they are deciding what to do about pain. We are a pharmacy — answering medication and pain questions credibly is an asset we already own and do not use. A competitor can copy a design. They cannot copy a pharmacist.

 

 
 
 What people actually searchWhat a product page offers them

 
 "sore two days after workout normal" | A product description

 "should I train with knee pain" | A product description

 "is this normal soreness or an injury" | A product description

 
 
 

 
 Why the hub and the product belong on the same domain

 This is the part that makes the arrangement work. Every article that ranks, every link someone shares, every mention earned — all of it accrues to wasabirub.com, and internal links carry that authority straight to the product pages sitting beside it. Content on one domain cannot lend its authority to a product on another. Splitting them would mean earning the traffic and then handing it away at the moment of purchase.

 

 

 
 

## The platform stays. The design changes.

 Both sites move to the new design system. Neither moves to a new platform.

 
 A correction I owe you

 Earlier I told you WordPress would be limiting — that we would be boxed in by its components and unable to build the design we wanted. I was wrong, and I would rather correct it myself than have us decide on it.

 The mistake was conflating WordPress with what most people actually encounter as WordPress: page builders like Elementor and Divi, and off-the-shelf themes. Those are limiting, and they are exactly where "dated" comes from. A custom theme is a different thing entirely — it renders our own markup verbatim, and none of those tools are involved.

 What changed my assessment: auditing all 75 pages we have built — no server-side code, no build step, no API layer — and working through how WooCommerce template overrides actually function. The correction makes the recommendation stronger, not weaker. We can have the design we want and stay on the platform this company already knows and can staff. I had been treating those as a trade-off. They are not.

 

 The plan is two WordPress sites sharing one design language: sportpharm.com rebuilt for the company and the pharmacy, and wasabirub.com as the product site with the hub beside it. One parent theme, two child themes — a shared foundation with the divergence each site needs.

 
 The product pages are entirely ours — this is the important one

 The current product template is the weakest part of the existing site, and we are not trapped in it. WooCommerce gives three levels of control, and we would use the third:

 
 
- Template override — copy a WooCommerce template into our theme and it takes precedence. The file is ours to edit.

 
- Unhook the defaults — title, price, rating, excerpt, add-to-cart, meta, tabs and related products are each attached at a hook. Any or all can be removed.

 
- Write the template from scratch — our own markup, pulling values off the product object. WooCommerce supplies data and cart mechanics; the presentation is entirely ours.

 

 The product pages already built — gallery, price, quantity stepper, option picker, active-ingredient explanations, tabs, reviews, related products — port essentially whole. Only the add-to-cart form itself must come from WooCommerce. The richer fields become custom fields rendered by our own markup.

 The honest constraint: the add-to-cart form and checkout carry functional requirements — security tokens, expected field names, AJAX handlers. We restyle them completely but do not rewrite the mechanics. Our design on top, proven plumbing underneath.

 

 
 Two decisions to make at the start, not later

 1. Classic checkout, not block checkout. WooCommerce now ships two. The newer block-based checkout is significantly harder to customise deeply; the classic templates are fully overridable. If checkout is to match the design as thoroughly as the product pages, this must be specified at build time — retrofitting it later is painful.

 2. A plugin audit before scoping. Existing plugins may inject their own markup and CSS that fights a new design, and one installed later can undo it. Both a scoping input and an ongoing governance rule that needs a named owner.

 

 

### Two phases, not one project

 This is easy to hear as one enormous rebuild. It is not — it is a phase that is mostly finished and a phase that has not started.

 
 
 Phase Iwasabirub.com + the Athlete Hub

 
 
 
- 25 pages already designed and working — the hub, the pathways, the product pages

 
- 10 articles written and live

 
- 3 interactive tools built and functioning

 
- A contact form already delivering to info@sportpharm.com

 

 What remains: port into a WordPress theme, wire WooCommerce for three products, and get the articles through clinical review. The design work is essentially done.

 

 

 
 Phase IIsportpharm.com redesign

 
 
 
- 7 top-level sections

 
- 8 services — 3 with no mockup yet (Blister Packaging, Inventory Management, Customized Services)

 
- News, plus the store templates

 

 Status: two pages designed so far. This is the larger piece — and it does not block Phase I, because the shared theme is built once and applied twice.

 

 

 

 The honest note on effort: WooCommerce's cart and checkout templates are the fiddliest part of either phase and where redesigns typically run long. Everything else is well-trodden work.

 

 
 

## Two sites, one system

They are not two versions of the same site. They sell different things to different people, and the split is what lets each one rank for what it is actually about.

**sportpharm.com — the pharmacy.** The company, the credentials, the services. Athletic trainers, team physicians, athletic directors and program staff. What it sells is a *relationship*: compounding to a specification, unit-dose supply, inventory that doesn't expire, a pharmacist who answers. Years of earned trust and an established search footprint.

**wasabirub.com — the product.** The topical range and the content that drives demand for it. Athletes and everyday movers. What it sells is a *product*, in a cart, at a price. A brand-new domain with no authority, which is exactly why the hub sits on it.

**How they connect**

- **One design system, two child themes.** A visitor moving between them should recognise the same company — same typography, same red, same components — without either site pretending to be the other.
- **The traffic flows one way on purpose.** The hub earns attention by answering questions people actually search, and points to the product beside it on the same domain. sportpharm.com links out to wasabirub.com for the range; wasabirub.com points back for prescription work, compounding and anything requiring a pharmacist.
- **The commerce lives on wasabirub.com.** That is the cart, the checkout, the products. sportpharm.com stays a services and credibility site with enquiry forms, not a store — which is what it already is, and what it should remain.

## What is actually built

Not a mockup. Seventy-five working pages.

| | |
|---|---|
| **75 pages** | Built, live and navigable end to end |
| **3 audiences** | Everyday athlete, professional athlete, healthcare & AT |
| **6 service pages** | Every pharmacy service with its own indexable page |
| **10 articles** | The demand engine, already written |

**Why the page count is the SEO argument.** Search engines rank pages, not companies. Every question that gets its own page is a separate chance to appear when someone searches it. The current site answers "what is compounding" and "are compounded medications allowed under anti-doping rules" in an accordion that collapses on load — one URL, competing with itself.

- **Every service is its own page.** Six entry points where the mockup had a single services list.
- **32 questions marked up as structured data.** FAQPage schema is what lets a question and its answer appear directly in search results rather than only as a blue link. That markup does not exist on the current site.
- **Every service page links to every other.** A crawler arriving on any one can reach the whole set.
- **Nothing important is JavaScript-only.** Links a crawler needs are real `<a href>` in the markup. This is a real failure mode — we introduced it ourselves mid-build and caught it: the compounding page existed and was reachable by a human, but no search engine could have found it.

## A mirror of the current site, without the errors

This is not a reinvention of what SportPharm says about itself. The services are the same services. The FAQ answers are the live site's answers, taken from the page source and compared word for word, not paraphrased.

**What did not carry over** — errors found while transcribing:

- **"USP // compliance"** — on the compounding page, in a sentence about quality standards. The chapter numbers were written as `<795>/<797>` without escaping, so the browser swallowed them as HTML tags. A quality claim on a compounding pharmacy's page, rendering as a typo. Fixed.
- **Concierge shows repackaging's benefits** — the "Key Benefits" block on the concierge page is the drug repackaging list, pasted in by mistake. Rewritten from SportPharm's own concierge copy.
- **Testimonials with no attribution** — four service pages carry a five-star quote above a placeholder image and the words "Placeholder / Athlete."
- **"SportPharmTM"** — the trademark is superscript text, reading as literal letters mid-sentence. Replaced with the ™ character.
- **Buried distinctions** — "Unlike compounding, we're not altering the medication" sits mid-paragraph on the repackaging page. Given its own callout.

## Custom built, not template built

**The current site is a page builder.** Its markup is machine-generated — wrapper divs nested six deep, layout decisions stored as configuration strings, styling that cannot be changed without fighting the tool that wrote it. That is where "dated" comes from. It is not a taste problem; it is a structural one.

**What we built instead** is a component library — a services rail with an expanding drawer, an accordion, tabbed panels, a numbered process component, product cards, a testimonial stage. Each defined once and reused, so a change lands everywhere at once.

**The brand adjustments**

- **Palette.** Off the old navy onto a near-black ground, with a single red accent and a darker red reserved for text on light backgrounds. Adjacent dark sections use different values so they read as separate.
- **Typography.** A condensed display face at maximum weight for headlines, caps and tight, against a neutral body face. Headlines use a two-tone treatment — first clause in ink or white, the turn in red.
- **Hierarchy.** Full-bleed heroes with the headline set against the photograph, primary action above the fold on a laptop. Sections alternate light, white and near-black.
- **Accessibility, measured.** Every colour pair checked in the browser against its actual composited background. WCAG AA throughout. Several combinations that looked fine failed and were adjusted.
- **Three audiences, one identity.** A persona switcher moves between everyday athlete, professional athlete, and healthcare & AT. The current site asks one voice to speak to a weekend runner and a Division I head trainer at once.

## Who runs this afterwards

 The second concern, and the one that should shape the platform choice more than any feature comparison.

 The build is contracted. The running of it — articles, products, coupon codes, orders — has to sit with a SportPharm employee. Whoever builds the hub is not operating it in a year. That is not a caveat; it is the requirement. Extra build effort is affordable. Extra operating effort is not.

 
 
 The jobWordPress + our themeShopify + our front end

 
 Publish an articleThe most widely known publishing screen there is | Basic blog, workable

 Add or edit a product | WooCommerce product screenBest in class

 Create a coupon codeBuilt-in Woo couponsBuilt-in discounts

 Refund an order | Woo ordersBest

 Get unstuckVast community; any freelancerVendor support + partners

 Hire a replacementEasy and cheapEasy

 Cost to runHosting only | Subscription + transaction fees + apps

 
 
 

 Both options are custom — that is not the variable. We are not using anyone's stock templates: the design is ours either way, rendered from our own markup. What differs is what runs underneath it, and that is what decides who can operate the site once the build is finished. The question is not "custom or off-the-shelf." It is which admin an employee logs into every morning, and how easily we replace them if they leave.

 
 Which points to WordPress

 More people know the WordPress editor than any other publishing interface in the world — and this team already uses it every day on sportpharm.com. Articles, pages and coupons are screens a marketing coordinator can be shown once. If that person leaves, the replacement is easy and cheap to hire. Shopify wins on the store screens, and that advantage grows with the catalogue — but it is a second system to learn, on top of the one we would still be running.

 

 

 
 

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

 Not a decision for now — but worth seeing where the line is, so choosing WordPress reads as informed rather than default.

 
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

 
 "We would be switching platforms" | We would not. Both sites stay on WordPress — same admin, same workflow, same skills. The design changes; the platform, the content and the URLs do not.

 "Who runs it when the contractor leaves?" | An employee, on WordPress — the most widely known publishing interface there is. If they move on, a replacement is easy and cheap to hire. That requirement is exactly why a bespoke custom build is not proposed.

 "A new domain will never rank" | It will not on its own — which is the point of the hub. Content is how a new domain earns authority. Expect 6–12 months, and note it compounds and keeps working after the spend stops, which advertising does not.

 "Why not just put it on sportpharm.com?" | It would rank sooner on the older domain. But the traffic would land on SportPharm and the equity would build there — not on the product site we are trying to establish. If wasabirub.com is where we sell, it is where the content has to live.

 "A redesign will hurt our search rankings" | Not if the URLs stay the same, and they would. Search authority attaches to addresses, not to themes — sportpharm.com keeps everything it has earned.

 "We will be stuck with WooCommerce product pages" | No. A custom template replaces them entirely; WooCommerce supplies only the data and the cart mechanics. The product pages already designed port essentially whole.

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

 2Build both sites on WordPress + WooCommerce, one design systemThe platform we already run and can already staff. New theme, same admin — content, orders and URLs all stay put.

 3Name who runs itPublishing cadence, clinical review, plugin governance. The decision that determines whether this still works in a year.

 On timing: the search clock has not started. A new domain earns authority slowly, and every month without published, reviewed content is a month the competition keeps the answer. Ten articles are written and live — they need clinical sign-off, not more drafting.

 

 

SportPharm · wasabirub.com platform & design brief · Prepared for leadership review
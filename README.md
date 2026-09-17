# Harborline Water — Marketing Site

Premium static marketing / conversion site for **Harborline Water** (Charleston / Lowcountry SC whole-home water filtration).

Coastal premium brand: deep teal/navy + warm sand/cream + white. Hero offer is whole-home **catalytic carbon** for municipal chloramine / taste / odor — not a softener-first pitch.

## How to open

No build step. This is a static HTML/CSS/JS site.

```bash
# From this folder
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Hosting (Vercel)

Production is a Vercel static deploy. `vercel.json` enables `cleanUrls` so `/book` serves `book.html`.

```json
{ "cleanUrls": true }
```

Deploy:

```bash
npx vercel --prod --yes
```

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, price band, process, trust, FAQ, CTAs |
| `charleston.html` | Geo — Charleston / CWS chloramine story |
| `mount-pleasant.html` | Geo — Mount Pleasant Waterworks |
| `summerville.html` | Geo — Summerville / Dorchester |
| `johns-island.html` | Geo — city chloramine + well pockets |
| `west-ashley.html` | Geo — West Ashley / CWS |
| `whole-home.html` | Offer — catalytic carbon (hero) |
| `reverse-osmosis.html` | Offer — optional under-sink RO |
| `softener.html` | Offer — secondary; honest 3.4 gpg note |
| `well-water.html` | Offer — separate well package |
| `book.html` | Lead form → console.log success (GHL-ready) |

Shared assets: `css/styles.css`, `js/main.js`.

## Offer & messaging (locked)

- **Hero:** whole-home catalytic carbon for municipal chloramine / taste / odor
- **Price:** **$2,700–$3,100 installed** for most city homes
- Softener = secondary (CWS ~**3.4 gpg** — stated honestly)
- Optional under-sink RO
- Well package = separate
- CTA: **Book free water test**
- Process: Free test → clear recommendation → licensed plumber install
- Do **not** say municipal water is unsafe

## Contact placeholders

| Channel | Value | Notes |
|---------|-------|--------|
| Phone | `(843) 555-0148` | **PLACEHOLDER** — replace with real CallRail / business number before ads |
| Email | `hello@harborlinewater.com` | Update DNS / mailbox when domain is live |

## Lead form → GoHighLevel

`book.html` + `js/main.js` currently:

1. Validate / collect: name, phone, email, ZIP, city vs well, concern, preferred contact
2. `console.log` the payload
3. Show on-page success message

**Next step — GHL webhook:** in `js/main.js`, replace the console.log with a `fetch` to your GoHighLevel inbound webhook (commented example is in the form HTML and JS). Alternatively point a native GHL form embed into `book.html`.

## Next steps for Shawn

1. **Domain** — Register `harborlinewater.com` (or chosen brand) and point DNS to static hosting (Netlify, Cloudflare Pages, S3+CloudFront, or any static host). Run trademark / Namecheap check first.
2. **Phone** — Replace `(843) 555-0148` everywhere with a tracked number (CallRail / similar). Search-replace across HTML.
3. **Email** — Stand up `hello@harborlinewater.com` (Google Workspace / Microsoft 365).
4. **GHL** — Wire `book.html` webhook; add calendar booking for the free test; pipeline stages: Lead → Test Scheduled → Quoted → Installed → Review Asked.
5. **Hosting** — Drag-drop this folder to Netlify/Cloudflare Pages, or `npx serve` for demos.
6. **Google Business Profile** — Create local GBP before scaling ads; gather real install reviews (no fake stars on-site — site intentionally has none).
7. **Ads** — Google Search / LSA test: “whole house water filter Charleston”, “chloramine filter Mount Pleasant”, etc. Start ~$75–150/day for 3–4 weeks; negatives for DIY/pitcher. Don’t scale until close rate + plumber capacity proven.
8. **Ops** — Lock 2–3 licensed plumber partners at ~$500–600 install; chloramine-correct catalytic carbon BOM ~$900–1,200; post-install residual check logged.
9. **Legal** — Confirm SC licensing path for residential plumbing installs; keep claims utility-aligned.

## Design notes

- Desktop + mobile polished; sticky CTA bar on mobile (`Call` + `Book free water test`)
- Sticky header with Book CTA
- Strong price clarity on homepage and geo pages
- Trust section without fake badges / review counts
- FAQ includes honest hardness note

## Model reference

Positioned to beat thin plumber SEO pages and compete under HALO-style ~$5k public offers — similar funnel shape to raleighwaterpros.com, but **carbon-first** for Charleston chemistry (not softener-heavy).

---

*Built Sep 17, 2026 from `/workspace/briefs/charleston-water-treatment-market-brief.md`.*

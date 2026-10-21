# BRIEF: TravelPulse Thailand — Blitz restyle

## Goal
Restyle this existing static site (14 pages + 404) into the **Blitz business site template** look. ONLY the visual design changes. Content stays byte-for-byte equivalent in meaning AND wording.

Template spec: /home/box/agent-data/workflows/blitz-business-site-template/SKILL.md (read it). Reference build: https://github.com/JanVanHal/chiangrai-coffee-v3 (live https://janvanhal.github.io/chiangrai-coffee-v3/). Write original code; do not copy Modulify Blitz.

## Design
- Tokens: cream #F5F0E6, sand #E7DECD, hairline #D7D2C8, ink #171717, deep #0A0A0A, accent coral #FF6545 (coral text on light: #A3311B). Archivo (display), Inter (body), IBM Plex Mono (labels, `/ 01` indices), Noto Sans Thai fallback. Radius 2px, ease cubic-bezier(0.22,1,0.36,1), max width 90rem.
- Fixed nav: "TravelPulse / Thailand" wordmark, numbered links (Tourists 01, Nomads 02, Retirees 03, Guides 04 or similar using existing pages), mobile full-screen numbered menu.
- Hero on every page: big Archivo headline (existing H1 text) at top, existing intro text, existing buttons aligned in one row (wrap neatly on mobile, equal height). **No hero hours card / no side card in the hero.**
- Marquee strip on the home page only, using words already on the site (e.g. eSIM, Visas, Insurance, Money, Transport, Apps, Regions).
- Sections numbered `/ 01`, `/ 02` with hairline dividers; cards (bank cards, track cards) restyled in Blitz look; to-verify badges stay clearly visible (coral/amber pill); sources lists in mono labels; "Last checked" lines kept visible; disclaimer box kept at bottom of each page.
- Dark footer with giant wordmark. Keep all existing footer links and text.
- Motion: subtle reveals, fully disabled under prefers-reduced-motion. Content must be visible without JS (no opacity:0 unless a `js` class is on html).

## Guardrails (MUST)
- Static HTML/CSS/JS only, relative paths only (site is served under /travelpulse-thailand-blitz/ on GitHub Pages). Keep file names (index.html, apps.html, ... 404.html, sitemap.xml, img/).
- Keep ALL text inside <main> and the footer: headings, paragraphs, lists, tables, bank cards, TAGTHAi Easy Pay section, SafetyWing sections, disclaimers, "Last checked" lines, "To verify" notes, sources. Do not rewrite, shorten, add marketing copy, or invent stats/reviews/testimonials. Do not add a contact form (none in source).
- Keep EVERY link exactly: same href, same target/rel, same data-affiliate attributes. SafetyWing affiliate URL `https://safetywing.com/nomad-insurance?referenceID=26621731&utm_source=26621731&utm_medium=Ambassador` with rel "nofollow sponsored noopener" and data-affiliate="safetywing" must stay. data-affiliate="TODO" placeholders stay. External links target="_blank" rel="noopener" (plus existing extras); internal links same tab.
- Keep all element ids/anchors (in-page links must still work) and existing JS behaviour (e.g. visa stay-length picker) working.
- Responsive 360–1440 with no horizontal scroll, skip link, focus styles, alt text, no console errors.
- You may replace styles.css/travelpulse.css/thailand.css with a new assets/css/style.css and adapt thailand.js, and change wrapper markup/classes, but not the content.
- Do not touch Cloudflare, do not deploy, do not touch other repos. Delete nothing else. SOURCE-BRIEF.md is the original content brief, keep it.

## Fix list
- **Header illustrations (round 1).** 14 ready-made flat cartoon WebP illustrations (1280x720, 16:9, all <200 KB, one consistent style, palette matches style.css: cream/sand/coral/teal/mustard, ink outlines; no text, logos or people) are in `img/illustrations/<page>.webp`, one per page: index, arrival, esim, visas, insurance, money, transport, apps, regions, nomads, retirees, living, tourists, 404 (file name = page name; home = index.webp). Do NOT generate or alter image files; only place them.
  - Add one illustration to the hero of each matching page (14 pages incl. 404), below or beside the existing hero text (on desktop a two-column hero with text left/image right is fine if it looks good; on mobile image below text). It must feel like a colourful pop that fits the Blitz look: radius 2px or none, optional thin ink hairline border, max width so it never dominates the H1.
  - `<img>` with width="1280" height="720" (no layout shift, CSS `height:auto; aspect-ratio:16/9`), `decoding="async"`, the hero image NOT lazy (it is the only image per page; use `fetchpriority="high"`), relative path `img/illustrations/x.webp`.
  - Short descriptive alt text per image (e.g. "Cartoon illustration of a tuk-tuk, train and boat crossing Thai countryside"). Keep alt factual, no marketing copy.
  - Do not change any text, heading, link, href, rel, target, id, or data-affiliate attribute. Do not touch the marquee content. No new external requests.
  - Responsive 360–1440, no horizontal scroll, reduced-motion respected.
- **Big hero image on all pages (round 2).** Index already has the approved desktop treatment in `assets/css/style.css` (the `/* Index hero: big uncropped illustration */` block scoped to `.hero--home`). Apply the SAME treatment to the other 13 pages (incl. 404, whose hero wrapper is `.page-404`, and the `.vpn-intro` headers): at >=1024px only, grid columns `minmax(0,0.8fr) minmax(0,1.2fr)` (text left, image right), `align-items:center`, `.hero-illu` with `border:0; width:100%; height:auto; aspect-ratio:16/9; object-fit:contain` (full uncropped image). Simplest: generalise the selector to `.hero-inner, .vpn-intro, .page-404` instead of `.hero--home`. CSS only; below 1024px nothing changes (mobile keeps the current look). Do not change any HTML text, links, ids, or images. No horizontal scroll at 1024/1280/1440. Commit with a clear message; do not push.

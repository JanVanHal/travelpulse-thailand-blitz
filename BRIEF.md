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
- (empty — filled after review)

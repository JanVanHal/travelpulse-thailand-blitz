# TravelPulse Thailand

Static pages for the Thailand section of [TravelPulse](https://travelpulse.site). They will later be served at `https://travelpulse.site/thailand/`.

This repo is not deployed. No Cloudflare, GitHub Pages, ads.txt, or AdSense files live here.

## Preview

From the repo root:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/`. Relative links assume these files sit together, the same way they will under `/thailand/`.

## Pages

| File | Role |
|---|---|
| `index.html` | Thailand hub: three audience tracks, first-24-hours checklist, topic cards |
| `tourists.html` | ≤30 days |
| `nomads.html` | DTV / 1–6+ months |
| `retirees.html` | Long-stay O / O-A |
| `arrival.html` | Airports, TDAC, immigration, SIM, transfers |
| `esim.html` | Travel eSIM vs tourist SIM (prices on the provider) |
| `visas.html` | Stay-length picker and stay rules |
| `insurance.html` | Short-trip / nomad / expat cover |
| `money.html` | KBank, K PLUS, PromptPay, Wise, ATMs |
| `transport.html` | Grab, Bolt, 12Go, buses, trains, flights |
| `apps.html` | LINE, Grab, maps, air quality |
| `living.html` | Etiquette, scams, safety, weather |
| `regions.html` | Bangkok, North, Isaan, Gulf, Andaman |
| `404.html` | Missing URL |
| `sitemap.xml` | Thailand URLs only, for a later merge |

Shared: `styles.css` + `travelpulse.css` (copied from TravelPulse, unchanged), `thailand.css`, `thailand.js` (stay picker + checklist in `localStorage`).

## Facts

Numbers and rules come from `BRIEF.md`. Anything the brief marked TO VERIFY is a visible “To verify” note on the page. Do not add prices, fees, or visa figures that are not in the brief.

Contact, privacy, about, and affiliate disclosure stay on travelpulse.site. This section does not duplicate them.

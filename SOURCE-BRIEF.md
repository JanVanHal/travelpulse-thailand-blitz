# BRIEF — TravelPulse Thailand section (travelpulse.site/thailand/)

> **Status: APPROVED TO BUILD in repo JanVanHal/travelpulse-thailand (21 Oct 2026). NOT deployed** — no Cloudflare, no GitHub Pages, no ads.txt, no domain. Will later be merged into travelpulse.site under `/thailand/`.
> Build mode: **Full brief**. Design source: TravelPulse (`travelpulse.css` + `styles.css` are already copied into this repo — link both, exactly like TravelPulse pages do).
> Fact rule: every rule/number below is either cited to an official source or marked **TO VERIFY**. Builder must keep citations as "Official sources" links on each page and must NOT add facts, prices, fees or numbers that aren't in this brief.

## 0. Jan's decisions (21 Oct 2026) — these OVERRIDE anything below
1. **No separate domain/name.** This is the "Thailand" section of TravelPulse. Brand everywhere = **TravelPulse** (header logo text/icon as on travelpulse.site, small, in nav only). Ignore §11 names (ThaiPulse etc.).
2. **Paths:** all files live at repo root but must work when served from `https://travelpulse.site/thailand/`. Use **relative links only** between section pages (`visas.html`, `tourists.html`…), shared CSS via relative path (`travelpulse.css`, `styles.css`). Links to the rest of TravelPulse = absolute `https://travelpulse.site/...` (same tab, it is the same site). Canonical/OG URLs: `https://travelpulse.site/thailand/<page>.html` (index → `https://travelpulse.site/thailand/`).
3. **Three audience tracks**, each with its own landing page: `tourists.html` (Tourists, ≤30 days), `nomads.html` (Digital nomads, 1–6+ months, DTV), `retirees.html` (Retirees & expats, long-stay). Each landing page: who it's for, relevant visa route(s), money, insurance, transport/apps tips, a checklist, links to the shared topic pages. Home shows the three tracks as the first big cards under the hero.
4. **Not personal.** No mention of Jan, an author, "written from Chiang Rai", "someone who lives here", family, wife, marriage visas "relevant to Jan", coffee projects, or any personal data. Neutral "TravelPulse" voice. Chiang Rai stays only as a normal region entry, no extra weight.
5. **Design = same as the other Pulse sites:** hero text at top, left-aligned, no big logo, no hours/address card; cards with CTA buttons pinned to the bottom and aligned on one line (flex column, `margin-top:auto`); same nav/footer pattern. No new accent colour.
6. **Links:** every external link/button `target="_blank" rel="noopener"`; affiliate buttons `rel="nofollow sponsored noopener"` + `data-affiliate="TODO"` + provider name; internal links same tab.
7. **No Thai-ID programmes.** Drop Shopee/Lazada/ACCESSTRADE/wife-ID ideas completely; nothing about it on any page.
8. **Accuracy first.** Every page: an "Official sources" list (links from this brief) and a visible line `Last checked: 2026-10-21`. Anything marked TO VERIFY in this brief must appear on the page as a visible note styled as a small badge/callout: "⚠ To verify — check the official source before relying on this." — or be left out. **Never invent prices, fees, phone numbers, URLs, opening hours, operator names or thresholds.** Don't state a fact that isn't in this brief.
9. **Contact:** no contact form and no mailto in this repo. Contact links point to `https://travelpulse.site/contact.html`. Privacy/disclosure/about link to the TravelPulse ones (`https://travelpulse.site/privacy.html`, `https://travelpulse.site/affiliate-disclosure.html`, `https://travelpulse.site/about.html`) — do NOT create own privacy/about/contact/disclosure pages.
10. **No deploy files:** no ads.txt, no AdSense script, no CNAME, no wrangler/Cloudflare config, no GitHub Actions. Do add `sitemap.xml` (thailand URLs only, for later merge) — no robots.txt.

### Final page list (overrides §2)
`index.html` (Thailand hub), `tourists.html`, `nomads.html`, `retirees.html`, `arrival.html`, `esim.html`, `visas.html`, `insurance.html`, `money.html`, `transport.html`, `apps.html`, `living.html`, `regions.html`, `404.html`, `sitemap.xml`, `README.md`, shared `thailand.js` (picker + checklist) if needed.
Nav: Thailand home · Tourists · Nomads · Retirees · Arrival · Visas · Money · Transport · Tips · Regions, plus "← TravelPulse" link to https://travelpulse.site/.

---

## 1. Purpose & audience
- **Purpose:** a practical, no-fluff, step-by-step guide to Thailand — from landing at the airport to living here for months. It earns from AdSense plus affiliate links (eSIM, insurance, transport, stays, tours, money transfer) and cross-links TravelPulse / NetPulse / VPNPulse.
- **Audience:**
  1. First-time tourists, 1–4 weeks.
  2. Long-stay visitors and digital nomads on the DTV, 1–6 months.
  3. Retirees and expats who are settling in, long-stay (see §0).
- **Language:** English (v1). Possible Thai/Dutch/German later (TO DECIDE).
- **Tone:** short, warm, direct, practical and neutral. Every page shows a "Last checked: <month year>" line, because rules change (the visa-exempt period changed on 15 Sep 2026).

## 2. Pages / sections (in order)
Multi-page static site, one HTML file per page, shared CSS (same pattern as TravelPulse).
1. `index.html` Home: hero (headline + intro text at top, left-aligned, **no hours/address card, no big logo**), "Your first 24 hours" checklist, topic cards grid, "What changed recently" box, newsletter-free.
2. `arrival.html` Arriving in Thailand (airports, immigration, TDAC, SIM, transfers, cash).
3. `esim.html` eSIM & mobile data for Thailand.
4. `visas.html` How long are you staying? Visas & stay rules.
5. `insurance.html` Travel & digital-nomad insurance.
6. `money.html` Banking & money (K PLUS, PromptPay, Wise, ATMs).
7. `transport.html` Getting around (Grab, Bolt, 12Go, buses, SRT trains, BTS/MRT, domestic flights).
8. `apps.html` Essential apps (LINE, LINE MAN, foodpanda/Grab Food, etc.).
9. `living.html` Tips: etiquette, scams, safety, healthcare, weather & seasons.
10. `regions.html` Regions (Bangkok, North incl. **Chiang Rai** & Chiang Mai, Isaan, Gulf islands, Andaman).
11. `about.html`, `contact.html`, `privacy.html`, `disclosure.html` (affiliate disclosure), `404.html`.

Global: sticky top nav (Arrive · eSIM · Visas · Money · Transport · Tips · Regions), footer with Pulse-suite links, affiliate disclosure line, "Information only, not legal/immigration advice" line.

## 3. Content outline per page

### 3.1 Home
- H1 idea: "Thailand, sorted. From the airport to your first month."
- First-24-hours checklist: TDAC submitted → passport stamp → data (eSIM) → cash/ATM → ride to hotel → LINE + Grab installed.
- Topic cards → each page. "What changed recently" box: 30-day visa exemption from 15 Sep 2026 (source below).
- Cross-promo strip: TravelPulse (eSIM/travel), VPNPulse (VPN for public Wi-Fi), NetPulse.

### 3.2 Arrival
- **Airports:** BKK Suvarnabhumi, DMK Don Mueang (budget airlines), CNX Chiang Mai, CEI Chiang Rai (Mae Fah Luang), HKT Phuket, USM Samui. One short card each with official site links (airportthai.co.th for AOT airports; Samui is a private Bangkok Airways airport, TO VERIFY).
- **TDAC (Thailand Digital Arrival Card):** all non-Thai nationals entering by air, land or sea must submit it online within 3 days before arrival (including arrival day). It is **free**, it is **not a visa**, you need a new one every entry, and children need one too. You only need one in transit if you pass immigration. Use only https://tdac.immigration.go.th (FAQ: https://tdac.immigration.go.th/manual/en/faq.html). **Scam warning:** paid look-alike sites exist, and embassies say never pay (e.g. https://abuja.thaiembassy.org/en/content/thailand-digital-arrival-card-tdac?cate=6a4e69243607ae35eb798bb3). The TDAC v2026.10.00 (15 Oct 2026) mentions automated passport control eligibility. Details TO VERIFY.
- **Immigration:** what officers may ask for: onward ticket, accommodation, and cash of 20,000 THB per person / 40,000 per family for visa-exempt entry (Royal Thai Embassy Doha: https://doha.thaiembassy.org/en/publicservice/tourist-visa-exemption-visa-on-arrival?menu=). How strictly this is checked: TO VERIFY / anecdotal, so don't claim.
- **SIM/eSIM at the airport vs before:** pros and cons. The airport booths (AIS, TrueMove H, dtac) need a passport registration. Prices: TO VERIFY at build time, so no numbers. eSIM before you fly = data on landing → link to esim.html.
- **Taxis/transfers:** official public taxi queue (BKK level 1, airport surcharge: TO VERIFY), Airport Rail Link BKK→city (TO VERIFY current fare/route on official site), Grab/Bolt pickup points, pre-booked transfers (Klook/12Go affiliate slot). DMK: buses/SRT Red Line (TO VERIFY).
- **ATMs & fees:** Thai ATMs typically charge foreign cards a flat fee per withdrawal (amount TO VERIFY, per bank). Always decline "dynamic currency conversion". Wise card tip → money.html.
- **Money exchange:** airport rates vs city exchangers (e.g. SuperRich, TO VERIFY current branches). Advice: change a small amount at the airport only.

### 3.3 eSIM
- What an eSIM is, phone compatibility check, install before you fly, data-only vs Thai number (a Thai number is needed for some apps/banking/OTP, TO VERIFY per app).
- Comparison table (affiliate slots): Airalo, Holafly, Saily + local tourist SIMs (AIS/True). **No prices hard-coded.** Use a "Check current price" button per provider (data-affiliate="TODO").
- Reuse TravelPulse eSIM content where it fits (link to travelpulse.site eSIM page; don't duplicate whole pages, to avoid thin/duplicate content for AdSense).

### 3.4 Visas: "How long are you staying?"
Interactive "stay length" picker (≤30 days / 1–6 months / 6+ months / retiring) → shows the relevant card.
- **Visa exemption (from 15 Sep 2026):** the 60-day scheme was revoked. Nationals of **60 countries** (incl. UK, US, EU states, Australia, Canada, NZ…) get **30 days** for tourism. Seychelles/Mauritius get 15 days. Argentina, Brazil, Chile, South Korea and Peru keep 90 days under bilateral agreements. Visa on Arrival now applies only to Azerbaijan, Belarus and Serbia (15 days, 2,000 THB). Land/sea border visa-exempt entries are limited to **2 per calendar year** (except Malaysia, Brunei, Indonesia, Singapore). Sources: Govt PRD https://thailand.prd.go.th/en/content/category/detail/id/48/iid/538547, MFA PDF https://image.mfa.go.th/mfa/0/TkZZJfspCP/Visa_Exemption_Scheme/PR-eng.pdf, Embassy Doha (link above), Bangkok Post https://www.bangkokpost.com/thailand/general/3311970/30day-visafree-stays-to-take-effect-on-sept-15.
- **Extensions:** you can extend at the immigration officer's discretion, and you must apply before your permitted stay ends (Embassy Doha). Length and fee for a visa-exempt extension after the 2026 change: **TO VERIFY** (immigration.go.th).
- **DTV (Destination Thailand Visa):** 5-year multiple entry, up to **180 days per entry**, extendable once by 180 days at immigration. Then you must leave and re-enter. Purposes: workcation (remote workers/freelancers), Thai soft power (Muay Thai, cooking, medical), and spouse/children of holders. Needs a bank balance of ≥ **500,000 THB** (many embassies ask for the last 3 months), employment/portfolio proof, a criminal record certificate (now asked by several embassies), and you must apply in your country of nationality or residence. Fee 10,000 THB, or the local equivalent (e.g. 350 EUR Helsinki, 400 USD Washington). Sources: https://www.thaievisa.go.th/visa/dtv-visa, https://helsinki.thaiembassy.org/en/publicservice/destination-thailand-visa-dtv, https://washingtondc.thaiembassy.org/en/page/dtv-visa. Rules vary by embassy, so the page must say "check YOUR embassy".
- **Retirement (Non-Immigrant O / O-A, 50+):** financial thresholds (commonly cited 800,000 THB deposit or 65,000 THB/month income) and O-A insurance requirements are **TO VERIFY** on thaievisa.go.th + immigration.go.th before publishing.
- **Other routes (one-liners, link out):** Thailand Privilege (Elite) visa, LTR visa, Non-O marriage, education visa. All **TO VERIFY**.
- **90-day reporting:** long-stay foreigners must report their address to immigration every 90 days (TDAC terms page mentions it: https://tdac.immigration.go.th/arrival-card/). Online/in-person options, TM.30 (landlord address notification): **TO VERIFY** on immigration.go.th.
- Big disclaimer box: "Not legal advice, rules change, confirm with Thai immigration / your embassy."

### 3.5 Insurance
- Why: hospital bills at private hospitals; motorbike accidents (often excluded without a valid licence, TO VERIFY per policy wording).
- Types: short-trip travel insurance vs nomad subscription vs expat health.
- Cards (affiliate slots): SafetyWing (Nomad Insurance), Genki, + one traditional travel insurer (World Nomads/Heymondo, TO DECIDE). **No prices or coverage limits hard-coded.** Use "See current plans". A checklist of what to read in the policy: motorbike, pre-existing conditions, deductible, evacuation, scuba.
- Note for DTV/retirement O-A: whether insurance is required depends on visa type (TO VERIFY).

### 3.6 Banking & money
- **Can a foreigner open a Thai account?** KBank (Kasikorn) official page: foreigners need a passport + **Non-Immigrant visa** (any type) + documents matching their purpose (work permit, school certificate…). **Accounts are NOT opened for tourist visa, Visa on Arrival, visa-exempt or DTV holders.** Source: https://www.kasikornbank.com/en/personal/account/pages/savings.aspx. Branch practice may vary, so say "ask the branch". You can pre-check documents via LINE @doccheck (same page).
- **K PLUS app:** free, registered after the account is opened, supports passport-based customers (FAQ: https://www.kasikornbank.com/en/personal/digital-banking/kplus/help/Pages/all.html). Show what it's used for: QR payments, transfers, bills.
- **PromptPay:** Thailand's national QR/phone-number payment system (Bank of Thailand info: TO VERIFY link bot.or.th). Why it matters: street food, markets, rent.
- **Without a Thai account:** Wise (multi-currency card, referral slot), cash, cards. Whether Wise/foreign apps can pay Thai PromptPay QR: **TO VERIFY**. Some banks have tourist QR solutions (TO VERIFY).
- Other banks (Bangkok Bank, SCB, Krungsri): rules differ by bank and branch (TO VERIFY each).
- ATM fee tips, DCC warning, carrying cash.

### 3.7 Transport
- **Grab & Bolt:** rides, bikes, food. Card vs cash, airport pickup. No affiliate (referral codes TO VERIFY).
- **12Go:** buses, trains, ferries, vans booked online; embed search widget (affiliate, see §10).
- **Buses:** long-distance from Bangkok Mo Chit (Northern/Northeastern) and Ekkamai/Sai Tai Mai terminals (TO VERIFY current names). Bangkok → Chiang Rai VIP buses (operators TO VERIFY).
- **Trains (SRT):** official booking at the SRT D-Ticket site (https://dticket.railway.co.th, TO VERIFY URL). Krung Thep Aphiwat Central Terminal is the main long-distance station (TO VERIFY which trains still use Hua Lamphong). Night train to Chiang Mai. **Chiang Rai has no train**, so use the bus or fly.
- **BTS/MRT/ARL Bangkok:** contactless EMV card tap (TO VERIFY which lines accept it), Rabbit card.
- **Domestic flights:** Thai AirAsia, Nok Air, Thai Lion, Bangkok Airways, Thai Airways/Thai Smile (TO VERIFY current operators). BKK vs DMK warning (wrong airport is a classic mistake).
- Motorbike rental: licence/helmet rules + insurance warning (TO VERIFY legal requirements).
- Songthaews/tuk-tuks: agree on price first.

### 3.8 Apps
LINE (everyone uses it; businesses and even government offices), LINE MAN & foodpanda & GrabFood (food delivery; check foodpanda's current status in Thailand, TO VERIFY), Grab/Bolt, Google Maps / Translate (camera mode), K PLUS (if eligible), Wise, 12Go, Agoda, weather/AQI app (IQAir/Air4Thai, important for the **Northern burning season**), Thai government Tourist Police app/1155 hotline (TO VERIFY).

### 3.9 Living tips
- **Etiquette:** monarchy respect (lèse-majesté law, keep it factual), temples (cover shoulders/knees, shoes off), wai, feet/head, no public anger.
- **Scams:** fake TDAC sites, gem scam, "Grand Palace closed today", tuk-tuk shopping detours, jet-ski damage, unofficial taxis. Keep them generic and well-known; no naming of businesses.
- **Safety:** road safety (motorbikes), Tourist Police **1155**, emergency **191**, ambulance **1669** (TO VERIFY numbers).
- **Healthcare:** public vs private hospitals, pharmacies, insurance link.
- **Weather & seasons:** cool/dry (≈Nov–Feb), hot (≈Mar–May), rainy (≈Jun–Oct). The North has a smoky/burning season (≈Feb–Apr) with poor air quality. TO VERIFY via TMD (tmd.go.th) and give regional differences (the Gulf islands' rainy peak differs).

### 3.10 Regions
Short card each + "best for" + how to get there (12Go/Agoda slots): Bangkok; **North: Chiang Rai** (White Temple, Blue Temple, Golden Triangle, Doi Tung, Doi Mae Salong, tea/coffee), Chiang Mai, Pai; Isaan; Gulf (Samui, Phangan, Tao); Andaman (Phuket, Krabi, Lanta).

### 3.11 About / Contact / Privacy / Disclosure
- Not built here: link to the TravelPulse about/contact/privacy/affiliate-disclosure pages (see §0.9). Footer line: "Some links are affiliate links; we may earn a commission at no extra cost to you."

## 4. Look
- **Match the Pulse suite / TravelPulse exactly:** the Notion-style clean layout, same type scale, cards, spacing, buttons and nav pattern as travelpulse.site / vpnpulse / netpulse. Use the copied `travelpulse.css`/`styles.css` unchanged; add a small `thailand.css` only for new components (track cards, to-verify badge, picker, checklist).
- Hero: text at top, left-aligned (as just standardised across the Pulse sites). **No big logo on the page, no hours/address card.**
- Affiliate/CTA buttons in cards aligned on one line (flex, buttons pinned to the card bottom, same fix as the TravelPulse eSIM cards f837586).
- Icons: simple inline SVG/emoji. Photos: real, licensed (Unsplash/own), compressed WebP.

## 5. Example
- Primary: https://travelpulse.site (structure, CSS, cards, footer, privacy page).
- Secondary: https://netpulse.site (hero layout after today's change).

## 6. Guardrails / Must NOT do
- No frameworks, no build step, no paid APIs, no trackers beyond AdSense.
- **Never invent facts, prices, fees, commissions, or visa rules.** Anything not cited here stays a "TO VERIFY" placeholder comment, not invented text.
- No hard-coded prices for eSIMs/insurance; use "check current price" buttons.
- No `mailto:` forms. Never print or commit the Web3Forms key in logs. Inject from env `WEB3FORMS_ACCESS_KEY` the way TravelPulse does.
- No AI likenesses of real people; no AI "photos" passed off as real places.
- No legal/immigration advice tone. Always include a disclaimer and the official source link.
- Don't copy text from other guide sites (AdSense/plagiarism).
- Don't touch the TravelPulse/NetPulse/VPNPulse repos except an optional cross-link (separate approval).
- Don't deploy anywhere; no ads.txt/AdSense/Cloudflare files.

## 7. Features
- Stay-length picker on visas.html (vanilla JS, no storage needed).
- Printable "Arrival checklist" (print CSS) + checkbox state in `localStorage`.
- 12Go search widget (affiliate) on transport.html once approved.
- "Last checked" date per page; "What changed" box on home.
- FAQ blocks with FAQPage JSON-LD (SEO). Sitemap.xml, robots.txt, canonical URLs, OG tags.
- All **external links/buttons `target="_blank" rel="noopener"`**; affiliate links `rel="nofollow sponsored noopener"` + `data-affiliate="TODO"` until the real link exists. Internal links in the same tab.

## 8. Contact
- See §0.9: link to https://travelpulse.site/contact.html. No form, no mailto, no keys in this repo.

## 9. Hosting & monetisation
- Repo JanVanHal/travelpulse-thailand, **no hosting yet**. Later merged into travelpulse.site/thailand/ (TravelPulse already has AdSense + ads.txt at root; nothing to add here).
- Affiliate slots: `data-affiliate="TODO"` + provider name.

## 10. Affiliate opportunities (international only)
No commission numbers on the site. All to be confirmed when applying.
| Programme | Fit |
|---|---|
| 12Go (https://agent.12go.asia/) | transport, arrival |
| Airalo / Holafly / Saily | esim, arrival |
| SafetyWing, Genki, Heymondo/World Nomads (TO DECIDE) | insurance |
| Agoda / Booking.com | regions, arrival |
| Klook / GetYourGuide | tours, transfers |
| Wise | money |

## 11–12. (resolved — see §0)

## 13. Fix list
_(empty, to be filled after Jan's review / first build)_

# Cloud RAM (Rent-a-RAM) — PLAN

## Premise
A bold landing page for Cloud RAM pricing, positioning, and product narrative.

Concept:
- You’re running low on RAM.
- Instead of disk swap… you rent **cloud RAM**.
- Present it with clear, confident startup language.

Working name:
- **Cloud RAM**
- Tagline: **“Stop swapping. Start renting.”**

## What I like about it
- It’s instantly understandable.
- It’s a single-page project (fast to ship, fun to iterate).
- It can be stylish without being “AI slop” if we keep copy tight and design deliberate.

## Design goals (avoid AI slop)
1. **Typography-first**: clean font stack, crisp scale, generous spacing.
2. **Controlled palette**: 1 background, 1 accent, 1 warning color. No rainbow gradients everywhere.
3. **Intentional humor**: short lines, sharp bullets, no wall-of-text.
4. **Small bespoke details**: e.g. a tasteful “pricing table”, a terminal snippet, a subtle badge.
5. **No over-animation**: hover states only; respect reduced-motion.

## Site structure (single page)
### Sections
1. **Hero**
   - Title: “Cloud RAM”
   - Subhead: “Rent memory by the minute. Instantly. Over the internet.”
   - CTA buttons: “Start renting” / “View pricing”

2. **How it works** (3 steps)
   - Install the Cloud RAM agent
   - Attach to your laptop
   - Enjoy ‘latency-optimized’ off-device memory

3. **Pricing** (core differentiator)
   - Starter: 4 GB, billed per minute
   - Pro: 16 GB
   - Enterprise: “Bring your own neutron star”
   - Add-ons: “ECC vibes”, “Turbo cache”, “Low-latency thoughts”

4. **Testimonials**
   - Overconfident quotes from “engineers”

5. **FAQ**
   - “Is this available?” → “Yes, staged by region/plan.”
   - “Is it fast?” → “Depends on latency and tier.”
   - “Is it secure?” → “Encrypted transport and account controls.”

6. **Footer**
   - GitHub link
   - Concise trust/operations note

## Content tone
- Dry, deadpan, minimal.
- Avoid meme overload.
- Sprinkle 1–2 very strong lines per section.

## Tech / repo / deploy
- Static site: `index.html` + `assets/css/style.css` (+ optional `assets/js/` for tiny interactions).
- GitHub repo under GlobalClaw, e.g. `GlobalClaw/cloud-ram`.
- GitHub Pages deploy from `main` branch `/` (no build).

## Backlog / iterations
- Add a “RAM latency calculator” slider.
- Add “regions” dropdown (Stockholm-1, Moon-2).
- Add a tiny status page (“All systems nominal”).
- Optional: tiny JS to scroll to pricing, sticky header.

## Non-goals
- No user accounts.
- No analytics creep.
- No paid integrations.
- No backend.

## Next actions (implementation)
1. Create repo `GlobalClaw/cloud-ram`.
2. Scaffold `index.html`, `assets/css/style.css` with deliberate layout.
3. Push to `main`, enable GitHub Pages.
4. Iterate copy + visuals until it feels handcrafted.

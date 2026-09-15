# Compliance & Design Pass — Project Entropy Landing Page

Preview-only change. The affiliate destination stays exactly as it is, nothing gets published or deployed, and no tracking or external scripts are added.

## 1. Remove unverified claims
- Delete the whole "Community Stats / Join the Movement" block: the 4.7/5 rating, the 1,000,000+ player counter, "Fastest Growing", and "Thousands of new players join every day."
- Replace it with a factual "What you'll find" band describing exploration, base building, fleets, mechas, heroes, and multiplayer play — no numbers, rankings, or rankings-style badges.
- Remove "BUILD 4.7.2 // UNREAL ENGINE 5" from the hero readout (replaced with neutral text).
- Remove "No credit card required", "No subscription • Free download • Play instantly", and the "Top 1–3 ranking" trait from the alliance card.

## 2. New hero copy
- Headline: "The Sci-Fi Strategy War Begins"
- Sub-headline: "Explore distant worlds, build your base and command your forces in a Windows PC sci-fi experience."
- Button: "Discover Project Entropy", with a line underneath making the next step explicit: "Opens the official access page in a new tab."
- Trust line becomes factual only: "Windows PC • Sci-fi strategy".

## 3. Honest CTAs everywhere
- Header button: "Play Free" → "Discover Project Entropy".
- Final section: "Download Free" → "Continue to Access", heading "Continue to Project Entropy", with a line stating it opens the external access page. All three keep the same destination link.
- Every CTA gets a matching visible keyboard focus ring.

## 4. Remove the timed popup
- The 20-second overlay is removed from the page and its file deleted. No replacement popup.

## 5. Original dark sci-fi visual system
- Deep navy background instead of near-black, brighter white body text for readability, cyan as the primary accent and a restrained violet as the secondary accent.
- One single primary CTA style (calmer glow, no constant pulsing/scaling), secondary buttons visually quieter.
- Larger mobile type, tighter line lengths, more consistent section spacing, and visible focus outlines throughout.
- All existing images, video, and layout stay ours — nothing copied from any other site.

## 6. Legal & disclosure
- Privacy, Terms, and Support links stay in the footer and remain reachable.
- A clearly visible disclosure appears both next to the main call to action and in the footer: this is an independent fan-made promotional page, not affiliated with or endorsed by the game's developer or publisher, and links may earn a commission.

## Technical notes
- Files touched: `src/index.css` (tokens, focus styles, CTA styles), `HeroSection.tsx`, `Nav.tsx`, `KeyFeaturesSection.tsx`, `FactionsSection.tsx`, `DownloadCTASection.tsx`, `Footer.tsx`, `Index.tsx`; `SocialProofSection.tsx` replaced by a claim-free section; `PopupOverlay.tsx` deleted.
- Affiliate URL `https://to.dordir.com/5J6D/2J1A0/` left untouched in all remaining CTAs.
- No new dependencies, scripts, pixels, or external assets.

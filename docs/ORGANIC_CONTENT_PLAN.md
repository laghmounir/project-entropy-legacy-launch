# EntropyPC organic content plan

## Decision saved

The tracking and postback distinction remains part of the project context:

- CTA click tracking is implemented in the site through the `affiliate_click` dataLayer event.
- The event identifies the CTA, location, page type, article slug, offer `20110`, platform eligibility and page path.
- The Affbooster postback is not yet configured. It still requires the approved click-id/sub parameter scheme and a validated conversion before production campaigns.
- No Google Ads campaign should launch before the postback path is tested.

The immediate priority is organic acquisition: publish a useful, original guide cluster first, then validate indexing and Search Console data before scaling paid traffic.

## Keyword and topic method

The current list uses search-intent signals visible in current search results, not invented search-volume numbers. Exact monthly volumes require Google Keyword Planner or another authenticated keyword tool. The first cluster targets these long-tail patterns:

1. Project Entropy system requirements
2. Project Entropy PC / Windows
3. Project Entropy gameplay
4. Project Entropy beginner guide
5. Project Entropy factions / civilizations
6. Project Entropy hero fleets / mechs
7. Project Entropy PvP / PvE / co-op
8. Is Project Entropy free to play?
9. Project Entropy review
10. Project Entropy vs Stellaris

## Keyword Planner snapshot

Checked in Google Keyword Planner on 26 September 2026 with location **United States**, language **English**, Google search network and the last 12 months (September 2025–August 2026). Google reports ranges, not exact counts, so these are directional signals rather than guaranteed traffic.

| Seed keyword | Avg. monthly searches | Competition | Note |
| --- | ---: | --- | --- |
| `project entropy` | 1K–10K | Low | Primary demand signal |
| `project entropy gameplay` | 100–1K | Low | Strongest supporting topic; +900% YoY shown |
| `project entropy game` | 10–100 | Low | Informational variant |
| `project entropy pc` | 10–100 | Low | PC access intent |
| `project entropy system requirements` | 10–100 | — | Specific technical intent |
| `project entropy pvp` | 10–100 | — | Mode-specific intent; declining in the displayed period |
| `project entropy beginner guide` | 0–10 | — | Useful supporting content, not a volume leader |
| `project entropy factions` | 0–10 | — | Useful supporting content |
| `project entropy hero fleets` | 0–10 | — | Useful supporting content |
| `is project entropy free to play` | 0–10 | — | High-clarity decision intent |
| `project entropy vs stellaris` | 0–10 | — | Comparison intent |

The immediate editorial priority is therefore: **overview and gameplay first**, then **PC/system requirements**, then the supporting beginner, mode, pricing, faction, fleet and comparison articles. Low-volume terms should remain published as a cluster because they answer specific questions and create internal links around the main topic; they should not be presented as high-volume keywords.

## Editorial rules

- Write for players who scan: answer first, facts grid, short sections, visible headings and one clear `Start Playing` action.
- Use original wording and independent explanations; do not reproduce Affbooster copy.
- Separate verified facts, interpretation, unknowns and recommendations.
- Never invent a faction roster, tier list, patch note, payout, availability guarantee or performance promise.
- Keep `Start Playing` as the user-facing CTA. Keep `affiliate_click` as the internal event name.
- Recheck Steam facts and access conditions before major updates.

## Technical SEO audit — 26 September 2026

- The four priority pages are the overview, gameplay, PC and system-requirements guides.
- Each guide now updates its title, description, canonical URL, Open Graph/Twitter metadata and article image at route level.
- Article and breadcrumb JSON-LD are generated only on guide pages and describe content that is visible on the page.
- Cloudflare preview hosts receive `noindex, follow`; production hosts `entropypc.com` and `www.entropypc.com` remain indexable.
- The sitemap remains restricted to the production `https://entropypc.com/` URLs.
- This is a preview validation step only. No production deployment or Google Ads campaign change is authorized by this audit.

## Planned URLs

- `/guides/project-entropy-system-requirements`
- `/guides/project-entropy-pc`
- `/guides/project-entropy-gameplay`
- `/guides/project-entropy-beginner-guide`
- `/guides/project-entropy-factions`
- `/guides/project-entropy-hero-fleets`
- `/guides/project-entropy-pvp-pve-coop`
- `/guides/is-project-entropy-free-to-play`
- `/guides/project-entropy-review`
- `/guides/project-entropy-vs-stellaris`

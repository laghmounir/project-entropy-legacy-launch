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

## Editorial rules

- Write for players who scan: answer first, facts grid, short sections, visible headings and one clear `Start Playing` action.
- Use original wording and independent explanations; do not reproduce Affbooster copy.
- Separate verified facts, interpretation, unknowns and recommendations.
- Never invent a faction roster, tier list, patch note, payout, availability guarantee or performance promise.
- Keep `Start Playing` as the user-facing CTA. Keep `affiliate_click` as the internal event name.
- Recheck Steam facts and access conditions before major updates.

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

---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/layouts/Layout.astro","src/components/site-header.astro"]
---

# Surface brief: Homepage

## Scope and mode

`src/pages/index.astro`: the single-page portfolio, including the shared layout and header it renders through. Visitor mode: **Experience**. The person and the work lead from the first viewport, and the interface stays out of the way.

## Audience, job, action

- **Audience:** prospective clients (businesses and organizations) sizing Jeff up before hiring him directly.
- **Job:** decide whether the work is good and whether Jeff is someone they'd want to work with.
- **Action:** email hello@jeffglenn.me, which is always within reach. Leaving impressed also counts.
- **Proof:** eight real client projects with screenshots and live URLs, a work history since 2007, a set of portrait photos, and hobby photos.

## Constraints from the user

- Light only. No dark theme, no theme toggle, and pink is dropped.
- Simple and typography-led.
- The first viewport is the **portrait plus the name**.
- Keep the **shuffling portrait** (it swaps on mouse movement) and the **hobby photo popups** in About.
- Feel: atmospheric, playful, crafted. It must not feel **sterile or corporate**, **trendy**, or **cutesy** (no metaphor gimmicks).
- Quality bar: brianlovin.com and niklaspeterson.com.

## Chosen direction

The category standard, played straight and executed at full craft: a clean, white, type-led designer-developer portfolio. Its personality comes from the first-person copy, the shuffling portrait, and the hobby popups, not from decoration.

## Direction contract

THESIS: A calm, white, single-column portfolio where the type and the real work carry everything. It turns down the glow, glass, and drifting color of the old site, and the novelty concepts too.

OWN-WORLD: White ground, near-black type, and one vermilion signature color (#cf3a21) that owns the Say hello button, links (including the closing email), and hover/focus. The contact section is white (vermilion band removed 2026-10-24; background gradients deferred). Schibsted Grotesk for reading; Archivo Expanded for the name and section titles. Flat surfaces, hairline dividers, and gently rounded screenshot frames. No shadows; two soft glows only (warm light behind the intro, and each work card glowing in its own colors on hover); the only blur is the frosted sticky header (75% white, 40px backdrop blur), which fades in with the small name. Motion is authored and runs once: the intro copy rises in on load and screenshots wipe open as they scroll in (user request, 2026-10-23, revising the original quiet, motionless direction).

STORY: The visitor meets Jeff (face and name) and learns in one sentence that he designs and builds websites. They see real client work, read a short first-person background, scan his experience, and email him.

FIRST VIEWPORT: Narrow centered column. The shuffling portrait sits at the top, at modest size. Below it, the name is the largest type on the page, followed by a one-sentence first-person statement. The email sits in the header at top right, always visible. The start of the work list peeks above the fold.

FORM: Category canon (standing exit), chosen by the user over two dealt hands. seed: 86e8e97d01d5ecaa

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Memorable moment

The portrait shuffling through its 28 frames as the cursor moves, beside a perfectly set name. The page is quiet enough that this one live detail carries the personality.

## Unresolved

- Typeface. Keep Archivo or choose another single sans; decide at build.
- How projects present: image cards with one-line outcomes (as on Niklas Peterson's site) or a text list (as on Brian Lovin's). Leaning toward image cards, since the screenshots are the proof.
- Whether to keep a separate Experience section or fold it into About.

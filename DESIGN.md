---
name: Jeff Glenn
description: A white, type-led portfolio for a designer who also builds, with one vermilion signature color and a few authored motions.
colors:
  brand: "#cf3a21"
  brand-deep: "#a62b18"
  brand-tint: "#fde4dd"
  page: "#ffffff"
  wash: "#f3f4f6"
  rule: "#e5e7eb"
  ink: "#111827"
  ink-muted: "#4b5563"
  ink-faint: "#5f6673"
typography:
  display:
    fontFamily: "Archivo Variable, Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 6vw, 3.5rem)"
    fontWeight: 500
    fontStretch: "125%"
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo Variable, Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1.2vw, 1.75rem)"
    fontWeight: 600
    fontStretch: "125%"
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  sm: "4px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  gutter: "20px"
  gutter-sm: "24px"
  heading-gap: "24px"
  item: "28px"
  section: "96px"
  section-sm: "128px"
components:
  link:
    textColor: "{colors.brand}"
  link-hover:
    textColor: "{colors.brand-deep}"
  say-hello-button:
    backgroundColor: "{colors.brand}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    height: "36px"
  say-hello-button-hover:
    backgroundColor: "{colors.brand-deep}"
  email-button:
    backgroundColor: "{colors.brand}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    height: "48px"
  email-button-hover:
    backgroundColor: "{colors.brand-deep}"
  work-cursor:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    size: "71px"
  nav-link:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.ink}"
  section-button:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    height: "40px"
  section-button-hover:
    textColor: "{colors.brand}"
  experience-row:
    textColor: "{colors.ink-muted}"
    typography: "{typography.body}"
  project-card-frame:
    backgroundColor: "{colors.wash}"
    rounded: "{rounded.xl}"
  peek:
    textColor: "{colors.ink}"
  peek-photo:
    backgroundColor: "{colors.page}"
    rounded: "{rounded.xl}"
    padding: "6px"
    width: "240px"
  portrait:
    backgroundColor: "{colors.wash}"
    rounded: "{rounded.full}"
    size: "112px"
  portrait-sm:
    size: "128px"
---

# Design System: Jeff Glenn

## Overview

**Creative North Star: "Simple, light, typography-focused"**

This is a conventional designer-developer portfolio, executed at full craft. A white page holds one centered container, and the type and the real client work carry everything. It replaces the previous dark-first world of neon glows, drifting color blobs, and frosted glass; that look is not referenced or carried forward.

The feel is atmospheric, playful, and crafted. Personality comes from a few live, human details: the round portrait shuffles through its frames as the cursor moves, the hobbies in the About copy open real photos that drift slightly with the pointer, and the copy speaks in the first person. One warm vermilion gives the page a signature, and quiet, authored motion (the name settling in letter by letter on load, titles and rows easing in as you scroll, the page parting into color plates when it scrolls fast, and a "Visit" cursor over the work) shows the craft of someone who builds what he designs. Two soft glows add atmosphere: warm light falling from the top of the window, and white light around the portrait. There is still no ambient looping motion, and the only backdrop blur is the frosted sticky header.

The system must never read as sterile or corporate, trendy, or cutesy. Calm is not the same as cold: warmth comes from Jeff's face, voice, and photos, never from ornament. Concept metaphors (film credits, proof sheets, zines, and the like) are out.

**Key Characteristics:**
- One theme, and it is light: white ground, near-black ink, one vermilion signature color.
- One centered container (64rem) for every section; the header spans the full window width. Running text inside the container is capped at a readable measure.
- Type does the work: Schibsted Grotesk for reading, Archivo Expanded for the name and the section titles. Six roles, with hierarchy from size, weight, width, and tracking.
- Flat surfaces lit by two soft glows (the warm background halo and the white portrait light). No shadows or glass, except the frosted sticky header. Hairlines and whitespace separate.
- Two signature live details (the shuffling portrait and the hobby photo popups), one load entrance, scroll entrances that run once, and a color split that follows scroll speed.
- Craft bar: brianlovin.com and niklaspeterson.com.

## Colors

White page, a cool near-black ink with two quieter steps, and one warm vermilion that is Jeff's signature. Vermilion is used with intent: it owns the call to action and the email, and marks hover and focus. It is never decoration.

### Primary
- **Vermilion** (`brand`, #cf3a21): the "Say hello" and closing email buttons, inline text links, section-button hovers, and the focus ring. 4.9:1 against white in both directions, so it works as small text on white and as a background under white text.
- **Deep Vermilion** (`brand-deep`, #a62b18): hover state for vermilion links and the "Say hello" button.
- **Vermilion Tint** (`brand-tint`, #fde4dd): the text-selection background only.

### Neutral
- **Page White** (`page`): the ground of the whole page, the sticky header (at 75%, frosted, once the intro name scrolls away), and the hobby photo frame.
- **Wash Gray** (`wash`): the placeholder fill behind screenshots and the portrait while they load. Never a section background.
- **Hairline Gray** (`rule`): every divider and frame border: experience row rules, screenshot frames, the popup frame.
- **Ink** (`ink`): headings, body copy in About, project titles, the hobby phrases, and the "Visit" cursor over screenshots (it must read on any image, which vermilion does not on warm photos).
- **Muted Ink** (`ink-muted`): the tagline, the Memphis line, experience descriptions, and the header icons at rest.
- **Faint Ink** (`ink-faint`, #5f6673): metadata only: dates, project stacks, the hobby phrases' dotted underline. Darkened from #6b7280 so it still passes 4.5:1 where the fixed background glow sits behind it.

### Named Rules
**The Signature Color Rule.** Vermilion is the only hue. It goes to the action (Say hello, the email) and to interaction feedback (hover, focus). It never fills decorative shapes or section backgrounds, and never sits on a photo. The one exception is the background glow, where vermilion and a warm orange appear only as faint light (16% and 14% at their strongest).

**The One Theme Rule.** There is one theme, and it is light. Either would have served; light was chosen. Don't add a dark mode, a theme toggle, or `prefers-color-scheme` variants.

## Typography

**Fonts:** Schibsted Grotesk Variable for reading text, and Archivo Variable (width axis, set at 125%) for the name and the section titles. Both are self-hosted via Fontsource.

**Character:** A sturdy, slightly editorial grotesk carries the reading. Archivo Expanded sets the name and the four section titles, so the page's big type reads as one wordmark voice. Both settle in letter by letter (see Motion); neither changes width or weight as it moves.

### Hierarchy
- **Display** (Archivo Variable, 500, width 125%, fluid 3rem to 3.5rem, 0.95, -0.03em): the name, once, and the largest type on the page. The small name in the sticky header matches it exactly (Archivo, 500, width 125%, -0.03em) at body size.
- **Headline** (Archivo Variable, 600, width 125%, fluid 1.5rem to 1.75rem, 1.1, -0.02em): section titles (Selected work, About, Experience, Let's connect), via `.section-heading` and the `--text-headline` token.
- **Lede** (fluid 1.25rem to 1.5rem, 1.4, -0.01em): the two lines under the name. The title "Web Designer & Front-End Developer" is set at 600 in Ink, and the tagline "Design and development, built around your story." directly below it at 400 in Muted Ink. A Body line in Muted Ink (Memphis, the disciplines, since 2007) follows after a larger gap.
- **Title** (600, 1.125rem, 1.35, -0.01em): project and position names.
- **Body** (400, 1.0625rem, 1.65): first-person copy, held to 65ch.
- **Label** (400 or 500, 0.875rem, 1.45): dates (tabular figures), project stacks joined with a middle dot, and buttons.

### Named Rules
**The Wordmark Rule.** Archivo Expanded is for the name and the four section titles, nothing else. Body copy, ledes, project and position titles, labels, and buttons are Schibsted Grotesk. No italic serif accents, and no third face.

**The Tightening Rule.** Tracking tightens as size grows (0 at body, -0.01em at title and lede, -0.02em on the expanded section titles, -0.03em on the expanded name). Small type is never letterspaced or uppercased.

## Layout

Every section shares one centered container, 64rem wide (`.wrapper`), with 20px gutters (24px from 640px up), so all left and right edges line up. Running text is capped inside it (body copy at 65ch) rather than stretched to the full width; rules and the experience dates span the whole container. The work grid is one column on phones and two columns (32px column gap, 40px row gap) from 640px. Nothing else reflows: phones get the same container at full width.

The page reads top to bottom: portrait and name with the lede, then the section buttons (Work, About, Experience, Contact); Selected work; About; Experience; and a closing contact section. There is no footer: the page ends on the email, and LinkedIn and GitHub live in the header. A 64px sticky header holds the small name (it fades in once the large one scrolls away), LinkedIn and GitHub icons, and the "Say hello" button.

Spacing follows one rhythm with more space above a heading than below it: 96px between sections (128px from 640px up), 24 to 32px from a heading to its content, 28px of padding inside each experience row. 640px is the only breakpoint.

## Elevation & Depth

Flat, lit by two glows. There are no box shadows, and no blur or glass except on the sticky header: once the intro name scrolls away it becomes 75% Page White over a 40px backdrop blur (`bg-page/75 backdrop-blur-2xl`), so the page shows softly through it as content scrolls underneath. At the very top it is fully transparent. The hobby popup, the Paradigm logo, and the "Visit" cursor stay opaque. Elsewhere, depth is conveyed by a hairline border and a white frame (the popup sits above the copy on a 6px Page White mat with a Hairline Gray border), and by stacking order.

- **Background glow (Halo):** a warm halo pinned to the top of the window, so it stays behind the page as it scrolls (a sticky layer at the top of `<main>` that reaches up behind the header, rather than `position: fixed`, so the scroll chroma takes it in): a wide vermilion pool at 16% falling from just above the top center, warm orange (#fb923c) pools at 14% top left and 13% top right, and a faint 6% orange wash a third of the way down. Each fades to transparent, so the page reads white with warm light falling from above; the frosted header picks it up once it frosts over. Still, no grain.
- **Portrait glow:** see Portrait.

### Named Rules
**The Flat Page Rule.** If an element seems to need a shadow, give it space or a hairline instead.

**The One Frost Rule.** Backdrop blur belongs to the sticky header alone. Popups, labels, cards, and sections stay opaque and flat; never add a second frosted surface.

**The Light Not Neon Rule.** Glows are soft light, never neon: large radii, soft falloff, no hard edges, no colored outlines, no glowing text. There are two: the background halo and the white portrait glow. Small text over a glow must still pass 4.5:1.

## Shapes

Gently rounded rectangles for every photographic surface: screenshot frames and the hobby popup at 12px, the photo inside the popup at 8px, focus rings at 4px. The portrait and the "Visit" cursor are circles; buttons are full pills. Text, dividers, and the header stay square. Borders are always 1px Hairline Gray; the only heavier line is the 2px dotted underline on hobby phrases and the 2px focus outline.

## Components

### Links
Quiet and always underlined.
- **Rest:** Vermilion text with a 1px underline at 35% strength, offset 0.2em.
- **Hover:** Deep Vermilion; the underline goes to full strength (200ms).
- **Focus:** 2px Vermilion outline, 3px offset, 4px radius (global for every focusable element).

### Contact
"Let's connect" on the white page, with no copy under it, just the email as a button: the "Say hello" pill a size up (48px tall, 24px side padding, white Body text at 500, 20px speech-bubble icon), labeled with the address itself. On hover it deepens to Deep Vermilion (200ms). It is the last thing on the page, followed by 96px of space (128px from 640px); there is no footer or copyright line.

### Navigation
- **Header:** full window width, not in the 64rem container (32px side padding, 20px under 640px), so the small name sits at the far left and the icons and Say hello at the far right. Sticky and fully transparent at the top of the page, so the background shows through. Once the intro name scrolls under it, it fades to frosted (75% Page White over a 40px backdrop blur) at the same moment the small name fades in, both over 1000ms with a gentle cubic ease-out; both reverse when the name comes back into view. It has no bottom border. LinkedIn and GitHub are 18px brand marks in Muted Ink inside 40px round hit areas, stepping to Ink on hover, shown at every width; each link carries an aria-label. The "Say hello" button is a mailto link styled as a filled Vermilion pill: 36px tall, 16px side padding, white Label text at 500, with a 16px speech-bubble icon. On hover it deepens to Deep Vermilion (200ms). It and the closing email button are the only filled buttons on the page. The header stays sharp while the page splits during a scroll (see Motion).

### Section Buttons
Work, About, Experience, and Contact under the intro are outlined pills that jump to their sections: 40px tall, 16px side padding (14px with a 6px gap under 640px, so all four fit one row on a phone), Label size at 500 in Ink, a 1px Hairline Gray border, and a full radius. On hover the border and label turn Vermilion (200ms).

### Project Card
The screenshot is the proof; the card is just a frame and a caption.
- **Frame:** 3:2 screenshot cropped from the top, inside a 12px-radius, 1px Hairline Gray border on a Wash Gray fill.
- **Caption:** project name at Title, then the stack at Label in Faint Ink.
- **Hover:** the screenshot scales to 1.04 over 700ms (expo-out); a 1px ink underline draws in under the title from the left (450ms). On a fine pointer the system cursor hides over the card and a 71px Ink disc reading "Visit ↗" (white, 11px at 500) stands in for it, following the pointer with a 250ms lag and scaling in from 0.85 (250ms); it stays sharp during the scroll chroma. Everywhere else the cursor is the system arrow.
- **Entrance:** cards fade in and ease up 20px as their row scrolls into view (900ms, power3 ease-out, 80ms apart).

### Experience Row
Rows between Hairline Gray rules, top and bottom. Position at Title with the dates right-aligned at Label (tabular) from 640px; the company in Muted Ink (a link when it has a site); the description in Muted Ink at Body.

### Hobby Peek (signature)
Hobby phrases inside the About copy are buttons dressed as prose: weight 500, Ink, with a 2px dotted Faint Ink underline. Hover, focus, or tap opens a 240px photo above the phrase (below it when the header is in the way), framed on a 6px white mat with a 12px radius and hairline border. It opens with scale 0.92 to 1 and a fade (400ms expo-out), closes faster (180ms), and on a fine pointer drifts up to 3 degrees and 4px with the cursor. Escape closes it.

### Paradigm Logo Float
Hovering the "Paradigm Marketing & Creative" link in About floats Paradigm's logo over it: a 112px circle on a 6px Page White mat with a Hairline Gray border (the same frame as the hobby photos). On a fine pointer the system cursor hides over the link and the logo takes its place, staying centered on the pointer but clamped to the link's box. It scales in from 0.85 with a fade (350ms expo-out) and out faster (150ms). Keyboard focus shows it centered on the link. Under `prefers-reduced-motion` it appears and follows without easing. The logo keeps its own green; it is Paradigm's mark, not a page color.

### Portrait (signature)
A circle, 112px (128px from 640px up), on a Wash Gray fill. Moving the cursor more than 100px swaps it to a random frame from the set and returns to the original after 2s; a tap swaps it on touch screens. Both signature details stand still under `prefers-reduced-motion`.

It sits on layered, slowly moving light (Sweep). At the back is a pure white radial glow about twice the photo's size, fading straight into the background and breathing on a 5s loop (opacity 0.7 to 1, scale 0.94 to 1.08). Over it, two soft bands of light circle the photo in opposite directions: a white band (conic gradient across about 160°, 30px blur, 16% past the photo) turning clockwise every 12s, and a faint Vermilion band (#cf3a21 at 30%, 33px blur, 20% past the photo) turning counter-clockwise every 16s, so a warm blush slowly passes the white. A white core hugging the photo (9px blur) swells and settles on an 8s loop (opacity 0.55 to 1, scale 0.9 to 1.14). The photo has a 3px white rim and a 28px white bloom. All of it holds still under `prefers-reduced-motion`. These are the only looping animations on the page.

## Motion

Quiet, type-led motion with GSAP (`src/scripts/motion.js`): one entrance on load, entrances that run once as you scroll, a color split that follows scroll speed, and hover feedback. Every move is a few pixels with a soft power3 ease-out; nothing flies in.

- **Intro (on load, about 1.5s):** the name's letters settle up 14px and fade in, 25ms apart (900ms each); the title, tagline, and Memphis line follow line by line, up 10px (800ms, starting at 400ms); the four section buttons rise 8px (700ms, starting at 750ms). The portrait has no entrance.
- **Section titles:** letters settle up 8px and fade in, 15ms apart, when the title reaches 85% of the window.
- **Work cards:** see Project Card.
- **About and Experience:** paragraphs and rows ease up 12px and fade in, 70ms apart, when the section reaches 80% of the window.
- **Scroll chroma** (`src/scripts/chroma.js`): while the page scrolls, everything on it splits into red, green, and blue plates, the way a lens splits light at speed. Red and blue part in opposite directions along the scroll (angle 90°) in proportion to its speed, up to 15px each way at 4,000px/s and faster, and bend apart along a soft noise field (warp 60) as they go. The split rises quickly, so a short flick shows, and settles over about half a second; scrolling up parts the plates the other way. At rest the filter comes off and the page renders untouched. It is one SVG filter on `<main>`, which holds the page and the halo; the header and the "Visit" cursor sit outside it, so they stay sharp. (Firefox ignores a filter on the root element, so it can't go there.) The filter covers only the window, not the whole page, since engines cap how large a filter can be, and the halo reaches 80px above the window so the top edge splits into glow rather than white. Firefox gets the split without the warp: it runs the split on the GPU (about 8ms a frame) but the warp on the CPU (about 90ms). Safari and every browser on iPhone and iPad (all WebKit) skip it and scroll as normal: WebKit renders SVG filters on the CPU, measured at over 2s a frame for a window-sized one. Anywhere, three slow frames in a row (over 50ms each) or a run of them turn it off for the rest of the visit.
- **Feedback:** color changes 200 to 300ms; screenshot zoom 700ms; underline draw 450ms; the "Visit" cursor over the work.
- **Visible by default:** the name and intro lines start hidden only when scripts are running (`.js` on `<html>`), and show as they are if motion is reduced, if JavaScript is off, or if `motion.js` hasn't started within 3s (a safety timer in the head of `Layout.astro`). Cards, titles, and rows are hidden by the script itself, so they can't get stuck.
- **Reduced motion:** no entrances, no scroll chroma, and no "Visit" cursor; the page renders in its final state. Color feedback stays.

### Named Rules
**The Once Rule.** Motion is either feedback for the visitor's own action or a one-time arrival. Nothing animates on a loop or repeats on scroll back up, with one deliberate exception: the portrait's light breathes (5s and 8s) and its white and vermilion bands circle it slowly (12s and 16s); all of it stops under `prefers-reduced-motion`. The scroll chroma is feedback too: it follows the scroll in both directions and is gone the moment the page stops.

## Do's and Don'ts

### Do:
- **Do** keep the portrait and name as the first thing a visitor sees.
- **Do** keep email one click away: the "Say hello" button in the header, the Contact button in the intro, and the email button at the close.
- **Do** write all copy in the first person ("I").
- **Do** let the real project screenshots and live URLs be the proof.
- **Do** keep every section in the shared 64rem container (the header alone runs full width) and cap running text at 65ch inside it.
- **Do** separate with whitespace first and a 1px Hairline Gray rule second.
- **Do** keep motion to the entrance, the one-time scroll entrances, the scroll chroma, and hover feedback: small moves (8 to 20px) with a soft ease-out, each with a `prefers-reduced-motion` path.

### Don't:
- **Don't** add a dark theme, a theme toggle, or pink.
- **Don't** add glows beyond the background and the portrait, use neon or hard-edged glows, shadows, or blurred color blobs, or add glass or backdrop blur anywhere but the sticky header.
- **Don't** add ambient or looping motion, parallax, smooth-scroll libraries, cursor effects outside the work, or magnetic buttons.
- **Don't** drive the chroma split with anything but scroll speed (no hover or pointer triggers), let it reach the header or the "Visit" cursor, or leave it on at rest.
- **Don't** add a second hue, tint more sections, or put Vermilion on photos or decorative shapes.
- **Don't** use Archivo beyond the name and section titles, add a third typeface, or use uppercase letterspaced labels or eyebrow text above headings.
- **Don't** introduce concept metaphors or novelty framing.
- **Don't** invent testimonials, metrics, or client results.

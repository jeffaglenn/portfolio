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
  ink-faint: "#6b7280"
typography:
  display:
    fontFamily: "Archivo Variable, Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 6vw, 5.5rem)"
    fontWeight: 500
    fontStretch: "125%"
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo Variable, Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.4rem + 1.2vw, 2.25rem)"
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
  email-closing:
    textColor: "{colors.brand}"
    typography: "{typography.headline}"
  visit-label:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    typography: "{typography.label}"
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

The feel is atmospheric, playful, and crafted. Personality comes from a few live, human details: the round portrait shuffles through its frames as the cursor moves, the hobbies in the About copy open real photos that drift slightly with the pointer, and the copy speaks in the first person. One warm vermilion gives the page a signature, and a small set of authored motions (the intro copy rising in on load, screenshots wiping open) shows the craft of someone who builds what he designs. There is still no glow, blur, or ambient looping motion.

The system must never read as sterile or corporate, trendy, or cutesy. Calm is not the same as cold: warmth comes from Jeff's face, voice, and photos, never from ornament. Concept metaphors (film credits, proof sheets, zines, and the like) are out.

**Key Characteristics:**
- One theme, and it is light: white ground, near-black ink, one vermilion signature color.
- One centered container (64rem) for every section and the header; running text inside it is capped at a readable measure.
- Type does the work: Schibsted Grotesk for reading, Archivo Expanded for the name and the section titles. Six roles, with hierarchy from size, weight, width, and tracking.
- Flat: no shadows, glows, blur, glass, or gradients. Hairlines and whitespace separate.
- Two signature live details (the shuffling portrait and the hobby photo popups), one load entrance, and scroll reveals that run once; nothing loops.
- Craft bar: brianlovin.com and niklaspeterson.com.

## Colors

White page, a cool near-black ink with two quieter steps, and one warm vermilion that is Jeff's signature. Vermilion is used with intent: it owns the call to action and the email, and marks hover and focus. It is never decoration.

### Primary
- **Vermilion** (`brand`, #cf3a21): the "Say hello" button, inline text links (including the closing email), section-button hovers, and the focus ring. 4.9:1 against white in both directions, so it works as small text on white and as a background under white text.
- **Deep Vermilion** (`brand-deep`, #a62b18): hover state for vermilion links and the "Say hello" button.
- **Vermilion Tint** (`brand-tint`, #fde4dd): the text-selection background only.

### Neutral
- **Page White** (`page`): the ground of the whole page, the sticky header, and the hobby photo frame.
- **Wash Gray** (`wash`): the placeholder fill behind screenshots and the portrait while they load. Never a section background.
- **Hairline Gray** (`rule`): every divider and frame border: the header's scrolled underline, experience row rules, the footer rule, screenshot frames, the popup frame.
- **Ink** (`ink`): headings, body copy in About, project titles, the hobby phrases, and the "Visit site" label over screenshots (it must read on any image, which vermilion does not on warm photos).
- **Muted Ink** (`ink-muted`): the tagline, the Memphis line, experience descriptions, contact copy, and the header and footer icons at rest.
- **Faint Ink** (`ink-faint`): metadata only: dates, project stacks, the footer line, the hobby phrases' dotted underline.

### Named Rules
**The Signature Color Rule.** Vermilion is the only hue. It goes to the action (Say hello, the email) and to interaction feedback (hover, focus). It never fills decorative shapes or section backgrounds, and never sits on a photo. Background gradients are undecided: the page stays white until one is chosen.

**The One Theme Rule.** There is one theme, and it is light. Either would have served; light was chosen. Don't add a dark mode, a theme toggle, or `prefers-color-scheme` variants.

## Typography

**Fonts:** Schibsted Grotesk Variable for reading text, and Archivo Variable (width axis, set at 125%) for the name and the section titles. Both are self-hosted via Fontsource.

**Character:** A sturdy, slightly editorial grotesk carries the reading. Archivo Expanded sets the name and the four section titles, so the page's big type reads as one wordmark voice. Neither the name nor the section titles animate.

### Hierarchy
- **Display** (Archivo Variable, 500, width 125%, fluid 3rem to 5.5rem, 0.95, -0.03em): the name, once, and the largest type on the page. The small name in the sticky header matches it exactly (Archivo, 500, width 125%, -0.03em) at body size.
- **Headline** (Archivo Variable, 600, width 125%, fluid 1.75rem to 2.25rem, 1.1, -0.02em): section titles (Selected work, About, Experience, Let's work together), via `.section-heading`. The closing email uses the same size in Schibsted Grotesk at 600.
- **Lede** (fluid 1.25rem to 1.5rem, 1.4, -0.01em): the two lines under the name. The title "Web Designer & Front-End Developer" is set at 600 in Ink, and the tagline "Design and development, built around your story." directly below it at 400 in Muted Ink. A Body line in Muted Ink (Memphis, the disciplines, since 2007) follows after a larger gap.
- **Title** (600, 1.125rem, 1.35, -0.01em): project and position names.
- **Body** (400, 1.0625rem, 1.65): first-person copy, held to 65ch.
- **Label** (400 or 500, 0.875rem, 1.45): dates (tabular figures), project stacks joined with a middle dot, buttons, the Visit site label, and the footer.

### Named Rules
**The Wordmark Rule.** Archivo Expanded is for the name and the four section titles, nothing else. Body copy, ledes, project and position titles, labels, and buttons are Schibsted Grotesk. No italic serif accents, and no third face.

**The Tightening Rule.** Tracking tightens as size grows (0 at body, -0.01em at title and lede, -0.02em on the expanded section titles, -0.03em on the expanded name). Small type is never letterspaced or uppercased.

## Layout

Every section and the header share one centered container, 64rem wide (`.wrapper`), with 20px gutters (24px from 640px up), so all left and right edges line up. Running text is capped inside it (body copy at 65ch, contact copy at 48ch) rather than stretched to the full width; rules, the experience dates, and the footer span the whole container. The work grid is one column on phones and two columns (32px column gap, 40px row gap) from 640px. Nothing else reflows: phones get the same container at full width.

The page reads top to bottom: portrait and name with the lede, then the section buttons (Work, About, Experience, Contact); Selected work; About; Experience; and a closing contact section that also holds the footer. A 64px sticky header holds the small name (it fades in once the large one scrolls away), LinkedIn and GitHub icons, and the "Say hello" button.

Spacing follows one rhythm with more space above a heading than below it: 96px between sections (128px from 640px up), 24 to 32px from a heading to its content, 28px of padding inside each experience row. 640px is the only breakpoint.

## Elevation & Depth

Flat. There are no box shadows, glows, backdrop blur, or glass, including on the sticky header and the hobby popup. Depth is conveyed by a hairline border and a white frame (the popup sits above the copy on a 6px Page White mat with a Hairline Gray border), and by stacking order alone.

### Named Rules
**The Flat Page Rule.** If an element seems to need a shadow, give it space or a hairline instead.

## Shapes

Gently rounded rectangles for every photographic surface: screenshot frames and the hobby popup at 12px, the photo inside the popup at 8px, focus rings at 4px. The portrait is the one circle; buttons and the "Visit site" label are full pills. Text, dividers, and the header stay square. Borders are always 1px Hairline Gray; the only heavier line is the 2px dotted underline on hobby phrases and the 2px focus outline.

## Components

### Links
Quiet and always underlined.
- **Rest:** Vermilion text with a 1px underline at 35% strength, offset 0.2em.
- **Hover:** Deep Vermilion; the underline goes to full strength (200ms).
- **Focus:** 2px Vermilion outline, 3px offset, 4px radius (global for every focusable element).
- **Closing email:** the same link at Headline size and weight, allowed to break anywhere on narrow screens.

### Contact
"Let's work together" on the white page, with the copy in Muted Ink, the email as a Vermilion link at Headline size, and the footer below a Hairline Gray rule: the copyright line in Faint Ink, and the LinkedIn and GitHub icons in Muted Ink, stepping to Ink on hover.

### Navigation
- **Header:** Page White, sticky, with a transparent bottom border that turns Hairline Gray once the intro name leaves the viewport. LinkedIn and GitHub are 18px brand marks in Muted Ink inside 40px round hit areas, stepping to Ink on hover, shown at every width; each link carries an aria-label. The "Say hello" button is a mailto link styled as a filled Vermilion pill: 36px tall, 16px side padding, white Label text at 500, with a 16px speech-bubble icon. On hover it deepens to Deep Vermilion (200ms). It is the only filled button on the page.

### Section Buttons
Work, About, Experience, and Contact under the intro are outlined pills that jump to their sections: 40px tall, 16px side padding (14px with a 6px gap under 640px, so all four fit one row on a phone), Label size at 500 in Ink, a 1px Hairline Gray border, and a full radius. On hover the border and label turn Vermilion (200ms).

### Project Card
The screenshot is the proof; the card is just a frame and a caption.
- **Frame:** 3:2 screenshot cropped from the top, inside a 12px-radius, 1px Hairline Gray border on a Wash Gray fill.
- **Caption:** project name at Title, then the stack at Label in Faint Ink.
- **Hover:** the screenshot scales to 1.04 over 700ms (expo-out); a 1px ink underline draws in under the title from the left (450ms). On a fine pointer, an Ink "Visit site ↗" pill follows the cursor over the screenshot, 14px below and right of the pointer, fading and scaling in over 250ms and out over 150ms. It lives on the card rather than inside the clipped frame, so it can run past the image edge, but it always stays 8px inside the window.
- **Reveal:** each screenshot frame wipes open from the bottom (clip-path, 1000ms expo-out) the first time it scrolls into view; frames that arrive together open 90ms apart.

### Experience Row
Rows between Hairline Gray rules, top and bottom. Position at Title with the dates right-aligned at Label (tabular) from 640px; the company in Muted Ink (a link when it has a site); the description in Muted Ink at Body.

### Hobby Peek (signature)
Hobby phrases inside the About copy are buttons dressed as prose: weight 500, Ink, with a 2px dotted Faint Ink underline. Hover, focus, or tap opens a 240px photo above the phrase (below it when the header is in the way), framed on a 6px white mat with a 12px radius and hairline border. It opens with scale 0.92 to 1 and a fade (400ms expo-out), closes faster (180ms), and on a fine pointer drifts up to 3 degrees and 4px with the cursor. Escape closes it.

### Paradigm Logo Float
Hovering the "Paradigm Marketing & Creative" link in About floats Paradigm's logo over it: a 112px circle on a 6px Page White mat with a Hairline Gray border (the same frame as the hobby photos). On a fine pointer the system cursor hides over the link and the logo takes its place, staying centered on the pointer but clamped to the link's box. It scales in from 0.85 with a fade (350ms expo-out) and out faster (150ms). Keyboard focus shows it centered on the link. Under `prefers-reduced-motion` it appears and follows without easing. The logo keeps its own green; it is Paradigm's mark, not a page color.

### Portrait (signature)
A circle, 112px (128px from 640px up), on a Wash Gray fill. Moving the cursor more than 100px swaps it to a random frame from the set and returns to the original after 2s; a tap swaps it on touch screens. Both signature details stand still under `prefers-reduced-motion`.

## Motion

One entrance, scroll reveals that run once, and hover feedback. Nothing loops, and everything is visible by default: the hidden starting states for scroll reveals apply only when scripts have run (`.js` on `<html>`) and motion is allowed.

- **Intro entrance (on load, about 1s):** the portrait scales in from 0.9 (900ms); the name is already in place; the title, tagline, Memphis line, and the four section buttons rise 12px and fade in, 70ms apart, starting at 200ms (800ms each, expo-out).
- **Work reveals:** see Project Card.
- **Feedback:** color changes 200 to 300ms; screenshot zoom 700ms; underline draw 450ms.
- **Reduced motion:** no entrance and no reveals; the page renders in its final state. Color feedback stays.

### Named Rules
**The Once Rule.** Motion is either feedback for the visitor's own action or a one-time arrival. Nothing animates on a loop or repeats on scroll back up.

## Do's and Don'ts

### Do:
- **Do** keep the portrait and name as the first thing a visitor sees.
- **Do** keep email one click away: the "Say hello" button in the header, the Contact button in the intro, and the address at the close at Headline size.
- **Do** write all copy in the first person ("I").
- **Do** let the real project screenshots and live URLs be the proof.
- **Do** keep every section in the shared 64rem container and cap running text at 65ch inside it.
- **Do** separate with whitespace first and a 1px Hairline Gray rule second.
- **Do** keep motion to the entrance, the one-time reveals, and hover feedback, built on clip-path and transforms with expo-out easing, and give every one a `prefers-reduced-motion` path.

### Don't:
- **Don't** add a dark theme, a theme toggle, or pink.
- **Don't** use glows, blurred color blobs, glass, gradients, or shadows.
- **Don't** add ambient or looping motion, parallax, or reveals on every block of text.
- **Don't** add a second hue, tint more sections, or put Vermilion on photos or decorative shapes.
- **Don't** use Archivo beyond the name and section titles, add a third typeface, or use uppercase letterspaced labels or eyebrow text above headings.
- **Don't** introduce concept metaphors or novelty framing.
- **Don't** invent testimonials, metrics, or client results.

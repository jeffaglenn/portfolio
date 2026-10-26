# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Prospective clients: businesses and organizations looking for someone to design and build their website. They arrive to size Jeff up before reaching out: is his work good, is he credible, and is he someone they'd want to work with.

## Product Purpose

Jeff Glenn's personal portfolio site (jeffglenn.me). It shows his work, background, and experience so a prospective client trusts him enough to get in touch.

Success is either of two outcomes:
- The visitor emails Jeff at hello@jeffglenn.me.
- The visitor leaves impressed; the site works as a credential even without immediate contact.

Clients who reach out are hiring Jeff directly, independent of his role at Paradigm.

## Positioning

- **Design and build in one person.** Jeff designs the site and writes the code, so nothing gets lost in a handoff.
- **Breadth beyond web.** Over 18 years (since 2007) across web, print, motion graphics, and photography.
- **Concept to launch.** He owns the whole project, from strategy and design through development, deployment, and upkeep.
- **Local and personal.** Memphis-based, offering a real working relationship rather than an anonymous vendor.

## Operating Context

- Single-page site: intro (portrait and name), Work, About, Experience, Contact. Contact is by email (mailto) plus LinkedIn and GitHub links.
- Project cards link out to the live client sites in a new tab.
- Built with Astro 5, Tailwind CSS v4, anime.js (portrait, popups), and GSAP (entrances, the work cursor, the scroll chroma). Content comes from Astro collections: `src/content/projects.json` and `src/content/experience/*.md`.
- A single light theme.
- Google Analytics is installed.

## Capabilities and Constraints

- Jeff is a Partner & Web Director at Paradigm Marketing & Creative (2dimes.com) and also takes independent work. The site can reference Paradigm, but the call to action is to contact Jeff directly.
- The allowed project technology tags are an enum in `src/content.config.ts`.
- Years of experience are counted from 2007.

## Brand Commitments

- Name: Jeff Glenn. Title: Web Designer & Front-End Developer. Domain: jeffglenn.me.
- Voice: first person ("I"), personal and direct. Some current copy is still in third person ("Jeff is…") and should move to first person when touched.
- Contact address: hello@jeffglenn.me.
- One theme, not light and dark. The user is fine with either; light was chosen and built. The old pink accent is dropped.
- Simple and typography-led. Conventional portfolio form, executed at full craft; no metaphor concepts or gimmicks.
- Craft references: brianlovin.com and niklaspeterson.com.

## Evidence on Hand

- Eight real client projects with screenshots and live URLs (`src/content/projects.json`, `src/assets/images/`): Orpheum Theater Group, Dixon Gallery & Gardens, Brother DTG, Regency Homebuilders, Reinhart Law, Thomas Family Law, Stauf USA, Beauty Lawn Spray.
- Work history from 2007 to the present (`src/content/experience/`), including national motion-graphics campaigns for Coca-Cola, American Eagle, Dasani, and Nestea at The University Network.
- Personal photography and hobby images (`src/assets/images/`), plus a set of profile photos (`public/profile-pic/`).
- Paradigm logo (`src/icons/paradigm-logo.svg`).
- **There are no testimonials, case studies, client results, metrics, or pricing.** Don't invent any.

## Product Principles

1. **The work is the proof.** Real projects and real history carry the case; no inflated claims or invented outcomes.
2. **One person, end to end.** Every surface should reinforce that the person who designs it also builds it.
3. **Make reaching out effortless.** Email is the one call to action, and it should never be more than a moment away.
4. **Personal, not corporate.** First-person voice and real personality distinguish Jeff from an agency, Paradigm included.

# jeffglenn.me

The portfolio of Jeff Glenn, a Memphis web designer and front-end developer. One static page: intro, selected work, about, experience, and contact.

Built with [Astro](https://astro.build) 5, Tailwind CSS 4, and GSAP (entrances, the hobby photos, the work cursor, the scroll chroma).

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the site to `./dist/`                 |
| `npm run preview` | Preview the build locally                   |

On a Mac with Homebrew's `vips` installed, sharp (Astro's image processor) tries to build itself against it and the install fails. Install with `SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install` to use sharp's own binary instead.

## Where things live

```text
src/
├── pages/index.astro          the page
├── pages/404.astro            not-found page
├── layouts/Layout.astro       head, SEO, analytics, header, and <main>
├── components/site-header.astro
├── content/
│   ├── projects.json          selected work (title, url, stack, screenshot)
│   └── experience/*.md        work history, ordered by `id`
├── content.config.ts          schemas for both collections
├── assets/images/             screenshots and hobby photos (optimized at build)
├── icons/                     SVGs used through astro-icon
├── scripts/
│   ├── app.js                 portrait shuffle, hobby photos, Paradigm logo
│   ├── motion.js              GSAP entrances and the "Visit" cursor
│   └── chroma.js              the color split while scrolling
└── styles/
    ├── defaults.css           design tokens (Tailwind @theme)
    └── base.css               base styles and components
public/
├── profile-pic/               portrait frames for the shuffle (256px)
├── favicon/
├── og-image.jpg               link preview image (1200×630)
└── robots.txt
```

**Adding a project:** add the screenshot to `src/assets/images/` (3:2 reads best; it's cropped from the top), then add an entry to `src/content/projects.json`. The stack must use the names listed in `content.config.ts`.

## Design and motion

`DESIGN.md` describes the visual system and `PRODUCT.md` the audience and voice. The motion all has a reduced-motion path, and the page shows in full without JavaScript.

The scroll chroma (`src/scripts/chroma.js`) is an SVG filter on `<main>` driven by scroll speed. Chrome-based browsers get the full split and warp; Firefox gets the split without the warp (its warp renders on the CPU); Safari and other WebKit browsers skip it, since they render SVG filters on the CPU.

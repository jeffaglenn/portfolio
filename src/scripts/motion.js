// --------------------------------- //
// Motion: the page is type in motion, quietly. Letters settle in a few pixels
// at a time, section titles and rows arrive as you scroll, work cards ease up
// into place, and over the work the cursor becomes a "Visit" disc. While the
// page scrolls, its colors part (chroma.js).
// --------------------------------- //

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { initChroma } from './chroma.js';

gsap.registerPlugin(ScrollTrigger, SplitText);

const EASE = 'power3.out';
const root = document.documentElement;

// The name and intro lines start hidden (see "Motion" in base.css). If motion
// is reduced, or the head script's safety timer already gave up waiting, the
// page stays as it is and nothing animates.
async function init() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        root.classList.add('motion-off');
        return;
    }

    await document.fonts.ready;
    if (root.classList.contains('motion-off')) return;
    root.classList.add('motion-on');

    initHero();
    initHeadings();
    initCards();
    initRows();

    initChroma();

    if (window.matchMedia('(pointer: fine)').matches) initWorkCursor();
}

init().catch(error => {
    root.classList.add('motion-off');
    console.error('Motion failed to start', error);
});

// --------------------------------- //
// Hero: the name's letters rise in, then the copy lines and the pills follow
// --------------------------------- //
function initHero() {
    const name = document.getElementById('intro-name');
    if (!name) return; // only the home page has the intro
    const split = new SplitText(name, { type: 'chars', charsClass: 'split-char' });
    gsap.set(name, { opacity: 1 });
    gsap.from(split.chars, {
        y: 14,
        opacity: 0,
        duration: 0.9,
        ease: EASE,
        stagger: 0.025,
        delay: 0.1,
    });

    const paragraphs = document.querySelectorAll('p.intro-rise');
    gsap.set(paragraphs, { opacity: 1 });
    SplitText.create(paragraphs, {
        type: 'lines',
        mask: 'lines',
        linesClass: 'split-line',
        autoSplit: true,
        onSplit: self => gsap.from(self.lines, {
            y: 10,
            opacity: 0,
            duration: 0.8,
            ease: EASE,
            stagger: 0.06,
            delay: 0.4,
        }),
    });

    gsap.fromTo('li.intro-rise', { y: 8, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: EASE,
        stagger: 0.05,
        delay: 0.75,
    });
}

// Section titles settle in letter by letter as they arrive.
function initHeadings() {
    document.querySelectorAll('.section-heading').forEach(heading => {
        const split = new SplitText(heading, { type: 'chars', charsClass: 'split-char' });
        gsap.from(split.chars, {
            y: 8,
            opacity: 0,
            duration: 0.7,
            ease: EASE,
            stagger: 0.015,
            scrollTrigger: { trigger: heading, start: 'top 85%', once: true },
        });
    });
}

// Work cards ease up into place, a row at a time.
function initCards() {
    const cards = gsap.utils.toArray('.project');
    if (!cards.length) return;
    gsap.set(cards, { opacity: 0 });
    ScrollTrigger.batch(cards, {
        start: 'top 88%',
        once: true,
        onEnter: batch => gsap.fromTo(batch,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, ease: EASE, stagger: 0.08, clearProps: 'transform' },
        ),
    });
}

// About paragraphs and experience rows ease in as they arrive.
function initRows() {
    [['#about', '#about p'], ['#experience', '#experience li']].forEach(([section, items]) => {
        if (!document.querySelector(section)) return;
        gsap.from(items, {
            y: 12,
            opacity: 0,
            duration: 0.8,
            ease: EASE,
            stagger: 0.07,
            scrollTrigger: { trigger: section, start: 'top 80%', once: true },
        });
    });
}

// --------------------------------- //
// Over a work card the cursor becomes a dark "Visit ↗" disc that lags a touch
// behind the pointer. Everywhere else the cursor is the system arrow.
// --------------------------------- //
function initWorkCursor() {
    const projects = document.querySelectorAll('.project');
    if (!projects.length) return;

    const disc = document.createElement('div');
    disc.className = 'work-cursor';
    disc.setAttribute('aria-hidden', 'true');
    disc.innerHTML = '<span>Visit&nbsp;↗</span>';
    document.body.appendChild(disc);

    const x = gsap.quickTo(disc, 'x', { duration: 0.25, ease: 'power3' });
    const y = gsap.quickTo(disc, 'y', { duration: 0.25, ease: 'power3' });

    document.addEventListener('mousemove', e => {
        x(e.clientX);
        y(e.clientY);
    }, { passive: true });

    projects.forEach(project => {
        project.addEventListener('mouseenter', e => {
            gsap.set(disc, { x: e.clientX, y: e.clientY });
            disc.classList.add('is-on');
            project.classList.add('has-cursor');
        });
        project.addEventListener('mouseleave', () => {
            disc.classList.remove('is-on');
            project.classList.remove('has-cursor');
        });
    });
}

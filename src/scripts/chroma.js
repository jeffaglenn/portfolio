// --------------------------------- //
// Chroma: while the page scrolls, everything on it splits into color plates,
// the way a lens splits light at speed. The faster the scroll, the further
// they part; as it slows they close again, and at rest the page renders as
// normal.
//
// The filter goes on the root element, so it takes in the whole window, the
// fixed glow included. The root is also the one element a filter doesn't turn
// into a containing block, so fixed layers stay put. The header and the work
// cursor are lifted out of it (see liftOut).
// --------------------------------- //

import gsap from 'gsap';

// What the site ships with. In dev, the panel (chroma-panel.astro) changes
// these live and remembers them in this browser.
export const defaults = Object.freeze({
    split: 15,     // px the plates part at full strength
    warp: 60,      // how far they bend apart at full strength
    angle: 90,     // which way they part: 0 is sideways, 90 is along the scroll
    fullAt: 4000,  // scroll speed, in px per second, that reaches full strength
});

export const settings = { ...defaults };

const STORAGE_KEY = 'chroma-settings';

if (import.meta.env.DEV) {
    try {
        Object.assign(settings, JSON.parse(localStorage.getItem(STORAGE_KEY)));
    } catch {}
}

export function saveSettings() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {}
}

const SVG_NS = 'http://www.w3.org/2000/svg';
const clamp = gsap.utils.clamp(-1, 1);

const scroll = { last: 0, v: 0, speed: 0 };
const peak = { value: 0, until: 0 };

// The current scroll speed (px per second) and strength (0 to 1), for the
// panel's readout.
export const live = { speed: 0, strength: 0 };

// Holds the page at full strength for a moment, so a slider change shows
// without having to scroll.
export function showPeak() {
    peak.until = performance.now() + 400;
}

// The page is laid on white (the canvas color, which the root's own painting
// leaves out), then its red and blue channels are lifted out, bent and
// shifted in opposite directions, and added back to the green.
const FILTER = `
    <filter id="chroma" x="-5%" y="-5%" width="110%" height="110%" color-interpolation-filters="sRGB">
        <feFlood flood-color="#fff" />
        <feComposite in="SourceGraphic" result="flat" />
        <feTurbulence type="fractalNoise" baseFrequency="0.004 0.012" numOctaves="2" seed="1" result="noise" />
        <feDisplacementMap in="flat" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" result="bentA" />
        <feDisplacementMap in="flat" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" result="bentB" />
        <feOffset in="bentA" result="shiftedA" />
        <feOffset in="bentB" result="shiftedB" />
        <feColorMatrix in="shiftedA" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />
        <feColorMatrix in="flat" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />
        <feColorMatrix in="shiftedB" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />
        <feComposite in="red" in2="green" operator="arithmetic" k2="1" k3="1" result="pair" />
        <feComposite in="pair" in2="blue" operator="arithmetic" k2="1" k3="1" />
    </filter>`;

// The header and the work cursor stay out of the effect. The top layer sits
// outside the root element, so lifting them there takes them out of the
// filter; the header leaves a spacer to hold its place in the page. (Without
// popover support they stay in the page and split with it.)
function lift(el) {
    el.popover = 'manual';
    el.showPopover();
}

function liftOut() {
    if (!HTMLElement.prototype.showPopover) return;

    const header = document.getElementById('site-header');
    if (header) {
        const spacer = document.createElement('div');
        spacer.setAttribute('aria-hidden', 'true');
        spacer.style.height = `${header.offsetHeight}px`;
        header.before(spacer);
        lift(header);
    }

    // Lifted after the header, so it passes over it.
    const cursor = document.querySelector('.work-cursor');
    if (cursor) lift(cursor);
}

export function initChroma() {
    liftOut();

    const root = document.documentElement;
    const defs = document.createElementNS(SVG_NS, 'svg');
    defs.setAttribute('aria-hidden', 'true');
    defs.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    defs.innerHTML = FILTER;
    document.body.appendChild(defs);

    const noise = defs.querySelector('feTurbulence');
    const [bendA, bendB] = defs.querySelectorAll('feDisplacementMap');
    const [shiftA, shiftB] = defs.querySelectorAll('feOffset');

    let on = false;
    let drawn = '';
    let slowFrames = 0;

    // Parts the plates by (x, y) px and bends them by `warp`. With nothing to
    // show, the filter comes off so the page renders as normal.
    function draw(x, y, warp) {
        const show = Math.abs(x) + Math.abs(y) + warp > 0.1;
        if (show !== on) {
            on = show;
            root.style.filter = show ? 'url(#chroma)' : '';
            // A new bend each time it wakes, so no two scrolls look the same.
            if (show) noise.setAttribute('seed', gsap.utils.random(1, 999, 1));
        }
        if (!show) return;

        const next = `${x.toFixed(1)} ${y.toFixed(1)} ${warp.toFixed(1)}`;
        if (next === drawn) return;
        drawn = next;
        shiftA.setAttribute('dx', -x);
        shiftA.setAttribute('dy', -y);
        shiftB.setAttribute('dx', x);
        shiftB.setAttribute('dy', y);
        bendA.setAttribute('scale', warp);
        bendB.setAttribute('scale', -warp);
    }

    scroll.last = window.scrollY;

    function tick(time, deltaMs) {
        if (deltaMs <= 0) return;

        // A browser that can't keep up with the filter goes back to plain
        // scrolling for the rest of the visit.
        if (on) {
            slowFrames = deltaMs > 34 ? slowFrames + 1 : Math.max(0, slowFrames - 1);
            if (slowFrames > 12) {
                draw(0, 0, 0);
                gsap.ticker.remove(tick);
                live.speed = live.strength = 0;
                if (import.meta.env.DEV) console.info('Chroma turned off: frames were too slow.');
                return;
            }
        }

        const dt = deltaMs / 1000;
        const ease = rate => 1 - Math.exp(-rate * dt);

        // Scroll speed as -1..1 of full strength. It rises quickly, so even a
        // short flick reaches its strength, and settles a little slower, like
        // a lens catching up. After a stall (a background tab, say) the gap
        // counts as stillness, not a burst of speed.
        const scrollY = window.scrollY;
        const speed = deltaMs > 100 ? 0 : (scrollY - scroll.last) / dt;
        const target = clamp(speed / settings.fullAt);
        const rising = Math.abs(target) > Math.abs(scroll.v);
        scroll.v += (target - scroll.v) * ease(rising ? 14 : 6);
        scroll.speed += (Math.abs(speed) - scroll.speed) * ease(8);
        scroll.last = scrollY;
        peak.value += ((performance.now() < peak.until ? 1 : 0) - peak.value) * ease(12);
        live.speed = scroll.speed;

        // Scrolling up parts the plates the other way.
        const strength = Math.max(Math.abs(scroll.v), peak.value);
        live.strength = strength;
        const sign = scroll.v < 0 ? -1 : 1;
        const angle = settings.angle * Math.PI / 180;
        const split = strength * sign * settings.split;
        draw(split * Math.cos(angle), split * Math.sin(angle), strength * settings.warp);
    }

    gsap.ticker.add(tick);
}

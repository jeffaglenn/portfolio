// --------------------------------- //
// Chroma: while the page scrolls, everything on it splits into color plates,
// the way a lens splits light at speed. The faster the scroll, the further
// they part; as it slows they close again, and at rest the page renders as
// normal.
//
// The filter goes on <main>, which holds the page and its background glow.
// The header and the work cursor sit outside it, so they stay sharp.
// --------------------------------- //

import gsap from 'gsap';

const settings = {
    split: 15,     // px the plates part at full strength
    warp: 60,      // how far they bend apart at full strength
    angle: 90,     // which way they part: 0 is sideways, 90 is along the scroll
    fullAt: 4000,  // scroll speed, in px per second, that reaches full strength
};

// WebKit (Safari, and every browser on iPhone and iPad) renders SVG filters on
// the CPU: a window-sized one takes over two seconds a frame there, so the
// effect never starts in it and the page scrolls as normal.
const supported = !/Apple/.test(navigator.vendor);

// Firefox runs the split on the GPU (about 8ms a frame) but the warp on the
// CPU (about 90ms a frame), so it gets the split without the warp.
const canWarp = !/Firefox\//.test(navigator.userAgent);

const SVG_NS = 'http://www.w3.org/2000/svg';
const clamp = gsap.utils.clamp(-1, 1);

// Room around the window for the plates to part into.
const REGION_PAD = 80;

const scroll = { last: 0, v: 0 };

// The page is laid on white (the canvas color, which <main> doesn't paint),
// then its red and blue channels are lifted out, bent, and shifted in
// opposite directions, and added back to the green. Without the warp the
// channels shift straight from the page. The region is set in page pixels to
// cover just the window (see fitRegion).
function pageFilter(warp) {
    const bend = warp ? `
        <feTurbulence type="fractalNoise" baseFrequency="0.004 0.012" numOctaves="2" seed="1" result="noise" />
        <feDisplacementMap in="flat" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" result="bentA" />
        <feDisplacementMap in="flat" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" result="bentB" />` : '';
    return `
        <filter id="chroma" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-color="#fff" />
            <feComposite in="SourceGraphic" result="flat" />
            ${bend}
            <feOffset in="${warp ? 'bentA' : 'flat'}" result="shiftedA" />
            <feOffset in="${warp ? 'bentB' : 'flat'}" result="shiftedB" />
            <feColorMatrix in="shiftedA" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />
            <feColorMatrix in="flat" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />
            <feColorMatrix in="shiftedB" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />
            <feComposite in="red" in2="green" operator="arithmetic" k2="1" k3="1" result="pair" />
            <feComposite in="pair" in2="blue" operator="arithmetic" k2="1" k3="1" />
        </filter>`;
}

export function initChroma() {
    const page = document.querySelector('main');
    if (!supported || !page) return;

    const defs = document.createElementNS(SVG_NS, 'svg');
    defs.setAttribute('aria-hidden', 'true');
    defs.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    defs.innerHTML = pageFilter(canWarp);
    document.body.appendChild(defs);

    const filter = defs.querySelector('filter');
    const noise = defs.querySelector('feTurbulence');
    const [bendA, bendB] = defs.querySelectorAll('feDisplacementMap');
    const [shiftA, shiftB] = defs.querySelectorAll('feOffset');

    let on = false;
    let drawn = '';
    let fitted = '';
    let slowFrames = 0;
    let stalls = 0;

    // The filter covers the window, not the whole page: engines cap how large
    // a filter can be, and a long page runs past it. Its coordinates start at
    // the top of <main>.
    function fitRegion() {
        const top = page.getBoundingClientRect().top;
        const region = `${top} ${window.innerWidth} ${window.innerHeight}`;
        if (region === fitted) return;
        fitted = region;
        filter.setAttribute('x', -REGION_PAD);
        filter.setAttribute('y', -top - REGION_PAD);
        filter.setAttribute('width', window.innerWidth + REGION_PAD * 2);
        filter.setAttribute('height', window.innerHeight + REGION_PAD * 2);
    }

    // Parts the plates by (x, y) px and bends them by `warp`. With nothing to
    // show, the filter comes off so the page renders as normal.
    function draw(x, y, warp) {
        const show = Math.abs(x) + Math.abs(y) + warp > 0.1;
        if (show !== on) {
            on = show;
            page.style.filter = show ? 'url(#chroma)' : '';
            // A new bend each time it wakes, so no two scrolls look the same.
            if (show) noise?.setAttribute('seed', gsap.utils.random(1, 999, 1));
        }
        if (!show) return;

        fitRegion();
        const next = `${x.toFixed(1)} ${y.toFixed(1)} ${warp.toFixed(1)}`;
        if (next === drawn) return;
        drawn = next;
        shiftA.setAttribute('dx', -x);
        shiftA.setAttribute('dy', -y);
        shiftB.setAttribute('dx', x);
        shiftB.setAttribute('dy', y);
        bendA?.setAttribute('scale', warp);
        bendB?.setAttribute('scale', -warp);
    }

    scroll.last = window.scrollY;

    function tick(_time, deltaMs) {
        if (deltaMs <= 0) return;

        // A browser that can't keep up with the filter goes back to plain
        // scrolling for the rest of the visit: three slow frames in a row
        // (over 50ms each), or slow frames outnumbering quick ones. A single
        // hitch doesn't count.
        if (on) {
            stalls = deltaMs > 50 ? stalls + 1 : 0;
            slowFrames = deltaMs > 34 ? slowFrames + 1 : Math.max(0, slowFrames - 1);
            if (stalls >= 3 || slowFrames > 12) {
                draw(0, 0, 0);
                gsap.ticker.remove(tick);
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
        scroll.last = scrollY;

        // Scrolling up parts the plates the other way.
        const strength = Math.abs(scroll.v);
        const sign = scroll.v < 0 ? -1 : 1;
        const angle = settings.angle * Math.PI / 180;
        const split = strength * sign * settings.split;
        const warp = canWarp ? strength * settings.warp : 0;
        draw(split * Math.cos(angle), split * Math.sin(angle), warp);
    }

    // Frames stop in a hidden tab. Drop the filter there, so coming back
    // isn't mistaken for a stall.
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) return;
        scroll.v = 0;
        draw(0, 0, 0);
    });

    gsap.ticker.add(tick);
}

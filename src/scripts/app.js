// --------------------------------- //
// Imports
// --------------------------------- //

import { animate, utils, createAnimatable } from 'animejs';

// --------------------------------- //
// End Imports
// --------------------------------- //

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function isTouchDevice() {
    return window.matchMedia("(pointer: coarse)").matches;
}

// --------------------------------- //
// Header: show the small name once the large one scrolls away
// --------------------------------- //
const header = document.getElementById('site-header');
const introName = document.getElementById('intro-name');

if (header && introName) {
    new IntersectionObserver(([entry]) => {
        header.toggleAttribute('data-scrolled', !entry.isIntersecting);
    }, { rootMargin: '-64px 0px 0px 0px' }).observe(introName);
}

// --------------------------------- //
// Random Profile Picture Logic
// --------------------------------- //
const images = [
    "/profile-pic/profile.jpg",
    "/profile-pic/profile1.webp",
    "/profile-pic/profile2.webp",
    "/profile-pic/profile3.webp",
    "/profile-pic/profile4.webp",
    "/profile-pic/profile5.webp",
    "/profile-pic/profile6.webp",
    "/profile-pic/profile7.webp",
    "/profile-pic/profile8.webp",
    "/profile-pic/profile9.webp",
    "/profile-pic/profile10.webp",
    "/profile-pic/profile11.webp",
    "/profile-pic/profile12.webp",
    "/profile-pic/profile13.webp",
    "/profile-pic/profile14.webp",
    "/profile-pic/profile15.webp",
    "/profile-pic/profile16.webp",
    "/profile-pic/profile17.webp",
    "/profile-pic/profile18.webp",
    "/profile-pic/profile19.webp",
    "/profile-pic/profile20.webp",
    "/profile-pic/profile21.webp",
    "/profile-pic/profile22.webp",
    "/profile-pic/profile23.webp",
    "/profile-pic/profile24.webp",
    "/profile-pic/profile25.webp",
    "/profile-pic/profile26.webp",
    "/profile-pic/profile27.webp",
    "/profile-pic/profile28.webp",
];

const profilePic = document.getElementById("profile-pic");

let availableImages = [...images];
let lastMouseX = 0;
let lastMouseY = 0;
let originalImage = profilePic?.src;
let revertTimeout;
let profileInView = true;

function getRandomImage() {
    if (!availableImages.length) {
        availableImages = [...images];
    }
    const index = Math.floor(Math.random() * availableImages.length);
    return availableImages.splice(index, 1)[0];
}

function revertToOriginalImage() {
    profilePic.src = originalImage;
}

function shuffleProfilePic() {
    profilePic.src = getRandomImage();

    // Clear the previous timeout and set a new one
    clearTimeout(revertTimeout);
    revertTimeout = setTimeout(revertToOriginalImage, 2000);
}

if (profilePic) {
    // Warm the cache so swaps don't flash an empty frame.
    window.addEventListener('load', () => {
        images.forEach(src => { new Image().src = src; });
    }, { once: true });

    new IntersectionObserver(([entry]) => {
        profileInView = entry.isIntersecting;
    }).observe(profilePic);

    // --------------------------------- //
    // Mousemove Handling
    // --------------------------------- //
    document.addEventListener("mousemove", ({ clientX, clientY }) => {
        if (!profileInView || reducedMotion.matches) return;

        // Change profile pic if the mouse has moved > 100px in any direction
        if (Math.abs(clientX - lastMouseX) > 100 || Math.abs(clientY - lastMouseY) > 100) {
            shuffleProfilePic();
            lastMouseX = clientX;
            lastMouseY = clientY;
        }
    });

    // No cursor on touch screens, so a tap shuffles instead.
    profilePic.addEventListener('click', () => {
        if (isTouchDevice()) shuffleProfilePic();
    });
}

// ------------------ //
// Hobby photo popups
// ------------------ //
utils.$('.peek').forEach(item => {
    const photo = item.querySelector('.peek-photo');
    if (!photo) return;

    utils.set(photo, { scale: 0.92 });

    let open = false;

    const show = () => {
        if (open) return;
        open = true;
        item.setAttribute('aria-expanded', 'true');
        photo.hidden = false;

        // Open below the phrase when there's no room above it under the header.
        const headerBottom = header ? header.getBoundingClientRect().bottom : 0;
        photo.classList.remove('is-below');
        utils.set(photo, { x: 0 });
        if (photo.getBoundingClientRect().top < headerBottom + 12) {
            photo.classList.add('is-below');
        }

        // Keep the photo inside the viewport when the phrase sits near an edge.
        const { left, right } = photo.getBoundingClientRect();
        const margin = 12;
        let shift = 0;
        if (left < margin) shift = margin - left;
        if (right > window.innerWidth - margin) shift = window.innerWidth - margin - right;
        utils.set(photo, { x: shift });

        if (reducedMotion.matches) {
            utils.set(photo, { scale: 1, opacity: 1 });
            return;
        }
        animate(photo, {
            scale: 1,
            opacity: 1,
            ease: 'outExpo',
            duration: 400,
        });
    };

    const hide = () => {
        if (!open) return;
        open = false;
        item.setAttribute('aria-expanded', 'false');

        if (reducedMotion.matches) {
            utils.set(photo, { scale: 0.92, opacity: 0 });
            photo.hidden = true;
            return;
        }
        animate(photo, {
            scale: 0.92,
            opacity: 0,
            ease: 'outQuad',
            duration: 180,
            // Take it out of layout once gone, so a closed photo near the
            // window edge can't widen the page.
            onComplete: () => { if (!open) photo.hidden = true; },
        });
    };

    item.addEventListener('mouseenter', show);
    item.addEventListener('mouseleave', hide);
    item.addEventListener('focus', show);
    item.addEventListener('blur', hide);
    item.addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
    item.addEventListener('click', () => {
        if (isTouchDevice()) open ? hide() : show();
    });

    // On a fine pointer the photo drifts a little with the cursor.
    if (!isTouchDevice()) {
        const drift = createAnimatable(photo, {
            y: 400,
            rotate: 400,
            ease: 'out(3)',
        });

        item.addEventListener('mousemove', e => {
            if (reducedMotion.matches) return;
            const { left, width } = item.getBoundingClientRect();
            const norm = utils.clamp((e.clientX - left) / width * 2 - 1, -1, 1);
            drift.rotate(norm * 3);
            drift.y(-Math.abs(norm) * 4);
        });
    }
});

// ------------------ //
// Scroll reveals: work screenshots wipe open
// ------------------ //
const revealables = utils.$('[data-reveal]');

if (revealables.length) {
    const revealObserver = new IntersectionObserver(entries => {
        // Things that arrive together (a row of cards) open one after another.
        entries
            .filter(entry => entry.isIntersecting)
            .forEach((entry, i) => {
                entry.target.style.setProperty('--reveal-delay', `${i * 90}ms`);
                entry.target.classList.add('is-in');
                revealObserver.unobserve(entry.target);
            });
    }, { rootMargin: '0px 0px -10% 0px' });

    revealables.forEach(el => revealObserver.observe(el));
}

// ------------------ //
// "Visit site" label that follows the cursor over project screenshots
// ------------------ //
if (!isTouchDevice()) {
    utils.$('.project [data-reveal="frame"]').forEach(frame => {
        const label = frame.closest('.project')?.querySelector('.visit-label');
        if (!label) return;

        const follow = createAnimatable(label, {
            x: 350,
            y: 350,
            ease: 'out(3)',
        });

        const place = (e, instant) => {
            const { left, top } = frame.getBoundingClientRect();
            // Sit just below and right of the pointer so the cursor stays visible.
            // It may run past the card, but never past the window edge.
            const x = Math.min(e.clientX - left + 14, window.innerWidth - left - label.offsetWidth - 8);
            const y = Math.min(e.clientY - top + 14, window.innerHeight - top - label.offsetHeight - 8);
            if (instant || reducedMotion.matches) {
                follow.x(x, 0);
                follow.y(y, 0);
            } else {
                follow.x(x);
                follow.y(y);
            }
        };

        frame.addEventListener('mouseenter', e => {
            place(e, true);
            animate(label, { opacity: 1, scale: [0.85, 1], duration: 250, ease: 'outExpo' });
        });
        frame.addEventListener('mousemove', e => place(e));
        frame.addEventListener('mouseleave', () => {
            animate(label, { opacity: 0, scale: 0.85, duration: 150, ease: 'outQuad' });
        });
    });
}

// ------------------ //
// Paradigm logo that floats over its link and follows the cursor
// ------------------ //
utils.$('.logo-hover').forEach(link => {
    const logo = link.querySelector('.logo-float');
    if (!logo) return;

    utils.set(logo, { scale: 0.85 });

    const follow = createAnimatable(logo, {
        x: 500,
        y: 500,
        ease: 'out(3)',
    });

    let shown = false;

    const show = () => {
        shown = true;
        logo.hidden = false;
        if (reducedMotion.matches) {
            utils.set(logo, { scale: 1, opacity: 1 });
            return;
        }
        animate(logo, { scale: 1, opacity: 1, ease: 'outExpo', duration: 350 });
    };

    const hide = () => {
        shown = false;
        if (reducedMotion.matches) {
            utils.set(logo, { scale: 0.85, opacity: 0 });
            logo.hidden = true;
            return;
        }
        animate(logo, {
            scale: 0.85,
            opacity: 0,
            ease: 'outQuad',
            duration: 150,
            onComplete: () => { if (!shown) logo.hidden = true; },
        });
    };

    // Keep the logo centered on the pointer, but inside the link's box.
    const place = (e, instant) => {
        const { left, top, width, height } = link.getBoundingClientRect();
        const x = utils.clamp(e.clientX - left - width / 2, -width / 2, width / 2);
        const y = utils.clamp(e.clientY - top - height / 2, -height / 2, height / 2);
        const duration = instant || reducedMotion.matches ? 0 : undefined;
        follow.x(x, duration);
        follow.y(y, duration);
    };

    if (!isTouchDevice()) {
        link.addEventListener('mouseenter', e => {
            place(e, true);
            show();
        });
        link.addEventListener('mousemove', e => place(e));
        link.addEventListener('mouseleave', hide);
    }

    // Keyboard focus shows it centered on the link.
    link.addEventListener('focus', () => {
        follow.x(0, 0);
        follow.y(0, 0);
        show();
    });
    link.addEventListener('blur', hide);
});

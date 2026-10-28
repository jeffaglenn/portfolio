// --------------------------------- //
// Imports
// --------------------------------- //

import gsap from 'gsap';

// --------------------------------- //
// End Imports
// --------------------------------- //

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const header = document.getElementById('site-header');

function isTouchDevice() {
    return window.matchMedia("(pointer: coarse)").matches;
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

// Shuffles only pick frames that have finished loading and decoding, so a swap
// is always instant instead of pointing at a photo that's still downloading.
const readyImages = [];
const decodedFrames = []; // holding the decoded images keeps them in memory
let availableImages = [];
let lastMouseX = 0;
let lastMouseY = 0;
let originalImage = profilePic?.src;
let revertTimeout;
let profileInView = true;

function getRandomImage() {
    if (!availableImages.length) {
        availableImages = [...readyImages];
    }
    if (!availableImages.length) return null;
    const index = Math.floor(Math.random() * availableImages.length);
    return availableImages.splice(index, 1)[0];
}

function preloadFrames() {
    // Random order, so the first frames to arrive aren't always the same ones.
    const queue = gsap.utils.shuffle([...images]);
    const loadNext = () => {
        const src = queue.shift();
        if (!src) return;
        const frame = new Image();
        frame.fetchPriority = 'low';
        frame.src = src;
        frame.decode()
            .then(() => {
                decodedFrames.push(frame);
                readyImages.push(src);
                availableImages.push(src);
            })
            .catch(() => {})
            .finally(loadNext);
    };
    // A few at a time, so the frames trickle in without crowding the rest of the page.
    for (let i = 0; i < 4; i++) loadNext();
}

function revertToOriginalImage() {
    profilePic.src = originalImage;
}

function shuffleProfilePic() {
    const next = getRandomImage();
    if (!next) return; // nothing has loaded yet; the next move will try again
    profilePic.src = next;

    // Clear the previous timeout and set a new one
    clearTimeout(revertTimeout);
    revertTimeout = setTimeout(revertToOriginalImage, 2000);
}

if (profilePic) {
    // Start loading the other frames as soon as the portrait itself is in,
    // rather than waiting for the whole page.
    if (profilePic.complete) {
        preloadFrames();
    } else {
        profilePic.addEventListener('load', preloadFrames, { once: true });
    }

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
gsap.utils.toArray('.peek').forEach(item => {
    const photo = item.querySelector('.peek-photo');
    if (!photo) return;

    gsap.set(photo, { scale: 0.92 });

    let open = false;

    const show = () => {
        if (open) return;
        open = true;
        item.setAttribute('aria-expanded', 'true');
        photo.hidden = false;

        // Open below the phrase when there's no room above it, below the
        // header if it's still on screen.
        const headerBottom = Math.max(0, header ? header.getBoundingClientRect().bottom : 0);
        photo.classList.remove('is-below');
        gsap.set(photo, { x: 0 });
        if (photo.getBoundingClientRect().top < headerBottom + 12) {
            photo.classList.add('is-below');
        }

        // Keep the photo inside the viewport when the phrase sits near an edge.
        const { left, right } = photo.getBoundingClientRect();
        const margin = 12;
        let shift = 0;
        if (left < margin) shift = margin - left;
        if (right > window.innerWidth - margin) shift = window.innerWidth - margin - right;
        gsap.set(photo, { x: shift });

        if (reducedMotion.matches) {
            gsap.set(photo, { scale: 1, opacity: 1 });
            return;
        }
        gsap.to(photo, {
            scale: 1,
            opacity: 1,
            ease: 'expo.out',
            duration: 0.4,
            overwrite: 'auto',
        });
    };

    const hide = () => {
        if (!open) return;
        open = false;
        item.setAttribute('aria-expanded', 'false');

        if (reducedMotion.matches) {
            gsap.set(photo, { scale: 0.92, opacity: 0 });
            photo.hidden = true;
            return;
        }
        gsap.to(photo, {
            scale: 0.92,
            opacity: 0,
            ease: 'power1.out',
            duration: 0.18,
            overwrite: 'auto',
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
        const driftY = gsap.quickTo(photo, 'y', { duration: 0.4, ease: 'power2.out' });
        const driftRotate = gsap.quickTo(photo, 'rotation', { duration: 0.4, ease: 'power2.out' });

        item.addEventListener('mousemove', e => {
            if (reducedMotion.matches) return;
            const { left, width } = item.getBoundingClientRect();
            const norm = gsap.utils.clamp(-1, 1, (e.clientX - left) / width * 2 - 1);
            driftRotate(norm * 3);
            driftY(-Math.abs(norm) * 4);
        });
    }
});

// ------------------ //
// Paradigm logo that floats over its link and follows the cursor
// ------------------ //
gsap.utils.toArray('.logo-hover').forEach(link => {
    const logo = link.querySelector('.logo-float');
    if (!logo) return;

    gsap.set(logo, { scale: 0.85 });

    const followX = gsap.quickTo(logo, 'x', { duration: 0.5, ease: 'power2.out' });
    const followY = gsap.quickTo(logo, 'y', { duration: 0.5, ease: 'power2.out' });

    // Passing the target as the start value too makes a quickTo jump there.
    const follow = (x, y, instant) => {
        followX(x, instant ? x : undefined);
        followY(y, instant ? y : undefined);
    };

    let shown = false;

    const show = () => {
        shown = true;
        logo.hidden = false;
        if (reducedMotion.matches) {
            gsap.set(logo, { scale: 1, opacity: 1 });
            return;
        }
        gsap.to(logo, { scale: 1, opacity: 1, ease: 'expo.out', duration: 0.35, overwrite: 'auto' });
    };

    const hide = () => {
        shown = false;
        if (reducedMotion.matches) {
            gsap.set(logo, { scale: 0.85, opacity: 0 });
            logo.hidden = true;
            return;
        }
        gsap.to(logo, {
            scale: 0.85,
            opacity: 0,
            ease: 'power1.out',
            duration: 0.15,
            overwrite: 'auto',
            onComplete: () => { if (!shown) logo.hidden = true; },
        });
    };

    // Keep the logo centered on the pointer, but inside the link's box.
    const place = (e, instant) => {
        const { left, top, width, height } = link.getBoundingClientRect();
        const x = gsap.utils.clamp(-width / 2, width / 2, e.clientX - left - width / 2);
        const y = gsap.utils.clamp(-height / 2, height / 2, e.clientY - top - height / 2);
        follow(x, y, instant || reducedMotion.matches);
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
        follow(0, 0, true);
        show();
    });
    link.addEventListener('blur', hide);
});

// --------------------------------- //
// Imports
// --------------------------------- //

import { animate, onScroll, utils, stagger, createAnimatable } from 'animejs';

// --------------------------------- //
// End Imports
// --------------------------------- //

function isTouchDevice() {
    return window.matchMedia("(pointer: coarse)").matches;
}

if (isTouchDevice()) {
    document.documentElement.classList.add('is-touch-device');
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

let availableImages = [...images];
let lastMouseX = 0;
let lastMouseY = 0;
let originalImage = document.getElementById("profile-pic").src;
let revertTimeout;

function getRandomImage() {
    if (!availableImages.length) {
        availableImages = [...images];
    }
    const index = Math.floor(Math.random() * availableImages.length);
    return availableImages.splice(index, 1)[0];
}

function revertToOriginalImage() {
    document.getElementById("profile-pic").src = originalImage;
}

// --------------------------------- //
// Glow Effect & Mousemove Handling
// --------------------------------- //
document.addEventListener("mousemove", ({ clientX, clientY }) => {
    // Change profile pic if the mouse has moved > 100px in any direction
    if (Math.abs(clientX - lastMouseX) > 100 || Math.abs(clientY - lastMouseY) > 100) {
        document.getElementById("profile-pic").src = getRandomImage();
        lastMouseX = clientX;
        lastMouseY = clientY;

        // Clear the previous timeout and set a new one
        clearTimeout(revertTimeout);
        revertTimeout = setTimeout(revertToOriginalImage, 2000);
    }
});



// ------------------ //
// Button Hover Effect
// ------------------ //
const buttonHover = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty('--button-mouse-x', `${ x }px`);
    target.style.setProperty('--button-mouse-y', `${ y }px`);
}

if (!isTouchDevice()) {
    for(const button of document.querySelectorAll('.glow-hover')) {
        button.onmousemove = (e) => buttonHover(e)
    }
}


animate('[data-stagger-fade-in]', {
    y: {
        from: '10rem',
    },
    opacity: {
        from: 0,
    },
    delay: stagger(100),
    autoplay: onScroll({
        enter: 'bottom-=200 top',
    })
});

utils.$('[data-fade-in]').forEach(item => {
    animate(item, {
        y: {
            from: '10rem',
        },
        opacity: {
            from: 0,
        },
        autoplay: onScroll({
            enter: 'bottom-=200 top',
        })
    });
});

utils.$('.popup-hover').forEach(item => {

    const refreshBounds = () => bounds = item.getBoundingClientRect();
    let popupContentContainer = item.querySelector('.popup-content');

    // Initialize popup at scale 0
    utils.set(popupContentContainer, {
        scale: 0,
        opacity: 0,
        zIndex: 1000,
    });

    // // Animate in on hover with bounce
    item.addEventListener('mouseenter', () => {
        animate(popupContentContainer, {
            scale: [0.6, 1],
            opacity: {
                to: 1,
            },
            ease: 'outElastic(.75, .75)',
            duration: 500
        });
    });
    // // Animate out on mouse leave
    item.addEventListener('mouseleave', () => {
        animate(popupContentContainer, {
            scale: [1, 0.6],
            opacity: {
                to: 0,
            },
            ease: 'inElastic(.75, .75)',
            duration: 250
        });
    });

    const content = createAnimatable(popupContentContainer, {
        x: 500,
        y: 500,
        ease: 'out(3)',
    });

    const onMouseMove = e => {
        const bounds = item.getBoundingClientRect();
        const { width, height, left, top } = bounds;
        const hw = width / 2;
        const hh = height / 2;
        const x = utils.clamp(e.clientX - left - hw, -hw, hw);
        const y = utils.clamp(e.clientY - top - hh, -hh, hh);
        content.x(x);
        content.y(y);
    }

    item.addEventListener('mousemove', onMouseMove);
    popupContentContainer.addEventListener('scroll', refreshBounds);
});


utils.$('[data-project]').forEach(item => {
    const image = item.querySelector('img');

    utils.set(image, {
        scale: 1,
        opacity: 0.25,
    });

    // // Animate in on hover with bounce
    item.addEventListener('mouseenter', () => {
        animate(image, {
            scale: [1, 1.1],
            opacity: {
                to: 1,
            },
            // ease: 'outElastic(.75, .75)',
            duration: 1000
        });
    });
    // // Animate out on mouse leave
    item.addEventListener('mouseleave', () => {
        animate(image, {
            scale: [1.1, 1],
            opacity: {
                to: 0.1,
            },
            // ease: 'inElastic(.75, .75)',
            duration: 1000
        });
    });

    const content = createAnimatable(image, {
        x: 2000,
        y: 2000,
    });

    const onMouseMove = e => {
        const { left, top, width, height } = item.getBoundingClientRect();
        const hw = width / 2;
        const hh = height / 2;
        const overflowX = width * -0.05;
        const overflowY = height * -0.05;
        const normX = utils.clamp((e.clientX - left - hw) / hw, -1, 1);
        const normY = utils.clamp((e.clientY - top - hh) / hh, -1, 1);
        content.x(normX * overflowX);
        content.y(normY * overflowY);
    };

    item.addEventListener('mousemove', onMouseMove);
    item.addEventListener('mouseleave', () => {
        content.x(0);
        content.y(0);
    });
});
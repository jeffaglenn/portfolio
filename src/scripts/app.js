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
// const glowContainer = document.querySelector(".glow");
// const { left, top } = glowContainer.getBoundingClientRect();
// const centerX = left + 62.5; // 125 / 2 - 125 is the width of the glow
// const centerY = top + 62.5;  // 125 / 2 - 125 is the height of the glow
// const maxDistance = 5;
// const maxDistanceFromCenter = 200;

document.addEventListener("mousemove", ({ clientX, clientY }) => {
    // Calculate distance and angle from container center
    // const dx = centerX - clientX;
    // const dy = centerY - clientY;
    // const distance = Math.min(
    //     (Math.sqrt(dx * dx + dy * dy) / maxDistanceFromCenter) * maxDistance,
    //     maxDistance
    // );
    // const angle = Math.atan2(dy, dx);

    // Move the glow container
    // glowContainer.style.transform = `translate(${Math.cos(angle) * distance}px, ${
    //     Math.sin(angle) * distance
    // }px)`;

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





import { animate, onScroll, utils, stagger, createAnimatable } from 'animejs';

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

// utils.$('[data-project]').forEach(item => {
//     let bounds = item.getBoundingClientRect();

//     const refreshBounds = () => bounds = item.getBoundingClientRect();
//     let image = item.querySelector('img');

//     const animatableImage = createAnimatable(image, {
//         x: 500,
//         y: 500,
//         ease: 'out(3)',
//     });
//     const onMouseMove = e => {
//         const { width, height, left, top } = bounds;
//         const hw = width / 2;
//         const hh = height / 2;
//         const x = utils.clamp(e.clientX - left - hw, -hw, hw);
//         const y = utils.clamp(e.clientY - top - hh, -hh, hh);
//         animatableImage.x(x);
//         animatableImage.y(y);
//     }

//     window.addEventListener('mousemove', onMouseMove);
//     project.addEventListener('scroll', refreshBounds);
// });

// const project = document.querySelector('[data-project]');



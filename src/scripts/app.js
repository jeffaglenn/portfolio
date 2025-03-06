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
    "https://picsum.photos/seed/1/800/800",
    "https://picsum.photos/seed/2/800/800",
    "https://picsum.photos/seed/3/800/800",
    "https://picsum.photos/seed/4/800/800",
    "https://picsum.photos/seed/5/800/800",
    "https://picsum.photos/seed/6/800/800",
    "https://picsum.photos/seed/7/800/800",
    "https://picsum.photos/seed/8/800/800",
    "https://picsum.photos/seed/9/800/800",
    "https://picsum.photos/seed/10/800/800",
    "https://picsum.photos/seed/11/800/800",
    "https://picsum.photos/seed/12/800/800",
];

let availableImages = [...images];
let lastMouseX = 0;
let lastMouseY = 0;

function getRandomImage() {
    if (!availableImages.length) {
        availableImages = [...images];
    }
    const index = Math.floor(Math.random() * availableImages.length);
    return availableImages.splice(index, 1)[0];
}

// --------------------------------- //
// Glow Effect & Mousemove Handling
// --------------------------------- //
const glowContainer = document.querySelector(".glow");
const { left, top } = glowContainer.getBoundingClientRect();
const centerX = left + 62.5; // 125 / 2 - 125 is the width of the glow
const centerY = top + 62.5;  // 125 / 2 - 125 is the height of the glow
const maxDistance = 5;
const maxDistanceFromCenter = 200;

document.addEventListener("mousemove", ({ clientX, clientY }) => {
    // Calculate distance and angle from container center
    const dx = centerX - clientX;
    const dy = centerY - clientY;
    const distance = Math.min(
        (Math.sqrt(dx * dx + dy * dy) / maxDistanceFromCenter) * maxDistance,
        maxDistance
    );
    const angle = Math.atan2(dy, dx);

    // Move the glow container
    glowContainer.style.transform = `translate(${Math.cos(angle) * distance}px, ${
        Math.sin(angle) * distance
    }px)`;

    // Change profile pic if the mouse has moved > 50px in any direction
    if (Math.abs(clientX - lastMouseX) > 50 || Math.abs(clientY - lastMouseY) > 50) {
        document.getElementById("profile-pic").src = getRandomImage();
        lastMouseX = clientX;
        lastMouseY = clientY;
    }
});



// ------------------ //
// Button Hover Effect
// ------------------ //
const buttonHover = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left;

    target.style.setProperty('--button-mouse-x', `${ x }px`);
}

if (!isTouchDevice()) {
    for(const button of document.querySelectorAll('.btn')) {
        button.onmousemove = (e) => buttonHover(e)
    }
}
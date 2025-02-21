function isTouchDevice() {
    return window.matchMedia("(pointer: coarse)").matches;
}

if (isTouchDevice()) {
    document.documentElement.classList.add('is-touch-device');
}

// document.addEventListener('DOMContentLoaded', () => {
//     const cursor = document.createElement('div');
//     cursor.classList.add('custom-cursor');
//     document.body.appendChild(cursor);

//     document.addEventListener('mousemove', (e) => {
//         cursor.style.left = `${e.clientX}px`;
//         cursor.style.top = `${e.clientY}px`;
//     });
// });



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
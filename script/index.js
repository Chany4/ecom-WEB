window.alert('The footer does not work as this is a demo website');

// Add JavaScript functionality for scrolling through images
const sliderWrapper = document.querySelector('.slider-wrapper');
const scrollbarThumb = document.querySelector('.scrollbar-thumb');

// Adjust scrollbar thumb width based on content width
function adjustThumbWidth() {
    scrollbarThumb.style.width = (sliderWrapper.scrollWidth * sliderWrapper.clientWidth / sliderWrapper.scrollWidth) + 'px';
}

// Update scrollbar thumb width when slider is scrolled
sliderWrapper.addEventListener('scroll', adjustThumbWidth);

// Dragging functionality for scrollbar thumb
let isDragging = false;

scrollbarThumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - scrollbarThumb.getBoundingClientRect().left;
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX - sliderWrapper.getBoundingClientRect().left;
    const percent = Math.min(1, Math.max(0, x / sliderWrapper.offsetWidth));
    scrollbarThumb.style.left = `${percent * 100}%`;
    sliderWrapper.scrollLeft = percent * (sliderWrapper.scrollWidth - sliderWrapper.clientWidth);
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});

// Adjust scrollbar thumb width on initial load
adjustThumbWidth();

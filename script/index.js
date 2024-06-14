

const sliderWrapper = document.querySelector('.slider-wrapper');
const scrollbarThumb = document.querySelector('.scrollbar-thumb');

function adjustThumbWidth() {
    scrollbarThumb.style.width = (sliderWrapper.scrollWidth * sliderWrapper.clientWidth / sliderWrapper.scrollWidth) + 'px';
}

// Update scrollbar thumb width when slider is scrolled
sliderWrapper.addEventListener('scroll', adjustThumbWidth);

// Dragging functionality for scrollbar thumblet isDragging = false;

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

// Adjust scrollbar thumb width
adjustThumbWidth();

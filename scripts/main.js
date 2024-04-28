const images = document.querySelectorAll('.wrapper .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
    width = document.querySelector('.wrapper').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = '70vh';
    })
    
    rollSlider();
}
window.addEventListener('resize', init);
init();

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});


document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

function nextSlide() {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
}

setInterval(nextSlide, 5000);
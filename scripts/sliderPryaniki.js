const imagesPryaniki = document.querySelectorAll('.wrapperPryaniki .slider-line-Pryaniki img');
const sliderLinePryaniki = document.querySelector('.slider-line-Pryaniki');
let countPryaniki = 0;
let widthPryaniki;

function initPryaniki() {
    widthPryaniki = document.querySelector('.wrapperPryaniki').offsetWidth;
    sliderLinePryaniki.style.width = widthPryaniki * imagesPryaniki.length + 'px';
    imagesPryaniki.forEach(item => {
        item.style.width = widthPryaniki + 'px';
        item.style.height = 50 + 'vh';
    })
    rollSliderPryaniki(); 
}
window.addEventListener('resize', initPryaniki);
initPryaniki();



function rollSliderPryaniki() {
    sliderLinePryaniki.style.transform = 'translate(-' + countPryaniki * widthPryaniki + 'px)';
}

function nextSlidePryaniki() {
    countPryaniki++;
    if (countPryaniki >= imagesPryaniki.length) {
        countPryaniki = 0;
    }
    rollSliderPryaniki();
}

setInterval(nextSlidePryaniki, 3000);

const imagesZephir = document.querySelectorAll('.wrapperZephir .slider-line-Zephir img');
const sliderLineZephir = document.querySelector('.slider-line-Zephir');
let countZephir = 0;
let widthZephir;

function initZephir() {
    widthZephir = document.querySelector('.wrapperZephir').offsetWidth;
    sliderLineZephir.style.width = widthZephir * imagesZephir.length + 'px';
    imagesZephir.forEach(item => {
        item.style.width = widthZephir + 'px';
        item.style.height = 50 + 'vh';
    })
    rollSliderZephir();
}
window.addEventListener('resize', initZephir);
initZephir();



function rollSliderZephir() {
    sliderLineZephir.style.transform = 'translate(-' + countZephir * widthZephir + 'px)';
}

function nextSlideZephir() {
    countZephir++;
    if (countZephir >= imagesZephir.length) {
        countZephir = 0;
    }
    rollSliderZephir();
}

setInterval(nextSlideZephir, 3000);
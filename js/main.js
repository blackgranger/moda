document.addEventListener('DOMcontentLoaded', () => {
    const elementosCarousel = document.querySelectorall('.carousel');
    M.Carousel.init(elementosCarousel, {
        duratio: 150
    });
;})
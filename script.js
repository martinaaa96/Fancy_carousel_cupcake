var trandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCusor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEfferct: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,

    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
navigation:{
    nextEl: '.swiper-button-next',
    nextEl:'.swiper-button-prev',
}
})
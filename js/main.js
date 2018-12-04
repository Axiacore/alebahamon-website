$(() => {
    $('.js-anchor-animated').on('click', function () {
        let target = $(this).attr('href');
        $(document.scrollingElement).animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
    });

    document.querySelectorAll('.js-ring-item').forEach(object => {
        new IntersectionObserver((objects) => {
            objects.forEach(object => {
                if (object.isIntersecting) {
                    $('.js-transform-img.transform__img-item_active').removeClass('transform__img-item_active');
                    $(`.js-transform-img:eq(${$(object.target).index()})`).addClass('transform__img-item_active');
                }
            });
        }, { rootMargin: '-50% 0px' }).observe(object);
    });

    $('.js-gallery').featherlightGallery();
});

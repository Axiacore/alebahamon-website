$(() => {
    $('.js-anchor-animated').on('click', function () {
        let target = $(this).attr('href');
        $(document.scrollingElement).animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
    });

    document.querySelectorAll('.js-ring-list').forEach(object => {
        new IntersectionObserver((objects) => {
            objects.forEach(object => {
                if (object.isIntersecting) {
                    $(object.target).addClass('ring-list_active');
                } else {
                    $(object.target).removeClass('ring-list_active');
                }
            });
        }, { rootMargin: '-50% 0px' }).observe(object);
    });

    document.querySelectorAll('.js-ring-item').forEach(object => {
        new IntersectionObserver((objects) => {
            objects.forEach(object => {
                if (object.isIntersecting) {
                    $('.js-ring-item').find('.ring-item__img-container_active').removeClass('ring-item__img-container_active');
                    $(object.target).find('.ring-item__img-container').addClass('ring-item__img-container_active');
                }
            });
        }, { rootMargin: '-50% 0px' }).observe(object);
    });

    $('.js-gallery').featherlightGallery();
});

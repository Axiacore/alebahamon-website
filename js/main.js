$(() => {
    $('.js-anchor-animated').on('click', function () {
        let target = $(this).attr('href');
        $(document.scrollingElement).animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
    });
});

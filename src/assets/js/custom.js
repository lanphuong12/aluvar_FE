$('#touch-menu').click(function () {
    $(this).stop(0).addClass('opened');
    $('#sticker').addClass('opened');
    $('#back-top').addClass('hide1');
    $('.banner .lSSlideOuter .lSPager.lSpg').addClass('hide');
});
$('#sticker .close-menu,#sticker-overlay').click(function () {
    $('#touch-menu').stop(0).removeClass('opened');
    $('#sticker').removeClass('opened');
    $('#back-top').removeClass('hide1');
    $('.banner .lSSlideOuter .lSPager.lSpg').removeClass('hide');
});
$(document).ready(function () {
    if ($('#sticker-container').length) {
        var scrollTrigger = $('.top-header').height(); // px

        fixmenu = function () {
            var scrollTop = $(window).scrollTop();
            if ($(window).width() > 991) {
                if (scrollTop > scrollTrigger) {
                    $('#sticker-container').addClass('fixed');
                } else {
                    $('#sticker-container').removeClass('fixed');
                }
            }
            else {
                if (scrollTop > 0) {
                    $('.header').addClass('fixed');
                } else {
                    $('.header').removeClass('fixed');
                }
            }
        };
        fixmenu();
        $(window).on('scroll', function () {
            fixmenu();
        });
    }
});
$(document).ready(function () {
    if ($("#back-top").length) { var scrollTrigger = 0, backToTop = function () { var o = $(window).scrollTop(); scrollTrigger < o ? $("#back-top").addClass("show") : $("#back-top").removeClass("show") }; backToTop(), $(window).on("scroll", function () { backToTop() }), $("#back-top").on("click", function (o) { o.preventDefault(), $("html,body").animate({ scrollTop: 0 }, 700) }) }
    $("#sliderPartner").simplyScroll();
    $(".nn").click(function () { $('._lang').toggleClass('show'); });
    $(".icon-sr").click(function () { $('.search').toggleClass('active'); });
    $('#sticker .main-menu .fa').click(function () {
        $(this).parent('li').children('ul').stop(0).slideToggle(300);
        $(this).toggleClass('fa-angle-up');
        $(this).toggleClass('fa-angle-down');
    });
    $(".right-bar ul li").click(function () {
        $(this).children('ul').stop(0).slideToggle(300);
        $(".content-product .desc > ul > li").toggleClass('active')
    });
});
$(document).ready(function () {
    $('.slider-banner .slider').lightSlider({
        onSliderLoad: function () {
            $('.slider-banner .slider').removeClass('cS-hidden');
        }, adaptiveHeight: true, item: 1, auto: true, coltrols: false, pager: true, slideMargin: 0, loop: true, mode: 'fade', speed: 2000, pause: 10000, pauseOnHover: true
    });
    $('.slider-dt .slider').lightSlider({ item: 3, loop: true, controls: true, pager: false, slideMargin: 29, slideMove: 1, easing: 'cubic-bezier(0.25, 0, 0.25, 1)', speed: 600, responsive: [{ breakpoint: 800, settings: { item: 2, slideMove: 1, slideMargin: 6, } }, { breakpoint: 480, settings: { item: 1, slideMove: 1 } }] });
    $('.slider-sp .slider').lightSlider({ item: 4, loop: true, controls: true, pager: false, slideMargin: 22, slideMove: 1, easing: 'cubic-bezier(0.25, 0, 0.25, 1)', speed: 600, responsive: [{ breakpoint: 800, settings: { item: 2, slideMove: 1, slideMargin: 6, } }, { breakpoint: 480, settings: { item: 1, slideMove: 1 } }] });
    $(document).ready(function () {
        $('#imageGallery').lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            thumbItem: 4,
            galleryMargin: 15,
            thumbMargin: 15,
            enableDrag: false,
            currentPagerPosition: 'left',
            onSliderLoad: function (el) {
                el.lightGallery({
                    selector: '#imageGallery .lslide'
                });
            }
        });
    });
});
if ($(window).width() > 991) {
    new WOW().init();
}

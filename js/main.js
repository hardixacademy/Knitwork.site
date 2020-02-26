$(function () {
    $('#toggle').on("click", function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
        $('.header_logo_mob').toggleClass('al');
      });
    
      $('.header_nav_a_mob').click(function () {
        $('#toggle').removeClass('active');
        $('#overlay').removeClass('open');
      });
    
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
    });
    $('.products__container').slick({
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1670,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1335,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1019,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 689,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

});
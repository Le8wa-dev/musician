$(function(){

    // Слайдер SLider
    $('.slider__items').slick({
        prevArrow: '<button class="slick-prev slick-arrow" ><img class="prev" src="images/icons/prevarrow.png" alt=""></button>',
        nextArrow: '<button class="slick-next slick-arrow" ><img class="next" src="images/icons/nextarrow.png" alt=""></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 970,
                settings: {
                  arrows: false,
                }
              },
              {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    dots: false,
                  }
                },
        ]
    });

    // Слайдер History
    $('.history__inner').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                }
              },
        ]
    });

    // Всплывающее меню
    $('.header__inner-btn').on('click',function(){
        $('.header__inner > ul').slideToggle();
    });

    // Плавный скролл к якорю
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
        $('.scrollup').fadeIn();
        } else {
        $('.scrollup').fadeOut();
        }
    }); 
    
    // Кнопка возврата к хедеру
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

});
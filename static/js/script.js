function resizeNav() {
  $('.menu').css({ height: window.innerHeight });

  const radius = Math.sqrt((window.innerHeight ** 2) + (window.innerWidth ** 2));
  const diameter = radius * 2;
  $('.menu-overlay').width(diameter);
  $('.menu-overlay').height(diameter);
  $('.menu-overlay').css({ 'margin-top': -radius, 'margin-right': -radius });
}

$(document).ready(() => {
  const $isSection1Animated1 = $('.section1 .animated1');
  const $isSection1Animated2 = $('.section1 .animated2');
  const $isSection1Animated3 = $('.section1 .animated3');
  const $isSection2Animated1 = $('.section2 .animated1');
  const $isSection2Animated2 = $('.section2 .animated2');
  const $isSection3Animated1 = $('.section3 .animated1');
  const $isSection3Animated2 = $('.section3 .animated2');
  const $isSection3Animated3 = $('.section3 .animated3');
  const $isSection3Animated4 = $('.section3 .animated4');
  const $isSection3Animated5 = $('.section3 .animated5');
  const $isSection3Animated6 = $('.section3 .animated6');
  const $isSection3Animated7 = $('.section3 .animated7');
  const $isSection3Animated8 = $('.section3 .animated8');
  const $isSection3Animated9 = $('.section3 .animated9');
  const $isSection3Animated10 = $('.section3 .animated10');
  const $isSection3Animated11 = $('.section3 .animated11');
  const $isSection3Animated12 = $('.section3 .animated12');
  const $isSection3Animated13 = $('.section3 .animated13');
  const $isSection3Animated14 = $('.section3 .animated14');
  const $isSection3Animated15 = $('.section3 .animated15');
  const $isSection3Animated16 = $('.section3 .animated16');
  const $isSection3Animated17 = $('.section3 .animated17');
  const $isSection3Animated18 = $('.section3 .animated18');
  const $isSection3Animated19 = $('.section3 .animated19');
  const $isSection4Animated1 = $('.section4 .animated1');
  const $isSection4Animated2 = $('.section4 .animated2');
  const $isSection5Animated1 = $('.section5 .animated1');
  const $isSection5Animated2 = $('.section5 .animated2');

  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    mousewheel: true
  });

  $('#fullpage').fullpage({
    menu: '.nav',
    css3: true,
    easing: 'easeInOutCubic',
    scrollingSpeed: 700,
    anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'],
    slidesNavigation: false,
    keyboardScrolling: false,

    afterLoad(anchorLink, index) {
      if ($('.nav').hasClass('hide')) {
        $('.nav').removeClass('hide');
      }
      if ($('.next-btn').hasClass('up')) {
        $('.next-btn').removeClass('up');
      }
      if ($('.next-btn').hasClass('right')) {
        $('.next-btn').removeClass('right');
      }
      if ($('.prev-btn').hasClass('show')) {
        $('.prev-btn').removeClass('show');
      }

      $.fn.fullpage.setAllowScrolling(true);

      if (index === 1) {
        $isSection1Animated1.addClass('animated fadeInUp');
        $isSection1Animated2.addClass('animated fadeInUp').css('animation-delay', '0.5s');
        $isSection1Animated3.addClass('animated fadeInUp').css('animation-delay', '1s');
      } else if (index === 4) {
        $('.nav').addClass('hide');
        $('.next-btn').addClass('right');
        if (!mySwiper.isBeginning) $('.prev-btn').addClass('show');

        $.fn.fullpage.setAllowScrolling(false);

        $(window).bind('mousewheel DOMMouseScroll', () => {
          if (mySwiper.isBeginning || mySwiper.isEnd) {
            setTimeout(() => {
              $.fn.fullpage.setAllowScrolling(true);
            }, 500);
          } else {
            $.fn.fullpage.setAllowScrolling(false);
          }
        });

        mySwiper.on('slideChange', () => {
          if (!mySwiper.isBeginning) $('.prev-btn').addClass('show');
          else $('.prev-btn').removeClass('show');
          if (mySwiper.isEnd) $('.next-btn').removeClass('right');
        });
      } else if (index === 5) {
        $('.next-btn').addClass('up');
      }
    },
    onLeave(index, nextIndex) {
      if (index === 1 && nextIndex === 2) {
        $isSection2Animated1.addClass('animated fadeInLeft');
        $isSection2Animated2.addClass('animated fadeInLeft').css('animation-delay', '.5s');
      } else if ((index === 1 || index === 2) && nextIndex === 3) {
        $isSection3Animated1.addClass('animated zoomIn');
        $isSection3Animated2.addClass('animated zoomIn').css('animation-delay', '.5s');
        $isSection3Animated3.addClass('progressbar-animation8').css('animation-delay', '.5s');
        $isSection3Animated4.addClass('animated zoomIn').css('animation-delay', '.8s');
        $isSection3Animated5.addClass('progressbar-animation7').css('animation-delay', '.8s');
        $isSection3Animated6.addClass('animated zoomIn').css('animation-delay', '1.2s');
        $isSection3Animated7.addClass('progressbar-animation9').css('animation-delay', '1.2s');
        $isSection3Animated8.addClass('animated zoomIn').css('animation-delay', '1.5s');
        $isSection3Animated9.addClass('progressbar-animation6').css('animation-delay', '1.5s');
        $isSection3Animated10.addClass('animated zoomIn').css('animation-delay', '1.8s');
        $isSection3Animated11.addClass('progressbar-animation4').css('animation-delay', '1.8s');
        $isSection3Animated12.addClass('animated zoomIn').css('animation-delay', '2.1s');
        $isSection3Animated13.addClass('progressbar-animation7').css('animation-delay', '2.1s');
        $isSection3Animated14.addClass('animated zoomIn').css('animation-delay', '2.4s');
        $isSection3Animated15.addClass('progressbar-animation3').css('animation-delay', '2.4s');
        $isSection3Animated16.addClass('animated zoomIn').css('animation-delay', '2.7s');
        $isSection3Animated17.addClass('progressbar-animation3').css('animation-delay', '2.7s');
        $isSection3Animated18.addClass('animated zoomIn').css('animation-delay', '3s');
        $isSection3Animated19.addClass('progressbar-animation7').css('animation-delay', '3s');
      } else if ((index === 1 || index === 2 || index === 3) && nextIndex === 4) {
        $isSection4Animated1.addClass('animated fadeInUp').css('animation-delay', '.7s');
        $isSection4Animated2.addClass('animated fadeInUp').css('animation-delay', '1s');
      } else if ((index === 1 || index === 2 || index === 3 || index === 5) && nextIndex === 4) {
        mySwiper.slideTo(0);
      } else if ((index === 1 || index === 2 || index === 3 || index === 4) && nextIndex === 5) {
        $isSection5Animated1.addClass('animated fadeInUp');
        $isSection5Animated2.addClass('animated fadeInUp').css('animation-delay', '.5s');
      }
    }
  });

  $('.menu-toggle').click(() => {
    $('.menu-toggle, .menu-overlay, .menu').toggleClass('open');
  });

  $('.next-btn').on('click', () => {
    if ($('.next-btn').hasClass('up')) {
      $.fn.fullpage.moveTo(1);
    } else if ($('.next-btn').hasClass('right')) {
      mySwiper.slideNext();
    } else {
      $.fn.fullpage.moveSectionDown();
    }
  });
  $('.prev-btn').on('click', () => {
    if ($('.prev-btn').hasClass('show')) {
      mySwiper.slidePrev();
    }
  });

  resizeNav();
});

$(window).resize(resizeNav);

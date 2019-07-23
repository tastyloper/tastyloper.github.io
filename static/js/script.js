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
  const $isSection2Animated1 = $('.section2 .animated1');
  const $isSection2Animated2 = $('.section2 .animated2');
  const $isSection3Animated1 = $('.section3 .animated1');
  const $isSection3Animated2 = $('.section3 .animated2');
  const $isSection4Animated1 = $('.section4 .animated1');
  const $isSection4Animated2 = $('.section4 .animated2');
  const $isSection5Animated1 = $('.section5 .animated1');
  const $isSection5Animated2 = $('.section5 .animated2');
  const $isSection6Animated1 = $('.section6 .animated1');
  const $isSection6Animated2 = $('.section6 .animated2');

  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    mousewheel: true
  });

  $('#fullpage').fullpage({
    menu: '.nav',
    css3: true,
    easing: 'easeInOutCubic',
    scrollingSpeed: 700,
    anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6'],
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
      } else if (index === 6) {
        $('.next-btn').addClass('up');
      }
    },
    onLeave(index, nextIndex) {
      if (index === 1 && nextIndex === 2) {
        $isSection2Animated1.addClass('animated fadeInUp');
        $isSection2Animated2.addClass('animated fadeInUp').css('animation-delay', '.5s');
      } else if (index === 2 && nextIndex === 1) {
        $isSection1Animated1.addClass('animated fadeInUp');
        $isSection1Animated2.addClass('animated fadeInUp').css('animation-delay', '0.5s');
      } else if ((index === 1 || index === 2) && nextIndex === 3) {
        $isSection3Animated1.addClass('animated fadeInUp');
        $isSection3Animated2.addClass('animated fadeInUp').css('animation-delay', '0.5s');
      } else if ((index === 1 || index === 2 || index === 3) && nextIndex === 4) {
        $isSection4Animated1.addClass('animated fadeInUp');
        $isSection4Animated2.addClass('animated fadeInUp').css('animation-delay', '0.5s');
      } else if ((index === 1 || index === 2 || index === 3 || index === 5) && nextIndex === 4) {
        mySwiper.slideTo(0);
      } else if ((index === 1 || index === 2 || index === 3 || index === 4) && nextIndex === 5) {
        $isSection5Animated1.addClass('animated fadeInUp');
        $isSection5Animated2.addClass('animated fadeInUp').css('animation-delay', '0.5s');
      } else if ((index === 1 || index === 2 || index === 3 || index === 4 || index === 5)
                  && nextIndex === 6) {
        $isSection6Animated1.addClass('animated fadeInUp');
        $isSection6Animated2.addClass('animated fadeInUp').css('animation-delay', '0.5s');
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

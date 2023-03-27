// document.addEventListener("DOMContentLoaded", function() {
//   var lazyloadImages = document.querySelectorAll("img.lazy");    
//   var lazyloadThrottleTimeout;
  
//   function lazyload () {
//     if(lazyloadThrottleTimeout) {
//       clearTimeout(lazyloadThrottleTimeout);
//     }    
    
//     lazyloadThrottleTimeout = setTimeout(function() {
//         var scrollTop = window.pageYOffset;
//         lazyloadImages.forEach(function(img) {
//           if(img.offsetTop < (window.innerHeight + scrollTop)) {
//             img.src = img.dataset.src;
//             img.classList.remove('lazy');
//           }
//         });
//         if(lazyloadImages.length == 0) { 
//           document.removeEventListener("scroll", lazyload);
//           window.removeEventListener("resize", lazyload);
//           window.removeEventListener("orientationChange", lazyload);
//         }
//     }, 20);
//   }
  
//   document.addEventListener("scroll", lazyload);
//   window.addEventListener("resize", lazyload);
//   window.addEventListener("orientationChange", lazyload);
// });

if ("IntersectionObserver" in window) {
  const images = document.querySelectorAll("img.lazy");

  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const image = entry.target;
        const newURL = image.getAttribute("data-src");
        // console.log(newURL);
        image.src = newURL;
        observer.unobserve(image);
      });
    },
    {
      threshold: [0.2]
    }
  );

  images.forEach((image) => {
    observer.observe(image);
  });
}

const swiper = new Swiper(".swiper", {
  lazy: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  loop: true,
  slideToClickedSlide: true,
});

const swiperWrap = document.querySelector(".swiper-modal");

document.querySelectorAll(".gallery-item").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (swiperWrap.classList.contains("is-hide")) {
      swiper.slideTo(el.dataset.swiper, 0);
      swiperWrap.classList.remove("is-hide");
    }
  });
});

document.querySelector(".swiper-modal-close-btn").addEventListener("click", (e) => {
  e.preventDefault();
  if (!swiperWrap.classList.contains("is-hide")) {
    swiperWrap.classList.add("is-hide");
  }
});

const galleryMoreBtn = document.querySelector('.gallery-more-btn');
const galleryContents = document.querySelector('.gallery-contents');

galleryMoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (galleryContents.classList.contains('is-hide')) {
    galleryContents.classList.remove('is-hide');
  }
  galleryMoreBtn.remove();
});
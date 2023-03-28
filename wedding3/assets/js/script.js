// 이미지
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


// 지도
const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
const options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(36.78974500920024, 127.17467974675908), //지도의 중심좌표.
	level: 4 //지도의 레벨(확대, 축소 정도)
};

const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

const markerPosition  = new kakao.maps.LatLng(36.78974500920024, 127.17467974675908); 

// 마커를 생성합니다
const marker = new kakao.maps.Marker({
  position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);


// 카카오 네비 연결
Kakao.init('de450455a52442b40dc28fb0bac53673'); // 사용하려는 앱의 JavaScript 키 입력
function startNavigation() {
  Kakao.Navi.start({
    name: '천안웨딩베리컨벤션',
    x: 127.17467974675908,
    y: 36.78974500920024,
    coordType: 'wgs84',
  });
}

// 스와이퍼
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


// 갤러리 버튼
const galleryMoreBtn = document.querySelector('.gallery-more-btn');
const galleryContents = document.querySelector('.gallery-contents');

galleryMoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (galleryContents.classList.contains('is-hide')) {
    galleryContents.classList.remove('is-hide');
  }
  galleryMoreBtn.remove();
});
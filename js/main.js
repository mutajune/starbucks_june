let search_el = document.querySelector(".search");
let search_input = search_el.querySelector("input");

search_el.addEventListener("click", function () {
  search_input.focus();
});

search_input.addEventListener("focus", function () {
  search_el.classList.add("focused");
  search_input.setAttribute("placeholder", "통합검색");
});

search_input.addEventListener("blur", function () {
  search_el.classList.remove("focused");
  search_input.setAttribute("placeholder", "");
});

let badge_el = document.querySelector("header .badges");
//lodash 사용 > _.throttle(함수,시간)
//gsap 사용 > gsap.to(요소,지속시간,옵션)
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      gsap.to(badge_el, 0.6, {
        display: "none",
        opacity: 0,
      });
      // badge_el.style.display = "none";
      gsap.to("#to-top", 0.2, {
        x: 0,
        opacity: 1,
      });
    } else {
      gsap.to(badge_el, 0.6, {
        display: "block",
        opacity: 1,
      });
      gsap.to("#to-top", 0.2, {
        x: 100,
        opacity: 0,
      });
      // badge_el.style.display = "block";
    }
  }, 300)
);

let to_top_el = document.querySelector("#to-top");
to_top_el.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

let fade_els = document.querySelectorAll(".fade-in");
fade_els.forEach(function (fade_el, index) {
  gsap.to(fade_el, 1, {
    delay: (index + 1) * 0.5,
    opacity: 1,
  });
});

new Swiper(".notice_line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, //한번에 보여줄 슬라이드
  spaceBetween: 10, //여백
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지번호
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  slidesPerView: 5, //한번에 보여줄 슬라이드
  spaceBetween: 30, //여백
  centeredSlides: true,
  loop: true,
  autoplay: true,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

let promotion_El = document.querySelector(".promotion");
let promotion_toffle_btn = document.querySelector(".toggle_promotion");
let is_hide_promotion = false;
promotion_toffle_btn.addEventListener("click", function () {
  is_hide_promotion = !is_hide_promotion;
  if (is_hide_promotion) {
    promotion_El.classList.add("hide");
  } else {
    promotion_El.classList.remove("hide");
  }
});

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floating_object(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floating_object(".floating1", 1, 15);
floating_object(".floating2", 0.5, 15);
floating_object(".floating3", 1.5, 20);

let spy_els = document.querySelectorAll("section.scroll_spy");
spy_els.forEach(function (spy_els) {
  new ScrollMagic.Scene({
    // 감시할 장면(Scene)을 추가
    triggerElement: spy_els, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
  })
    .setClassToggle(spy_els, "show") // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});

let this_year = document.querySelector(".this_year");
this_year.textContent = new Date().getFullYear();

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
    } else {
      gsap.to(badge_el, 0.6, {
        display: "block",
        opacity: 1,
      });
      // badge_el.style.display = "block";
    }
  }, 300)
);

let fade_els = document.querySelectorAll(".fade-in");
fade_els.forEach(function (fade_el, index) {
  gsap.to(fade_el, 1, {
    delay: (index + 1) * 0.5,
    opacity: 1,
  });
});

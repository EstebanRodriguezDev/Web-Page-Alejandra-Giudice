var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});

let dropMenuOne = document.querySelector("#menu-one");
let dropDownOne = document.querySelector("#down-one");
let dropMenuTwo = document.querySelector("#menu-two");
let dropDownTwo = document.querySelector("#down-two");

// dropdown

dropMenuOne.addEventListener("click", (e) => {
  e.preventDefault();
  dropDownOne.classList.toggle("show");
});

dropMenuTwo.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("more-content")) {
    dropDownTwo.classList.toggle("show");
  }
});

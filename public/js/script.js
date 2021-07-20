let ubicacionPrincipal = window.pageYOffset;
const btnUp = document.querySelector(".scroll-up-btn");

AOS.init();

// Navigation scroll
window.addEventListener("scroll", () => {
  let desplazamientoActual = window.pageYOffset;
  if (ubicacionPrincipal >= desplazamientoActual) {
    document.getElementsByTagName("nav")[0].style.top = "0px";
  } else {
    document.getElementsByTagName("nav")[0].style.top = "-100px";
  }
  ubicacionPrincipal = desplazamientoActual;
});

// Menu hamburguer + clip Path
let enlacesHeader = document.querySelectorAll(".navigation__links")[0];
let hamburguer = document.querySelector(".hamburguer i");
let body = document.querySelector("body");
let semaforo = true;

hamburguer.addEventListener("click", () => {
  if (semaforo) {
    document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
    enlacesHeader.style.opacity = "1";
    semaforo = false;
  } else {
    document.querySelectorAll(".hamburguer")[0].style.color = "#000";
    enlacesHeader.style.opacity = "0";
    semaforo = true;
  }
  enlacesHeader.classList.toggle("menu__clip-path");
  enlacesHeader.style.transition = "ease-in-out 1s";
  if (enlacesHeader.classList.contains("menu__clip-path")) {
    hamburguer.classList.remove("fa-bars");
    hamburguer.classList.add("fa-times");
    body.classList.add("remove-scroll");
  } else {
    hamburguer.classList.remove("fa-times");
    hamburguer.classList.add("fa-bars");
    body.classList.remove("remove-scroll");
    console.log("Funciona");
  }
});

// Menu redirect

let enlaces = document.querySelectorAll(".navigation__links a");

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    if (e.target === enlace) {
      enlacesHeader.classList.toggle("menu__clip-path");
      hamburguer.classList.remove("fa-times");
      hamburguer.classList.add("fa-bars");
      document.querySelectorAll(".hamburguer")[0].style.color = "#000";
      semaforo = true;
    }
  });
});

// Btn up
window.onscroll = function () {
  if (document.documentElement.scrollTop > 500) {
    btnUp.classList.add("show");
  } else {
    btnUp.classList.remove("show");
  }
};

btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

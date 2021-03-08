const imagenes = document.querySelectorAll(".project__img");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    aparecerImagen(imagen.getAttribute("src"));
    imagen.getAttribute("src");
  });
});

contenedorLight.addEventListener("click", (e) => {
  if (e.target !== imagenesLight) {
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showimage");
  }
});

const aparecerImagen = (imagen) => {
  imagenesLight.src = imagen;
  contenedorLight.classList.toggle("show");
  imagenesLight.classList.toggle("showimage");
};

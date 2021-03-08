// Show more cards

const projectBtn = document.querySelector(".projects__btn");

const cards = document.querySelectorAll(".show__more");

projectBtn.addEventListener("click", (e) => {
  while (e.target === projectBtn) {
    cards.forEach((card) => {
      card.style.display = "block";
    });
    if (projectBtn.textContent == "Más") {
      projectBtn.innerHTML = "Menos";
    } else if (projectBtn.textContent == "Menos") {
      cards.forEach((cartas) => {
        cartas.style.display = "none";
      });
      projectBtn.innerHTML = "Más";
    }
    return;
  }
});

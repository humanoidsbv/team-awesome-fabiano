const toggleButton = document.querySelector(".header__button");
const menu = document.querySelector(".nav-menu");
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("togglebutton--hamburger");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

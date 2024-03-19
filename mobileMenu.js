const menu = document.querySelector(".header__right__menu");
const mobileMenu = document.querySelector(".header__mobile");
const closeMenu = document.querySelector(".header__mobile__close");

menu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hide");
  mobileMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  mobileMenu.classList.add("hide");
});
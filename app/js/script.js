const hamburger = document.querySelector(".navbar__hamburger");
const navMenu = document.querySelector(".navbar__list");
const navLink = document.querySelectorAll(".navbar__link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("navbar__hamburger--active");
  navMenu.classList.toggle("navbar__list--active");
}

function closeMenu() {
  hamburger.classList.remove("navbar__hamburger--active");
  navMenu.classList.remove("navbar__list--active");
}

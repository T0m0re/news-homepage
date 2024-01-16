const buttonToggle = document.querySelector("#nav-icon1");
const mobileMenu = document.querySelector(".mobile-menu");

buttonToggle.addEventListener("click", function () {
  mobileMenu.classList.toggle("open");
  buttonToggle.classList.toggle("open");
});

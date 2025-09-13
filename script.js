const btnSearch = document.querySelector('.btn-search');
const logo = document.querySelector('.logo');
const input = document.querySelector('.input-search');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav')
const menuLinks = document.querySelectorAll(".menu a");
const body = document.body;
const buttonTop = document.querySelector(".button-top");

btnSearch.addEventListener("click", () => {
  input.classList.toggle("active");
  logo.classList.toggle("active-logo");
});

burger.addEventListener('click', () => {
    burger.classList.toggle("active-burger");
    nav.classList.toggle('active-nav');
    body.classList.toggle("menu-open");
});


menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuLinks.forEach((l) => l.classList.remove("active-link"));
    link.classList.add("active-link");
    burger.classList.remove('active-burger');
    nav.classList.remove("active-nav");
      body.classList.remove("menu-open");
  });
});

//Scroll
window.addEventListener("scroll", function () {
    const windowScrollTop = window.scrollY;
    if (windowScrollTop > 250) {
        !buttonTop.classList.contains("is-active") ? buttonTop.classList.add("is-active") : null;
    } else {
        buttonTop.classList.contains("is-active") ? buttonTop.classList.remove("is-active") : null;
    };
});
buttonTop.addEventListener("click", (event) => {
	event.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
})
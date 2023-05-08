//Seleção de elementos
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

const desktopLinks = document.querySelectorAll("#navbar");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks, ...mobileLinks];

const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

// Funções
function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });

}


const form = document.querySelector('form');
const submitButton = form.querySelector('.submit');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.createElement('p');
  message.textContent = 'Formulário enviado!';
  message.classList.add('message'); // adiciona a classe 'message'
  submitButton.insertAdjacentElement('afterend', message);
});
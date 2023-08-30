const mobilieMenu = document.querySelector('.mobile-menu-overlay');
const burgerButton = document.querySelector('.burger-button');
const burgerButtonClose = document.querySelector(".burger-button-close");

burgerButton.addEventListener('click', () => mobilieMenu.style.display = 'block');
burgerButtonClose.addEventListener('click', () => mobilieMenu.style.display = 'none');
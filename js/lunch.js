const hamburgerMenu = document.querySelector('.mobile__menu');
const headerNavigation = document.querySelector('.header__navigation');
const overlay = document.querySelector('.overlay');

hamburgerMenu.addEventListener('click', function () {
  headerNavigation.classList.toggle('active');
  overlay.classList.toggle('overlay--active');
});

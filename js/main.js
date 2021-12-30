// Start Navigation Section
const hamburgerMenu = document.querySelector('.mobile__menu');
const headerNavigation = document.querySelector('.header__navigation');
const overlay = document.querySelector('.overlay');

hamburgerMenu.addEventListener('click', function () {
  headerNavigation.classList.toggle('active');
  overlay.classList.toggle('overlay--active');
});
// End Navigation Section

// Start Week Menu Section

const menuListItems = document.querySelectorAll('.menu__list li');

menuListItems.forEach((item) =>
  item.addEventListener('click', function () {
    for (let i = 0; i < menuListItems.length; i++) {
      menuListItems[i].classList.remove('menu__list__item--active');
      this.classList.add('menu__list__item--active');
    }
  })
);
// End Week Menu Section

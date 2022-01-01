// Start Navigation Section
const hamburgerMenu = document.querySelector('.mobile__menu');
const headerNavigation = document.querySelector('.header__navigation');
const overlay = document.querySelector('.overlay');

hamburgerMenu.addEventListener('click', function () {
  headerNavigation.classList.toggle('active');
  overlay.classList.toggle('overlay--active');
});
// End Navigation Section

// Start Day Menu Section
const choiceOneBtn = document.querySelector('.choice-one-btn');
const choiceTwoBtn = document.querySelector('.choice-two-btn');
const choiceOneCard = document.querySelector('.choice-one-card');
const choiceTwoCard = document.querySelector('.choice-two-card');

choiceOneBtn.addEventListener('click', function () {
  choiceTwoCard.classList.remove('card__overlay--active');
  choiceOneCard.classList.add('card__overlay--active');
});

choiceTwoBtn.addEventListener('click', function () {
  choiceOneCard.classList.remove('card__overlay--active');
  choiceTwoCard.classList.add('card__overlay--active');
});
// End Day Menu Section

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

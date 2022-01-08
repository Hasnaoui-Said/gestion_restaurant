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

const menuItems = document.querySelectorAll('.menu__item');

menuListItems.forEach((item) =>
  item.addEventListener('click', function () {
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].style.display = 'none';
    }

    menuItems.forEach((item) => {
      if (item.classList.contains(this.dataset.day)) {
        item.style.display = 'block';
      }
    });
  })
);
// End Week Menu Section

// Start Popup Details
let detailsButtons = document.querySelectorAll('.details__btn');
let menuDetails = document.querySelector('.menu--details');
let detailsClose = document.querySelector('.details__close');

detailsButtons.forEach((button) => {
  button.addEventListener('click', function () {
    menuDetails.classList.add('menu--details--show');
  });
});

detailsClose.addEventListener('click', function () {
  menuDetails.classList.remove('menu--details--show');
});
// End Popup Details

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

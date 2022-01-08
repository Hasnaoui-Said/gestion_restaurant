const reservationButtons = document.querySelectorAll('.card__btn');
const lunchPopup = document.querySelector('.lunch--popup');
const lunchPopupClose = document.querySelector('.lunch--popup__close');
const cancelButton = document.querySelector('.cancel--button');
const conformButton = document.querySelector('.conform--button');
const popupConfirmation = document.querySelector('.popup__confirmation');
const popupSucced = document.querySelector('.popup__succed');
const goBackLink = document.querySelector('.go--back-link');
const platCards = document.querySelectorAll('.card__overlay');

reservationButtons.forEach((button) => {
  button.addEventListener('click', function () {
    for (let i = 0; i < reservationButtons.length; i++) {
      reservationButtons[i].childNodes[1].disabled = false;
      popupConfirmation.style.display = 'block';
      popupSucced.style.display = 'none';
    }

    for (let i = 0; i < platCards.length; i++) {
      platCards[i].classList.remove('card__overlay--active');
    }

    lunchPopup.classList.add('lunch--popup--active');
    selectedCard = this.parentElement.querySelector('.card__overlay');

    conformButton.addEventListener('click', function () {
      selectedCard.classList.add('card__overlay--active');
      popupConfirmation.style.display = 'none';
      popupSucced.style.display = 'block';

      for (let i = 0; i < reservationButtons.length; i++) {
        reservationButtons[i].childNodes[1].disabled = false;
      }
      button.querySelector('.btn').disabled = true;
    });
  });
});

lunchPopupClose.addEventListener('click', function () {
  lunchPopup.classList.remove('lunch--popup--active');
});

cancelButton.addEventListener('click', function () {
  lunchPopup.classList.remove('lunch--popup--active');
});

goBackLink.addEventListener('click', function () {
  lunchPopup.classList.remove('lunch--popup--active');
});

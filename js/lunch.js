// Start Day Menu Section
const choiceOneBtn = document.querySelector('.choice-one-btn');
const choiceTwoBtn = document.querySelector('.choice-two-btn');
const choiceOneCard = document.querySelector('.choice-one-card');
const choiceTwoCard = document.querySelector('.choice-two-card');
const lunchPopup = document.querySelector('.lunch--popup');
const lunchPopupClose = document.querySelector('.lunch--popup__close');
const confirmButton = document.querySelector('.popup__buttons button.second');
const cancelButton = document.querySelector('.popup__buttons button.first');
const goBackLink = document.querySelector('.go--back--link');
const popupConfirmation = document.querySelector('.popup__confirmation');
const popupSucced = document.querySelector('.popup__succed');

choiceOneBtn.addEventListener('click', function () {
  lunchPopup.classList.add('lunch--popup--active');
});

choiceTwoBtn.addEventListener('click', function () {
  lunchPopup.classList.add('lunch--popup--active');
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

confirmButton.addEventListener('click', function () {
  popupConfirmation.style.display = 'none';
  popupSucced.style.display = 'block';
  choiceTwoCard.classList.add('card__overlay--active');
});

// End Day Menu Section
choiceTwoCard.classList.remove('card__overlay--active');
// choiceOneCard.classList.add('card__overlay--active');

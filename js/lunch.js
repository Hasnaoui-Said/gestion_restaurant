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

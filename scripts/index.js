const containerElement = document.querySelector('.container');
const authorProfile = containerElement.querySelector('.container__title');
const aboutProfile = containerElement.querySelector('.container__subtitle');
const popupOpenButtonElement = containerElement.querySelector('.container__popup-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const formElement = popupElement.querySelector('.popup__form');
const authorInput = formElement.querySelector('.popup__input_author');
const aboutInput = formElement.querySelector('.popup__input_about');
const popupSaveButtonElement = formElement.querySelector('.popup__save-button');

const closePopup = function () {
  popupElement.classList.add('popup_is_opened');
}

const openPopup = function () {
  popupElement.classList.remove('popup_is_opened');
}

const closePopupByClickOnOverlay = function(event) {
  console.log(event.target, event.currentTarget)
  if (event.target !== event.currentTarget) {
    return
  }

  closePopup()
}

const addTextProfile = function(evt) {
  evt.preventDefault()
  authorProfile.textContent = authorInput.value
  aboutProfile.textContent = aboutInput.value
  closePopup()
}

popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)
popupElement.addEventListener('click', closePopupByClickOnOverlay)
popupElement.addEventListener('submit', addTextProfile)
const containerElement = document.querySelector('.container');
const authorProfile = containerElement.querySelector('.container__title');
const aboutProfile = containerElement.querySelector('.container__subtitle');
const popupOpenButtonElement = containerElement.querySelector('.container__popup-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const formElement = popupElement.querySelector('.popup__form');
const authorInput = formElement.querySelector('.popup__input_type_author');
const aboutInput = formElement.querySelector('.popup__input_type_about');
const popupSaveButtonElement = formElement.querySelector('.popup__save-button');

const openPopup = function () {
  authorInput.value = authorProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
  popupElement.classList.add('popup__opened');
}

const closePopup = function () {
  popupElement.classList.remove('popup__opened');
}

const closePopupByClickOnOverlay = function(event) {
  if (event.target !== event.currentTarget) {
    return
  }

  closePopup()
}


const addTextProfile = function(evt) {
  evt.preventDefault()
  authorProfile.textContent = authorInput.value;
  aboutProfile.textContent = aboutInput.value;
  closePopup()
}



popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)
popupElement.addEventListener('click', closePopupByClickOnOverlay)
formElement.addEventListener('submit', addTextProfile)
import {Card} from './Card.js';
import {FormValidator} from "./FormValidator.js";


const containerElement = document.querySelector('.container');
const authorProfile = containerElement.querySelector('.container__title');
const aboutProfile = containerElement.querySelector('.container__subtitle');
const popupOpenButtonElement = containerElement.querySelector('.container__popup-button');
const popupOpenButtonElementProfile = document.querySelector('.profile__button');
const cardsElement = document.querySelector('.cards');
const cardsTemplate = document.querySelector('.cards-template').content;
const listCards = cardsElement.querySelector('.cards__list');
const nameCards = cardsElement.querySelector('.card__text');
const linkCards = cardsElement.querySelector('.card__image');
const popupElement = document.querySelector('.popup_type_user');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const formElement = popupElement.querySelector('.popup__form');
const authorInput = formElement.querySelector('.popup__input_type_author');
const aboutInput = formElement.querySelector('.popup__input_type_about');
const popupElementCards = document.querySelector('.popup_type_cards');
const popupCloseButtonElementCards = popupElementCards.querySelector('.popup__close-button');
const formElementCards = popupElementCards.querySelector('.popup__form');
const nameInput = formElementCards.querySelector('.popup__input_type_name');
const linkInput = formElementCards.querySelector('.popup__input_type_link');
const popupElementImage = document.querySelector('.popup_type_cards-image');
const popupCloseButtonImage = popupElementImage.querySelector('.popup__close-button');
const imageCard = popupElementImage.querySelector('.popup__image');
const figcaptionCard = popupElementImage.querySelector('.popup__figcaption');
// ↑ Объявляем DOM элементы ↑



const renderCard = (data, wrap) => {
  const card = new Card(data.name, data.link, cardsTemplate, openImagePopup);
  wrap.prepend(card.rendering());
};

initialCards.forEach ((element) => {
  renderCard({
    name: element.name,
    link: element.link
  }, listCards);
});

function openImagePopup (name, link) {
  openPopup(popupElementImage)
  imageCard.src = link;
  imageCard.alt = name;
  figcaptionCard.textContent = name;
}

const addNewCard = (evt) => {
  evt.preventDefault();
  renderCard({
    name: nameInput.value,
    link: linkInput.value
  }, listCards);
  closePopup(popupElementCards);
  formElementCards.reset();
  validateCards.toggleButtonState()
  validateCards.resetValidation()
}

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  inputInvalidClass: 'popup__input_type_invalid'
}

const validateProfile = new FormValidator (config, formElement)
validateProfile.enableValidation();
const validateCards = new FormValidator (config, formElementCards)
validateCards.enableValidation();

function openProfilePopup (profilePopup) {
  authorInput.value = authorProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
  openPopup(profilePopup);
  validateProfile.resetValidation()
}
// ↑ Функция открытия popup для профиля ↑

export const openPopup = (selectedPopup) => {
  selectedPopup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByClickOnEsc)
}
// ↑ Универсальная функция открытия popup ↑

export const closePopup = (selectedPopup) => {
  selectedPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByClickOnEsc)
}
// ↑ Универсальная функция закрытия popup ↑

const closePopupByClickOnOverlay = (event) => {
  if (event.target !== event.currentTarget) {
    return
  }

  closePopup(event.target);
}
// ↑ Универсальная функция закрытия popup по нажатию на оверлей ↑

const closeByClickOnEsc = (event) => {
  const key = event.key
  if (key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
    }
}
// ↑ Универсальная функция закрытия popup по нажатию кнопки Esc ↑

const addTextProfile = (evt) => {
  evt.preventDefault()
  authorProfile.textContent = authorInput.value;
  aboutProfile.textContent = aboutInput.value;
  closePopup(popupElement);
}
// ↑ Функция добавления текста профиля на страницу ↑

popupOpenButtonElement.addEventListener('click', () => openProfilePopup(popupElement));
popupCloseButtonElement.addEventListener('click', () => closePopup(popupElement));
popupElement.addEventListener('click', closePopupByClickOnOverlay);
formElement.addEventListener('submit', addTextProfile);
popupOpenButtonElementProfile.addEventListener('click', () => openPopup(popupElementCards));
popupCloseButtonElementCards.addEventListener('click', () => closePopup(popupElementCards));
popupElementCards.addEventListener('click', closePopupByClickOnOverlay);
popupCloseButtonImage.addEventListener('click', () => closePopup(popupElementImage));
popupElementImage.addEventListener('click', closePopupByClickOnOverlay);
popupElementCards.addEventListener('submit', addNewCard)
// ↑ Слушатели  ↑




/*
  const inputList = Array.from(formElementCards.querySelectorAll('.popup__input'));
  const buttonElement = formElementCards.querySelector('.popup__save-button');
  const inactiveButtonClass = 'popup__save-button_inactive';
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
 */
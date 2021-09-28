import {Card} from './Card.js';
import {FormValidator} from "./FormValidator.js";
import {initialCards} from "./InitialCards.js";
import {Section} from "./Section.js";
import {PopupWithImage} from "./PopupWithImage.js";


const containerElement = document.querySelector('.container');
const authorProfile = containerElement.querySelector('.container__title');
const aboutProfile = containerElement.querySelector('.container__subtitle');
const popupOpenButtonElement = containerElement.querySelector('.container__popup-button');
const popupOpenButtonElementProfile = document.querySelector('.profile__button');
const cardsElement = document.querySelector('.cards');
const cardsTemplate = document.querySelector('.cards-template').content;
const listCards = cardsElement.querySelector('.cards__list');
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

// ↑ Объявляем DOM элементы ↑

const imagePopup = new PopupWithImage(popupElementImage)
function handleCardClick(link, name) {
  imagePopup.open(link, name);
  imagePopup.setEventListeners()
}

const cardList = new Section(
  {items: initialCards,
    renderer: (item) => renderCard(item)},
  listCards
)
cardList.rendererItem()

function renderCard (item) {
  const card = new Card(item, cardsTemplate, handleCardClick);
  cardList.addItem(card.rendering())
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

const addTextProfile = (evt) => {
  evt.preventDefault()
  authorProfile.textContent = authorInput.value;
  aboutProfile.textContent = aboutInput.value;
  closePopup(popupElement);
}
// ↑ Функция добавления текста профиля на страницу ↑

popupOpenButtonElement.addEventListener('click', () => openProfilePopup(popupElement));
popupCloseButtonElement.addEventListener('click', () => closePopup(popupElement));
formElement.addEventListener('submit', addTextProfile);
popupOpenButtonElementProfile.addEventListener('click', () => openPopup(popupElementCards));
popupCloseButtonElementCards.addEventListener('click', () => closePopup(popupElementCards));
popupElementCards.addEventListener('submit', addNewCard)
// ↑ Слушатели  ↑


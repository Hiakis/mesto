
export const user = {
  authorProfile: '.container__title',
  aboutProfile: '.container__subtitle'
}
export const containerElement = document.querySelector('.container');
export const authorProfile = containerElement.querySelector('.container__title');
export const aboutProfile = containerElement.querySelector('.container__subtitle');
export const popupOpenButtonElement = containerElement.querySelector('.container__popup-button');
export const popupOpenButtonElementProfile = document.querySelector('.profile__button');
export const cardsElement = document.querySelector('.cards');
export const cardsTemplate = document.querySelector('.cards-template').content;
export const listCards = cardsElement.querySelector('.cards__list');
export const popupElement = document.querySelector('.popup_type_user');
export const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
export const formElement = popupElement.querySelector('.popup__form');
export const authorInput = formElement.querySelector('.popup__input_type_author');
export const aboutInput = formElement.querySelector('.popup__input_type_about');
export const popupElementCards = document.querySelector('.popup_type_cards');
export const popupCloseButtonElementCards = popupElementCards.querySelector('.popup__close-button');
export const formElementCards = popupElementCards.querySelector('.popup__form');
export const nameInput = formElementCards.querySelector('.popup__input_type_name');
export const linkInput = formElementCards.querySelector('.popup__input_type_link');
export const popupElementImage = document.querySelector('.popup_type_cards-image');
export const popupCloseButtonImage = popupElementImage.querySelector('.popup__close-button');

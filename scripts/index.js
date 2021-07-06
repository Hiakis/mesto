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



function setEventDeleted(cardsTemplateElement) {
  cardsTemplateElement.querySelector('.card__delete').addEventListener('click', cardsDeleted);
}


function cardsDeleted(evt) {
  const cardsTemplateElement = evt.target.closest('.card');
  cardsTemplateElement.remove();
}



function setEventLikes(cardsTemplateElement) {
  cardsTemplateElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
}


function createCard (newName, newLink) {
  const cardsTemplateElement = cardsTemplate.cloneNode(true);
  setEventDeleted(cardsTemplateElement);
  setEventLikes(cardsTemplateElement);
  cardsTemplateElement.querySelector('.card__text').textContent = newName;

  const imageCards = cardsTemplateElement.querySelector('.card__image');

  imageCards.src = newLink;
  imageCards.alt = newName;

  const openCardPopup = (cardPopup) => {
    openPopup(cardPopup);
    imageCard.src = newLink;
    imageCard.alt = newName;
    figcaptionCard.textContent = newName;
  }

  imageCards.addEventListener('click', () => openCardPopup(popupElementImage));
  popupCloseButtonImage.addEventListener('click', () => closePopup(popupElementImage));

  return cardsTemplateElement;
}

initialCards.forEach (function (element) {
  listCards.append(createCard(element.name, element.link));
});

const addNewCard = (evt) => {
  evt.preventDefault();
  const newName = nameInput.value;
  const newLink = linkInput.value;
  listCards.prepend(createCard(newName, newLink));
  closePopup(popupElementCards);
  nameInput.value.reset();
  linkInput.value.reset();
}


function openProfilePopup (profilePopup) {
  authorInput.value = authorProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
  openPopup(profilePopup);
}

const openPopup = (selectedPopup) => {
  selectedPopup.classList.add('popup_opened');
}


const closePopup = (selectedPopup) => {
  selectedPopup.classList.remove('popup_opened');
}


const closePopupByClickOnOverlay = (event) => {
  if (event.target !== event.currentTarget) {
    return
  }

  closePopup(event.target);
}


const addTextProfile = (evt) => {
  evt.preventDefault()
  authorProfile.textContent = authorInput.value;
  aboutProfile.textContent = aboutInput.value;
  closePopup(popupElement);
}


popupOpenButtonElement.addEventListener('click', () => openProfilePopup(popupElement));
popupCloseButtonElement.addEventListener('click', () => closePopup(popupElement));
popupElement.addEventListener('click', closePopupByClickOnOverlay);
formElement.addEventListener('submit', addTextProfile);
popupOpenButtonElementProfile.addEventListener('click', () => openPopup(popupElementCards));
popupCloseButtonElementCards.addEventListener('click', () => closePopup(popupElementCards));
popupElementCards.addEventListener('click', closePopupByClickOnOverlay);
popupElementImage.addEventListener('click', closePopupByClickOnOverlay);
formElementCards.addEventListener('submit', addNewCard);
// ↑ Слушатели  ↑
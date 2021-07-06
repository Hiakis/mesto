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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


function setIventDeleted(cardsTemplateElement) {
  cardsTemplateElement.querySelector('.card__delete').addEventListener('click', cardsDeleted);
}


function cardsDeleted(evt) {
  const cardsTemplateElement = evt.target.closest('.card');
  cardsTemplateElement.remove();
}



function setIventLikes(cardsTemplateElement) {
  cardsTemplateElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
}


function createCard (newName, newLink) {
  const cardsTemplateElement = cardsTemplate.cloneNode(true);
  setIventDeleted(cardsTemplateElement);
  setIventLikes(cardsTemplateElement);
  cardsTemplateElement.querySelector('.card__text').textContent = newName;

  const imageCards = cardsTemplateElement.querySelector('.card__image');

  imageCards.src = newLink;
  imageCards.alt = newName;

  const openPopup = () => {
    popupElementImage.classList.add('popup_opened');
    imageCard.src = newLink;
    imageCard.alt = newName;
    figcaptionCard.textContent = newName;
  }

  imageCards.addEventListener('click', () => openPopup());

  const closePopup = () => {
    popupElementImage.classList.remove('popup_opened');
  }

  popupCloseButtonImage.addEventListener('click', () => closePopup());

  const closePopupByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
      return
    }

    closePopup();
  }
  popupElementImage.addEventListener('click', closePopupByClickOnOverlay);

  return cardsTemplateElement;
}

initialCards.forEach (function (element) {
  listCards.append(createCard(element.name, element.link));
});

const addNewCard = (evt) => {
  evt.preventDefault();
  const newName = nameInput.value;
  const newLink = linkInput.value;
  listCards.append(createCard(newName, newLink));
  closePopup(popupElementCards);
  nameInput.value = "";
  linkInput.value = "";
}


const openPopup = (selectedPopup) => {
  authorInput.value = authorProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
  selectedPopup.classList.add('popup_opened');
}


const closePopup = (selectedPopup) => {
  selectedPopup.classList.remove('popup_opened');
}


const closePopupByClickOnOverlay = (event) => {
  if (event.target !== event.currentTarget) {
    return
  }

  closePopup(popupElement) || closePopup(popupElementCards);
}


const addTextProfile = (evt) => {
  evt.preventDefault()
  authorProfile.textContent = authorInput.value;
  aboutProfile.textContent = aboutInput.value;
  closePopup(popupElement);
}


popupOpenButtonElement.addEventListener('click', () => openPopup(popupElement));
popupCloseButtonElement.addEventListener('click', () => closePopup(popupElement));
popupElement.addEventListener('click', closePopupByClickOnOverlay);
formElement.addEventListener('submit', addTextProfile);
popupOpenButtonElementProfile.addEventListener('click', () => openPopup(popupElementCards));
popupCloseButtonElementCards.addEventListener('click', () => closePopup(popupElementCards));
popupElementCards.addEventListener('click', closePopupByClickOnOverlay);
formElementCards.addEventListener('submit', addNewCard);
// ↑ Слушатели  ↑
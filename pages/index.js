import {Card} from '../scripts/components/Card.js';
import {FormValidator} from "../scripts/components/FormValidator.js";
import {initialCards} from "../scripts/utils/InitialCards.js";
import {Section} from "../scripts/components/Section.js";
import {PopupWithImage} from "../scripts/components/PopupWithImage.js";
import {UserInfo} from "../scripts/components/UserInfo.js";
import {PopupWithForm} from "../scripts/components/PopupWithForm.js";
import {popupOpenButtonElementProfile, popupOpenButtonElement, user, aboutInput, authorInput, popupElementCards,
  popupElement, popupElementImage, listCards, formElement, cardsTemplate, formElementCards, linkInput, nameInput} from "../scripts/utils/constants.js";
import {config} from "../scripts/utils/config.js";

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



const validateProfile = new FormValidator (config, formElement)
validateProfile.enableValidation();
const validateCards = new FormValidator (config, formElementCards)
validateCards.enableValidation();

const profileInfo = new UserInfo({nameSelector: user.authorProfile, aboutSelector: user.aboutProfile})
const editProfile = new PopupWithForm(popupElement, userFormSubmit)
const addCard = new PopupWithForm(popupElementCards, cardFormSubmit)

function userFormSubmit({name, about}) {
  profileInfo.setUserInfo({name, about})
  editProfile.close()
}

function cardFormSubmit() {
  renderCard({
    name: nameInput.value,
    link: linkInput.value
  }, listCards);
  formElementCards.reset();
  validateCards.toggleButtonState()
  validateCards.resetValidation()
  addCard.close()
}

function editProfilePopup() {
  editProfile.open()
  authorInput.value = profileInfo.getUserInfo().name
  aboutInput.value = profileInfo.getUserInfo().about
}

function editCardPopup() {
  addCard.open()
}

popupOpenButtonElementProfile.addEventListener('click', editCardPopup)
popupOpenButtonElement.addEventListener('click', editProfilePopup);


addCard.setEventListeners()
editProfile.setEventListeners()
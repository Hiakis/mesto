import {Card} from './scripts/components/Card.js';
import {FormValidator} from "./scripts/components/FormValidator.js";
import {initialCards} from "./scripts/utils/InitialCards.js";
import {Section} from "./scripts/components/Section.js";
import {PopupWithImage} from "./scripts/components/PopupWithImage.js";
import {UserInfo} from "./scripts/components/UserInfo.js";
import {PopupWithForm} from "./scripts/components/PopupWithForm.js";
import {popupOpenButtonElementProfile, popupOpenButtonElement, user, aboutInput, authorInput, popupElementCards,
  popupElementProfile, popupElementImage, listCards, formElementProfile, cardsTemplate, formElementCards, linkInput, nameInput} from "./scripts/utils/constants.js";
import {config} from "./scripts/utils/config.js";
import './pages/index.css'

const imagePopup = new PopupWithImage(popupElementImage)
function handleCardClick(link, name) {
  imagePopup.open(link, name);
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



const validateProfile = new FormValidator (config, formElementProfile)

const validateCards = new FormValidator (config, formElementCards)


const profileInfo = new UserInfo({nameSelector: user.authorProfile, aboutSelector: user.aboutProfile})
const editProfile = new PopupWithForm(popupElementProfile, userFormSubmit)
const addCard = new PopupWithForm(popupElementCards, cardFormSubmit)

function userFormSubmit({name, about}) {
  profileInfo.setUserInfo({name, about})
}



function cardFormSubmit() {
  renderCard({
    name: nameInput.value,
    link: linkInput.value
  }, listCards);
  formElementCards.reset();
  validateCards.resetValidation()
}

function editProfilePopup() {
  editProfile.open()
  authorInput.value = profileInfo.getUserInfo().name
  aboutInput.value = profileInfo.getUserInfo().about
}

function editCardPopup() {
  addCard.open()
  validateCards.toggleButtonState()
}

popupOpenButtonElementProfile.addEventListener('click', editCardPopup)
popupOpenButtonElement.addEventListener('click', editProfilePopup);

imagePopup.setEventListeners()
addCard.setEventListeners()
editProfile.setEventListeners()
validateProfile.enableValidation();
validateCards.enableValidation();
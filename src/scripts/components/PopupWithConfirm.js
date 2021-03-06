import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._submitHandler = handleFormSubmit;
  }

  open(card, cardId, deleteCard) {
    super.open();
    this._cardId = cardId;
    this._card = card;
    this.deleteCard = deleteCard;
  }

  cardId() {
    return this._cardId;
  }

  setEventListeners() {
    super.setEventListeners();
    this._selectorPopup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler(this._card, this._cardId, this.deleteCard);
    });
  }
}
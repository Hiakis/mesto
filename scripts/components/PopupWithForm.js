import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selectorPopup, handleFormSubmit) {
    super(selectorPopup);
    this._handleFormSubmit = handleFormSubmit
    this._inputList = this._selectorPopup.querySelectorAll('.popup__input')
  }


  _getInputValues() {
    this._newValues = {}
    this._inputList.forEach((inputElement) => {
      this._newValues[inputElement.name] = inputElement.value
    })
    return this._newValues
  }

  setEventListeners() {
    super.setEventListeners();
    this._form = this._selectorPopup.querySelector('.popup__form');
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
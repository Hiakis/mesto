import {Popup} from "./Popup";

export class PopupWithForm extends Popup {
  constructor(submit, selectorPopup) {
    super(selectorPopup);
    this._submit = submit
    this._popupForm = this._selectorPopup.querySelector('.popup__form')
    this._inputList = this._popupForm.querySelectorAll('.popup__input')
    this._popupButton = this._popupForm.querySelector('.popup__button')
  }

  _getInputValues() {
    this._newValues = {}
    this._inputList.forEach((inputElement) => {
      this._newValues[inputElement.name] = inputElement.value
    })
    return this._newValues
  }

  setEventListeners() {
    super.setEventListeners()
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._submit(this._getInputValues())
    })
  }

}
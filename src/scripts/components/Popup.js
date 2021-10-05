export default class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = selectorPopup
  };

  open() {
    this._selectorPopup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose)
  };

  close() {
    this._selectorPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose)
  };

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close()
    }
  };

  setEventListeners() {
    this._selectorPopup.querySelector('.popup__close-button').addEventListener('click', () => this.close());
    this._selectorPopup.addEventListener('mousedown', (event) => {
      this._closeByClickOnOverlay(event)
    });
  };


  _closeByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
      return
    }
    this.close(event.target);
  };

}
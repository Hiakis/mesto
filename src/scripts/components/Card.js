export class Card {
  constructor(data, cardTemplate, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick
  }


  rendering = () => {
    this._newCard = this._cardTemplate.querySelector('.card').cloneNode(true);
    this._cardText = this._newCard.querySelector('.card__text');
    this._cardImage = this._newCard.querySelector('.card__image');
    this._cardDelete = this._newCard.querySelector('.card__delete');
    this._cardLike = this._newCard.querySelector('.card__like');

    this._cardText.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners()

    return this._newCard
  }


  _setEventListeners() {
    this._cardDelete.addEventListener('click', () => {
      this._evtDelete()
    });
    this._cardLike.addEventListener('click', (evt) => {
      this._evtLike(evt)
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    })
  }

  _evtDelete () {
    this._newCard.remove();
  }

  _evtLike (evt) {
    evt.target.classList.toggle('card__like_active')
  }
}
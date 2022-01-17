export class Card {
  constructor(card, templateSelector, userId,{ onCardClick, onRemoveButtonClick, onLikeButtonClick }) {
    this._card = card;
    this._templateSelector = templateSelector;
    this._onCardClick = onCardClick;
    this._userId = userId;
    this._onRemoveButtonClick = onRemoveButtonClick;
    this._onLikeButtonClick = onLikeButtonClick;

    this._onRemoveButtonClick = this._onRemoveButtonClick.bind(this);
    this._removeButtonHandler = this._removeButtonHandler.bind(this);
    this._onLikeButtonClick = this._onLikeButtonClick.bind(this);
    this._toggleLike = this._toggleLike.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.setLikes = this.setLikes.bind(this);

  }



  generateCard() {
    this._getTemplate();

    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.card__image');
    this._elementTitle = this._element.querySelector('.card__text');
    this._removeButton = this._element.querySelector('.card__delete');
    this._likeButton = this._element.querySelector('.card__like');
    this._likeCounter = this._element.querySelector('.card__like-counter');

    this._setEventListeners();

    this._elementTitle.textContent = this._card.name;
    this._elementImage.src = this._card.link;
    this._elementImage.alt = this._card.name;
    this._likeCounter.textContent = this._card.likes.length;
    this._elementId = this._card._id;

    if (!(this._userId === this._card.owner._id)) {
      this._removeButton.style.display = "none";
    }

    this._card.likes.forEach(element => {
      if (element._id === this._userId) {
        this._likeButton.classList.add('card__like_active');
      }
    });

    return this._element;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._removeButton.addEventListener('click', this._removeButtonHandler);
    this._likeButton.addEventListener('click', this._toggleLike);

    this._elementImage.addEventListener('click', () => this._onCardClick(this._card.link, this._card.name));
  }

  _toggleLike(evt) {
    this._onLikeButtonClick(evt.target, this._elementId);
  }

  _removeButtonHandler() {
    this._onRemoveButtonClick(this._element, this._elementId, this.removeCard);
  }

  removeCard() {
    this._element.remove();
  }

  setLikes(likes) {
    this._likeButton.classList.toggle('card__like_active');
    this._likeCounter.textContent = likes.length;
  }
};
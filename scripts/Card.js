export class Card {
  constructor(name, link, cardTemplate, openImagePopup) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate;
    this._openImagePopup = openImagePopup
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
    this._cardDelete.addEventListener('click', (evt) => {
      this._evtDelete(evt)
    });
    this._cardLike.addEventListener('click', (evt) => {
      this._evtLike(evt)
    });
    this._cardImage.addEventListener('click', () => {
      this._openImage()
    })
  }

  _evtDelete (evt) {
    evt.target.closest('.card').remove();
  }

  _evtLike (evt) {
    evt.target.classList.toggle('card__like_active')
  }

  _openImage () {
    this._openImagePopup(this._name, this._link)
  }
}







/*
function setEventDeleted(cardsTemplateElement) {
  cardsTemplateElement.querySelector('.card__delete').addEventListener('click', handleDeleteCard);
}


function handleDeleteCard(evt) {
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

  return cardsTemplateElement;
}
*/
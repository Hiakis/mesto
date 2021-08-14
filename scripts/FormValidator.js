export class FormValidator {
  constructor(option, formElement) {
    this._formSelector = option.formSelector
    this._inputSelector = option.inputSelector
    this._submitButtonSelector = option.submitButtonSelector
    this._inactiveButtonClass = option.inactiveButtonClass
    this._inputErrorClass = option.inputErrorClass
    this._inputInvalidClass = option.inputInvalidClass
    this._formElement = formElement
  }

  _showInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputInvalidClass)
    errorElement.textContent = this._errorMessage;
    errorElement.classList.add(this._inputErrorClass);
  }

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputInvalidClass)
    errorElement.textContent = '';
    errorElement.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity = (inputElement) => {
    this._isInputNotValid = !inputElement.validity.valid
    if (this._isInputNotValid) {
      this._errorMessage = inputElement.validationMessage;
      this._showInputError(inputElement)
    } else {
      this._hideInputError (inputElement)
    }
  }

  toggleButtonState = () => {
    this._hasNotValidInput = this._inputList.some(
      (inputElement) => !inputElement.validity.valid
    );

    if (this._hasNotValidInput) {
      this._buttonElement.setAttribute("disabled", true);
      this._buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._buttonElement.removeAttribute("disabled")
      this._buttonElement.classList.remove(this._inactiveButtonClass)
    }
  }

   _setEventListeners () {

    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement)
        this.toggleButtonState(inputElement);
      });
    });
  };


  resetValidation () {
    this.toggleButtonState()
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    })
  };

  enableValidation () {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    });
    this._setEventListeners ()
  };
}








/*
  const showInputError = (formElement, inputElement, errorMessage, inputErrorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(inputErrorClass);
}

const hideInputError = (formElement, inputElement, inputErrorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = '';
  errorElement.classList.remove(inputErrorClass);
}

const checkInputValidity = (formElement, inputElement, inputErrorClass, inputInvalidClass) => {
  const isInputNotValid = !inputElement.validity.valid

  if (isInputNotValid) {
    const errorMessage = inputElement.validationMessage;
    inputElement.classList.add(inputInvalidClass)
    showInputError(formElement, inputElement, errorMessage, inputErrorClass)
  } else {
    inputElement.classList.remove(inputInvalidClass)
    hideInputError(formElement, inputElement, inputErrorClass)
  }
};


const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  const hasNotValidInput = inputList.some(
    (inputElement) => !inputElement.validity.valid
  );

  if (hasNotValidInput) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.removeAttribute("disabled")
    buttonElement.classList.remove(inactiveButtonClass)
  }
}


const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, inputInvalidClass) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, inputErrorClass, inputInvalidClass)
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
  toggleButtonState(inputList, buttonElement, inactiveButtonClass)
};


const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, inputInvalidClass}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, inputInvalidClass)
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  inputInvalidClass: 'popup__input_type_invalid'
});
 */







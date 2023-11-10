
function showError(inputElement, errorElement, config) {
    inputElement.classList.add(config.inputErrorClass)
    errorElement.textContent = inputElement.validationMessage;
}

function hideError(inputElement, errorElement, config) {
    inputElement.classList.remove(config.inputErrorClass)
    errorElement.textContent = inputElement.validationMessage;
}

function checkInputValidity(inputElement, formElement, config) {
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    if(isInputValid) {
        hideError(inputElement, errorElement, config)
    } else {
        showError(inputElement, errorElement, config)
    }

    console.log(errorElement);
}


function toggleButtonState(buttonElement, isActive, config){   
    if(isActive) {
        buttonElement.disabled = false;
        buttonElement.classList.remove(config.inactiveButtonClass)
    } else {
        buttonElement.classList.add(config.inactiveButtonClass)
        buttonElement.disabled = 'disabled';
    }
}

function setEvenetListener(formElement, config) {
    const inputList = formElement.querySelectorAll(config.inputSelector);
    const submitButtonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(submitButtonElement, formElement.checkValidity(), config);

    [...inputList].forEach(function(inputElement){
        inputElement.addEventListener('input', function(){
            toggleButtonState(submitButtonElement, formElement.checkValidity(), config);
            checkInputValidity(inputElement, formElement, config);
        })
    })
    formElement.addEventListener('submit', function(env){
        env.preventDefault();
    })
}


function enableValidation(config) {
    const formsList = document.querySelectorAll(config.formSelector);
    [...formsList].forEach(function(formElement){
       setEvenetListener(formElement, config)
    })
}

const configForm = {
    formSelector: ".popup__content",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_invalid",
    inputErrorClass: "popup__input_state_invalid",
  };

enableValidation(configForm);
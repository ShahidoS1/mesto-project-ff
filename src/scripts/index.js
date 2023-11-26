import '../pages/index.css';
import { initialCards } from "./components/cards.js";
import { openPopup, closePopup} from "./components/modal.js";
import { createElement } from "./components/card.js";
// import {  } from "./validation.js";
const profileEditButton = document.querySelector('.profile__edit-button')
const popupProfile = document.querySelector('.popup_type_edit')
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close')
const formEditProfileForm = document.querySelector('.popup__content')
const nameInput = formEditProfileForm.querySelector('.popup__input_text_name')
const jobInput = formEditProfileForm.querySelector('.popup__input_text_job')
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')
const buttonEdit = document.querySelector('.popup__button_edit')
const buttonOpenpenPopupPlace = document.querySelector('.profile__add-button')
const popupPlace = document.querySelector('.popup_place_add')
const buttonClosePopupPlace = popupPlace.querySelector('.popup__close')

const container = document.querySelector('.elements')
// const cardTemplate = document.querySelector('.template-element').content;

const btnSubmitCard = popupPlace.querySelector('.popup__button_create');
const nameCard = popupPlace.querySelector('.popup__input_place_name');
const linkCard = popupPlace.querySelector('.popup__input_place_image');

profileEditButton.addEventListener('click', function() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

buttonClosePopupProfile.addEventListener('click', function () {
  closePopup(popupProfile);
});


// Находим форму в DOM
function submitEditProfileForm (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    // blockButton(buttonEdit);
    closePopup(popupProfile);
    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditProfileForm.addEventListener('submit', submitEditProfileForm); 

buttonOpenpenPopupPlace.addEventListener('click', function () {
  openPopup(popupPlace);
});

buttonClosePopupPlace.addEventListener('click', function () {
  closePopup(popupPlace);
});


function addCards(cards) {
  cards.forEach((cardData) => {
    const cardItem = createElement(cardData.name, cardData.link, cardData.alt_name,  openImagePopup);
    container.appendChild(cardItem);
  });
  
}

addCards(initialCards);



function addCard(cardData) {
  const cardItem = createElement(cardData.name, cardData.link, cardData.alt_name, openImagePopup);
  nameCard.value = "";
  linkCard.value = "";
  container.prepend(cardItem);
  

}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  addCard({
    name: nameCard.value,
    link: linkCard.value,
    alt_name: nameCard.value,
  });
  closePopup(popupPlace);
}

btnSubmitCard.addEventListener('click', handleCardFormSubmit);

// popup картинки карточки

const popupImage = document.querySelector('.popup_type_image');
const popupImageImage = document.querySelector('.popup__image');
const popupImageDiscription = document.querySelector('.popup__caption');
const cardImage = document.querySelector('.element__img');
const closePopupImageBtn = popupImage.querySelector('.popup__close');
const cardName = document.querySelector('.element__place');

function openImagePopup(name, link) {
  openPopup(popupImage);
  
  popupImageImage.src = link;
  popupImageImage.alt = name;
  popupImageDiscription.textContent = name;
}

closePopupImageBtn.addEventListener('click', function () {
  closePopup(popupImage);
});

function activateButton(button) {
  button.removeAttribute("disabled");
  button.classList.remove(`popup__button_invalid`);
}

function blockButton(button) {
  button.setAttribute("disabled", true);
  button.classList.add(`popup__button_invalid`);
}


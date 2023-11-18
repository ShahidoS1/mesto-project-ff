import '../pages/index.css';
import { initialCards } from "./components/cards.js";
import { openPopup, closePopup} from "./components/modal.js";
import { addNewCard, createElement } from "./components/card.js";
// import {  } from "./validation.js";
const profileEditButton = document.querySelector('.profile__edit-button')
const popupProfile = document.querySelector('.popup_type_edit')
const closePopupProfileBtn = popupProfile.querySelector('.popup__close')
const formEditProfileForm = document.querySelector('.popup__content')
const nameInput = formEditProfileForm.querySelector('.popup__input_text_name')
const jobInput = formEditProfileForm.querySelector('.popup__input_text_job')
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')
const buttonEdit = document.querySelector('.popup__button_edit')
const openPopupPlaceBtn = document.querySelector('.profile__add-button')
const popupPlace = document.querySelector('.popup_place_add')
const closePopupPlaceBtn = popupPlace.querySelector('.popup__close')

const container = document.querySelector('.elements')
// const cardTemplate = document.querySelector('.template-element').content;

const btnSubmitCard = popupPlace.querySelector('.popup__button_create');
// const nameCard = popupPlace.querySelector('.popup__input_place_name');
// const linkCard = popupPlace.querySelector('.popup__input_place_image');

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener("keydown", closeByEscape);
//   popup.addEventListener("mousedown", closeOnOverlay);
// };

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.addEventListener("keydown", closeByEscape);
//   popup.addEventListener("mousedown", closeOnOverlay);
// }

profileEditButton.addEventListener('click', function() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

closePopupProfileBtn.addEventListener('click', function () {
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
    blockButton(buttonEdit);
    closePopup(popupProfile);
    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditProfileForm.addEventListener('submit', submitEditProfileForm); 

openPopupPlaceBtn.addEventListener('click', function () {
  openPopup(popupPlace);
});
closePopupPlaceBtn.addEventListener('click', function () {
  closePopup(popupPlace);
});

// делаем 6 готовых карточек,лайки и удаление

// const createElement = (name, link) => {
//   const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
//   cardElement.querySelector('.element__place').textContent = name;
//   const cardPhoto = cardElement.querySelector('.element__img');
//   cardPhoto.src = link;
//   cardPhoto.alt = name;

//   cardElement.querySelector('.element__like').addEventListener('click', evt => evt.target.classList.toggle('element__like_active'));

//   cardElement.querySelector('.element__delete').addEventListener('click', () => cardElement.remove());

//   cardElement.querySelector('.element__img').addEventListener('click', () => {
//     openPopup(popupImage);

//     popupImageImage.src = link;
//     popupImageImage.alt = name;
//     popupImageDiscription.textContent = name;
//   })

//   return cardElement;
  
// }

const renderInitialCards = () => {
  initialCards.forEach(addcard => container.append(createElement(addcard.name, addcard.link)));
}

renderInitialCards();

// // добавляем карточку

// const addNewCard = evt => {
//   evt.preventDefault();
//   container.prepend(createElement(nameCard.value, linkCard.value));
//   nameCard.value = "";
//   linkCard.value = "";
//   closePopup(popupPlace);
//   blockButton(btnSubmitCard);
// }

btnSubmitCard.addEventListener('click', addNewCard);

// popup картинки карточки

const popupImage = document.querySelector('.popup_type_image');
// const popupImageImage = popupImage.querySelector('.popup__image');
// const popupImageDiscription = popupImage.querySelector('.popup__caption');
const cardImage = document.querySelector('.element__img');
const closePopupImageBtn = popupImage.querySelector('.popup__close');
const cardName = document.querySelector('.element__place');

closePopupImageBtn.addEventListener('click', function () {
  closePopup(popupImage);
});

// закрываем по нажатию Escape

// function closeByEscape(evt) {
//   if (evt.key === "Escape") {
//     const popup = document.querySelector(`.popup_opened`);
//     closePopup(popup);
//   }
// }

// // закрываем по Overlay

// function closeOnOverlay(evt) {
//   if (evt.target === evt.currentTarget) 
//   closePopup(evt.currentTarget);
// };

function activateButton(button) {
  button.removeAttribute("disabled");
  button.classList.remove(`popup__button_invalid`);
}

function blockButton(button) {
  button.setAttribute("disabled", true);
  button.classList.add(`popup__button_invalid`);
}

 function openImgPopup(link, name) {
  const popupImageImage = popupImage.querySelector('.popup__image');
  const popupImageDiscription = popupImage.querySelector('.popup__caption');
  popupImageImage.src = link;
  popupImageImage.alt = name;
  popupImageDiscription.textContent = name;
  openPopup(popupImage);
}
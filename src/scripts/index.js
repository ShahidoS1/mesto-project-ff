import '../pages/index.css';

import { createCard, likeCard, getCardForDeletion } from "./components/card.js";

import { openPopup, closePopup } from "./components/modal.js";

import { enableValidation, clearValidation, validationConfig } from "./components/validation.js";

import { getUserInfo, getInitialCards, getInitialInfo, deleteMyCard, editProfile, postNewCard, updateNewAvatar } from "./components/api.js";

import { showLoadingBtn } from "./components/utils.js";

/// для создания карточки
const cardTemplate = document.querySelector("#card-template").content;
const placesList = document.querySelector(".elements");

/// Функция добавления карточки
function addCard(
  card,
  placesList,
  cardTemplate,
  createCard,
  likeCard,
  showImgPopup,
  openDeletePopup,
  profileId
) {
  const cardElement = createCard(
    card,
    cardTemplate,
    likeCard,
    showImgPopup,
    openDeletePopup,
    profileId
  );
  placesList.append(cardElement);
}

/// Функция заполнения страницы карточками
function fillCards(initialCards, profileId) {
  initialCards.forEach((card) => {
    addCard(
      card,
      placesList,
      cardTemplate,
      createCard,
      likeCard,
      showImgPopup,
      openDeletePopup,
      profileId
    );
  });
}

/// Popup редактирования профиля
const editPopup = document.querySelector(".popup_type_edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const editForm = document.forms["edit-profile"];
const nameInput = editForm.querySelector(".popup__input_text_name");
const jobInput = editForm.querySelector(".popup__input_text_job");
const profileTitle = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__job");
const editSaveButton = editPopup.querySelector(".popup__button");

// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close');

// с окончанием `s` нужно обязательно, так как много кнопок
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});


profileEditButton.addEventListener("click", () => {
  openPopup(editPopup);
  fillPopupEditInputs();
  clearValidation(editForm, validationConfig);
});

// closeEditButton.addEventListener("click", () => {
//   closePopup(editPopup);
// });

/// Функция сохранения полей ввода формы
function fillPopupEditInputs() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
}


/// Функция редактирования профиля
function handleEditForm(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  showLoadingBtn(true, editSaveButton);
  editSaveButton.disabled = true;
  editProfile(nameValue, jobValue)
    .then((res) => {
      profileTitle.textContent = res.name;
      profileDescription.textContent = res.about;
      closePopup(editPopup);
    })
    .catch((error) => {
      console.log(error);
      editSaveButton.disabled = false;
    })
    .finally(() => {
      showLoadingBtn(false, editSaveButton);
    });
}

editForm.addEventListener("submit", handleEditForm);

/// Popup добавления карточек
const addCardPopup = document.querySelector(".popup_place_add");
const openAddButton = document.querySelector(".profile__add-button");
const addForm = document.querySelector('form[name="new-place"]');
const cardInput = addForm.querySelector(".popup__input_place_name");
const linkInput = addForm.querySelector(".popup__input_place_image");
const addSaveButton = addCardPopup.querySelector(".popup__button");

openAddButton.addEventListener("click", () => {
  openPopup(addCardPopup);
  addForm.reset();
  clearValidation(addForm, validationConfig);
});

/// Функция загрузки с сервера и добавления карточек на страницу
function handleAddForm(evt) {
  evt.preventDefault();
  const cardValue = cardInput.value;
  const linkValue = linkInput.value;
  showLoadingBtn(true, addSaveButton);
  addSaveButton.disabled = true;
  postNewCard(cardValue, linkValue)
    .then((card) => {
      const newCard = createCard(
        card,
        cardTemplate,
        likeCard,
        showImgPopup,
        openDeletePopup,
        profileId
      );
      placesList.prepend(newCard);
      closePopup(addCardPopup);
    })
    .catch((error) => {
      console.log(error);
      addSaveButton.disabled = false;
    })
    .finally(() => {
      showLoadingBtn(false, addSaveButton);
    });
}

addForm.addEventListener("submit", handleAddForm);

/// Popup увеличение картинок
const imgPopup = document.querySelector(".popup_type_image");
const zoomedPopupImage = imgPopup.querySelector(".popup__image");
const imgPopupCaption = imgPopup.querySelector(".popup__caption");

/// Функция показа Popup увеличения картинок
function showImgPopup(evt) {
  openPopup(imgPopup);
  zoomedPopupImage.setAttribute("src", evt.target.src);
  zoomedPopupImage.setAttribute("alt", evt.target.alt);
  imgPopupCaption.textContent = evt.target.alt;
}

/// Popup редактирования аватара
const profileImageButton = document.querySelector(".profile__avatar-edit");
const avatarImage = document.querySelector(".profile__avatar");
const avatarPopup  = document.querySelector(".popup_type_avatar");
const avatarForm = document.forms["avatar_edit"];
const avatarInput = avatarForm.querySelector(".popup__input_avatar_image");
const avatarSaveButton = avatarPopup.querySelector(".popup__button");

profileImageButton.addEventListener("click", () => {
  openPopup(avatarPopup);
  avatarForm.reset();
  clearValidation(avatarForm, validationConfig);
});

/// Функция смены аватара
function handleAvatarForm(evt) {
  evt.preventDefault();
  const linkValue = avatarInput.value;
  showLoadingBtn(true, avatarSaveButton);
  avatarSaveButton.disabled = true;
  updateNewAvatar(linkValue)
    .then((res) => {
      avatarImage.style.backgroundImage = `url('${res.avatar}')`;
      closePopup(avatarPopup);
    })
    .catch((error) => {
      console.log(error);
      avatarSaveButton.disabled = false;
    })
    .finally(() => {
      showLoadingBtn(false, avatarSaveButton);
    });
}

avatarForm.addEventListener("submit", handleAvatarForm);

/// Popup удаления карточки с сервера
const deletePopup = document.querySelector(".popup_delete_card");
const closeDeleteButton = deletePopup.querySelector(".popup__close");
const deleteForm = document.forms["delete-card"];

const openDeletePopup = () => {
  openPopup(deletePopup);
};

const closeDeletePopup = () => {
  closePopup(deletePopup);
};

closeDeleteButton.addEventListener("click", closeDeletePopup);

/// Функция удаления карточки
function deleteThisCard({ cardId, deleteButton }) {
  deleteMyCard(cardId)
    .then(() => {
      const deleteItem = deleteButton.closest(".element");
      deleteItem.remove();
      closeDeletePopup();
    })
    .catch(console.error);
}

///функция подтверждения удаления карточки
function handleDeleteForm(evt) {
  evt.preventDefault();
  deleteThisCard(getCardForDeletion());
}

deleteForm.addEventListener("submit", handleDeleteForm);

///вызов функции получение информации о пользователе и карточках с сервера и заполнение ими страницы
let profileId;

Promise.all([getUserInfo(), getInitialCards()])
  .then((array) => {
    const [userList, initialCards] = array;
    profileTitle.textContent = userList.name;
    profileDescription.textContent = userList.about;
    profileId = userList._id;
    avatarImage.style.backgroundImage = `url(${userList.avatar})`;
    fillCards(initialCards, profileId);
  })
  .catch(console.error);

///валидация
enableValidation(validationConfig);
const cardTemplate = document.querySelector('.template-element').content;

export const createElement = (name, link, openImgPopup) => {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__place').textContent = name;
  const cardPhoto = cardElement.querySelector('.element__img');
  cardPhoto.src = link;
  cardPhoto.alt = name;

  cardElement.querySelector('.element__like').addEventListener('click', evt => evt.target.classList.toggle('element__like_active'));

  cardElement.querySelector('.element__delete').addEventListener('click', () => cardElement.remove());

  cardElement.querySelector('.element__img').addEventListener('click', (name, link) => {
    openImgPopup(name, link);
  })

  return cardElement;
  
}

// const popupImageImage = popupImage.querySelector('.popup__image');
// const popupImageDiscription = popupImage.querySelector('.popup__caption');
// const nameCard = popupPlace.querySelector('.popup__input_place_name');
// const linkCard = popupPlace.querySelector('.popup__input_place_image');
// добавляем карточку

export  const addNewCard = evt => {
  evt.preventDefault();
  container.prepend(createElement(nameCard.value, linkCard.value));
  nameCard.value = "";
  linkCard.value = "";
  closePopup(popupPlace);
  blockButton(btnSubmitCard);
}

// btnSubmitCard.addEventListener('click', addNewCard);
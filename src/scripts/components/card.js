import { putLike, deleteLike } from "./api.js";

let currentCardId, currentDeleteButton;

export function likeCard(likeButton, likeCounter, cardId) {
  const likeMethod = likeButton.classList.contains(
    "element__like_active"
  )
    ? deleteLike
    : putLike;
  likeMethod(cardId)
    .then((updatedCard) => {
      likeButton.classList.toggle("element__like_active");
      likeCounter.textContent = updatedCard.likes.length;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function createCard(
  card,
  cardTemplate,
  likeCard,
  showImgPopup,
  openDeletePopup,
  profileId
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".element__img");
  const cardTitle = cardElement.querySelector(".element__place");
  const deleteButton = cardElement.querySelector(".element__delete");
  const likeButton = cardElement.querySelector(".element__like");
  const likeCounter = cardElement.querySelector(".element__like-count");
  const cardId = card._id;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;
  likeCounter.textContent = card.likes.length;

  ///проверка лайка
  const isLiked = card.likes.some((like) => like._id === profileId);
  if (isLiked) {
    likeButton.classList.add("element__like_active");
  }

  likeButton.addEventListener("click", () => {
    likeCard(likeButton, likeCounter, cardId);
  });

  cardImage.addEventListener("click", showImgPopup);

  /// проверка на авторство карточки
  if (card.owner._id !== profileId) {
    deleteButton.classList.add("element__delete-unactive");
  } else {
    /// Удаление карточки
    deleteButton.addEventListener("click", () => {
      currentCardId = cardId;
      currentDeleteButton = deleteButton;
      openDeletePopup();
    });
  }

  return cardElement;
}

export function getCardForDeletion() {
  return { cardId: currentCardId, deleteButton: currentDeleteButton };
}
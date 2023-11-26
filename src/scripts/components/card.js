const cardTemplate = document.querySelector('.template-element').content;

export function createElement(name, link, alt_name, openImagePopup) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardItem = cardElement.querySelector('.element');
  const likeButton = cardItem.querySelector('.element__like');
  const imgButton = cardItem.querySelector('.element__img');
  const deleteButton = cardItem.querySelector('.element__delete');

  imgButton.src = link;
  cardItem.querySelector('.element__place').textContent = name;
  imgButton.alt = name;

  likeButton.addEventListener('click', evt => evt.target.classList.toggle('element__like_active'));

  deleteButton.addEventListener('click', () => cardItem.remove());

  imgButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    openImagePopup(name,link);
  });

  return cardItem;
}
export {openPopup, closePopup}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", closeByEscape);
  popup.addEventListener("mousedown", closeOnOverlay);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened'); 
  document.removeEventListener("keydown", closeByEscape);
  popup.removeEventListener("mousedown", closeOnOverlay);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(`.popup_opened`);
    closePopup(popup);
  }
}

// закрываем по Overlay

function closeOnOverlay(evt) {
  if (evt.target === evt.currentTarget) 
  closePopup(evt.currentTarget);
};
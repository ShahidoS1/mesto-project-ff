/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/card.js":
/*!****************************************!*\
  !*** ./src/scripts/components/card.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElement: () => (/* binding */ createElement)\n/* harmony export */ });\nvar cardTemplate = document.querySelector('.template-element').content;\nfunction createElement(name, link, alt_name, openImagePopup) {\n  var cardElement = cardTemplate.cloneNode(true);\n  var cardItem = cardElement.querySelector('.element');\n  var likeButton = cardItem.querySelector('.element__like');\n  var imgButton = cardItem.querySelector('.element__img');\n  var deleteButton = cardItem.querySelector('.element__delete');\n  imgButton.src = link;\n  cardItem.querySelector('.element__place').textContent = name;\n  imgButton.alt = name;\n  likeButton.addEventListener('click', function (evt) {\n    return evt.target.classList.toggle('element__like_active');\n  });\n  deleteButton.addEventListener('click', function () {\n    return cardItem.remove();\n  });\n  imgButton.addEventListener('click', function (evt) {\n    evt.preventDefault();\n    openImagePopup(name, link);\n  });\n  return cardItem;\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/components/card.js?");

/***/ }),

/***/ "./src/scripts/components/cards.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/cards.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: 'Архыз',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'\n}, {\n  name: 'Челябинская область',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'\n}, {\n  name: 'Иваново',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'\n}, {\n  name: 'Камчатка',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'\n}, {\n  name: 'Холмогорский район',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'\n}, {\n  name: 'Байкал',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'\n}];\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/components/cards.js?");

/***/ }),

/***/ "./src/scripts/components/modal.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   openPopup: () => (/* binding */ openPopup)\n/* harmony export */ });\n\nfunction openPopup(popup) {\n  popup.classList.add('popup_opened');\n  document.addEventListener(\"keydown\", closeByEscape);\n  popup.addEventListener(\"mousedown\", closeOnOverlay);\n}\n;\nfunction closePopup(popup) {\n  popup.classList.remove('popup_opened');\n  document.addEventListener(\"keydown\", closeByEscape);\n  popup.addEventListener(\"mousedown\", closeOnOverlay);\n}\nfunction closeByEscape(evt) {\n  if (evt.key === \"Escape\") {\n    var popup = document.querySelector(\".popup_opened\");\n    closePopup(popup);\n  }\n}\n\n// закрываем по Overlay\n\nfunction closeOnOverlay(evt) {\n  if (evt.target === evt.currentTarget) closePopup(evt.currentTarget);\n}\n;\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/components/modal.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards.js */ \"./src/scripts/components/cards.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal.js */ \"./src/scripts/components/modal.js\");\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card.js */ \"./src/scripts/components/card.js\");\n\n\n\n\n// import {  } from \"./validation.js\";\nvar profileEditButton = document.querySelector('.profile__edit-button');\nvar popupProfile = document.querySelector('.popup_type_edit');\nvar buttonClosePopupProfile = popupProfile.querySelector('.popup__close');\nvar formEditProfileForm = document.querySelector('.popup__content');\nvar nameInput = formEditProfileForm.querySelector('.popup__input_text_name');\nvar jobInput = formEditProfileForm.querySelector('.popup__input_text_job');\nvar profileName = document.querySelector('.profile__name');\nvar profileJob = document.querySelector('.profile__job');\nvar buttonEdit = document.querySelector('.popup__button_edit');\nvar buttonOpenpenPopupPlace = document.querySelector('.profile__add-button');\nvar popupPlace = document.querySelector('.popup_place_add');\nvar buttonClosePopupPlace = popupPlace.querySelector('.popup__close');\nvar container = document.querySelector('.elements');\n// const cardTemplate = document.querySelector('.template-element').content;\n\nvar btnSubmitCard = popupPlace.querySelector('.popup__button_create');\nvar nameCard = popupPlace.querySelector('.popup__input_place_name');\nvar linkCard = popupPlace.querySelector('.popup__input_place_image');\nprofileEditButton.addEventListener('click', function () {\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupProfile);\n  nameInput.value = profileName.textContent;\n  jobInput.value = profileJob.textContent;\n});\nbuttonClosePopupProfile.addEventListener('click', function () {\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popupProfile);\n});\n\n// Находим форму в DOM\nfunction submitEditProfileForm(evt) {\n  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.\n  // Так мы можем определить свою логику отправки.\n  // О том, как это делать, расскажем позже.\n\n  // Получите значение полей jobInput и nameInput из свойства value\n  // Выберите элементы, куда должны быть вставлены значения полей\n  profileName.textContent = nameInput.value;\n  profileJob.textContent = jobInput.value;\n  // blockButton(buttonEdit);\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popupProfile);\n  // Вставьте новые значения с помощью textContent\n}\n\n// Прикрепляем обработчик к форме:\n// он будет следить за событием “submit” - «отправка»\nformEditProfileForm.addEventListener('submit', submitEditProfileForm);\nbuttonOpenpenPopupPlace.addEventListener('click', function () {\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupPlace);\n});\nbuttonClosePopupPlace.addEventListener('click', function () {\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popupPlace);\n});\nfunction addCards(cards) {\n  cards.forEach(function (cardData) {\n    var cardItem = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_3__.createElement)(cardData.name, cardData.link, cardData.alt_name, openImagePopup);\n    container.appendChild(cardItem);\n  });\n}\naddCards(_components_cards_js__WEBPACK_IMPORTED_MODULE_1__.initialCards);\nfunction addCard(cardData) {\n  var cardItem = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_3__.createElement)(cardData.name, cardData.link, cardData.alt_name, openImagePopup);\n  nameCard.value = \"\";\n  linkCard.value = \"\";\n  container.prepend(cardItem);\n}\nfunction handleCardFormSubmit(evt) {\n  evt.preventDefault();\n  addCard({\n    name: nameCard.value,\n    link: linkCard.value,\n    alt_name: nameCard.value\n  });\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popupPlace);\n}\nbtnSubmitCard.addEventListener('click', handleCardFormSubmit);\n\n// popup картинки карточки\n\nvar popupImage = document.querySelector('.popup_type_image');\nvar popupImageImage = document.querySelector('.popup__image');\nvar popupImageDiscription = document.querySelector('.popup__caption');\nvar cardImage = document.querySelector('.element__img');\nvar closePopupImageBtn = popupImage.querySelector('.popup__close');\nvar cardName = document.querySelector('.element__place');\nfunction openImagePopup(name, link) {\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupImage);\n  popupImageImage.src = link;\n  popupImageImage.alt = name;\n  popupImageDiscription.textContent = name;\n}\nclosePopupImageBtn.addEventListener('click', function () {\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popupImage);\n});\nfunction activateButton(button) {\n  button.removeAttribute(\"disabled\");\n  button.classList.remove(\"popup__button_invalid\");\n}\nfunction blockButton(button) {\n  button.setAttribute(\"disabled\", true);\n  button.classList.add(\"popup__button_invalid\");\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;
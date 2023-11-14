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

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n\nvar profileEditButton = document.querySelector('.profile__edit-button');\nvar popupProfile = document.querySelector('.popup_type_edit');\nvar closePopupProfileBtn = popupProfile.querySelector('.popup__close');\nvar formEditProfileForm = document.querySelector('.popup__content');\nvar nameInput = formEditProfileForm.querySelector('.popup__input_text_name');\nvar jobInput = formEditProfileForm.querySelector('.popup__input_text_job');\nvar profileName = document.querySelector('.profile__name');\nvar profileJob = document.querySelector('.profile__job');\nvar buttonEdit = document.querySelector('.popup__button_edit');\nvar openPopupPlaceBtn = document.querySelector('.profile__add-button');\nvar popupPlace = document.querySelector('.popup_place_add');\nvar closePopupPlaceBtn = popupPlace.querySelector('.popup__close');\nvar container = document.querySelector('.elements');\nvar cardTemplate = document.querySelector('.template-element').content;\nvar btnSubmitCard = popupPlace.querySelector('.popup__button_create');\nvar nameCard = popupPlace.querySelector('.popup__input_place_name');\nvar linkCard = popupPlace.querySelector('.popup__input_place_image');\nfunction openPopup(popup) {\n  popup.classList.add('popup_opened');\n  document.addEventListener(\"keydown\", closeByEscape);\n  popup.addEventListener(\"mousedown\", closeOnOverlay);\n}\n;\nfunction closePopup(popup) {\n  popup.classList.remove('popup_opened');\n  document.addEventListener(\"keydown\", closeByEscape);\n  popup.addEventListener(\"mousedown\", closeOnOverlay);\n}\nprofileEditButton.addEventListener('click', function () {\n  openPopup(popupProfile);\n  nameInput.value = profileName.textContent;\n  jobInput.value = profileJob.textContent;\n});\nclosePopupProfileBtn.addEventListener('click', function () {\n  closePopup(popupProfile);\n});\n\n// Находим форму в DOM\nfunction submitEditProfileForm(evt) {\n  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.\n  // Так мы можем определить свою логику отправки.\n  // О том, как это делать, расскажем позже.\n\n  // Получите значение полей jobInput и nameInput из свойства value\n  // Выберите элементы, куда должны быть вставлены значения полей\n  profileName.textContent = nameInput.value;\n  profileJob.textContent = jobInput.value;\n  blockButton(buttonEdit);\n  closePopup(popupProfile);\n  // Вставьте новые значения с помощью textContent\n}\n\n// Прикрепляем обработчик к форме:\n// он будет следить за событием “submit” - «отправка»\nformEditProfileForm.addEventListener('submit', submitEditProfileForm);\nopenPopupPlaceBtn.addEventListener('click', function () {\n  openPopup(popupPlace);\n});\nclosePopupPlaceBtn.addEventListener('click', function () {\n  closePopup(popupPlace);\n});\n\n// делаем 6 готовых карточек,лайки и удаление\n\nvar createElement = function createElement(name, link) {\n  var cardElement = cardTemplate.querySelector('.element').cloneNode(true);\n  cardElement.querySelector('.element__place').textContent = name;\n  var cardPhoto = cardElement.querySelector('.element__img');\n  cardPhoto.src = link;\n  cardPhoto.alt = name;\n  cardElement.querySelector('.element__like').addEventListener('click', function (evt) {\n    return evt.target.classList.toggle('element__like_active');\n  });\n  cardElement.querySelector('.element__delete').addEventListener('click', function () {\n    return cardElement.remove();\n  });\n  cardElement.querySelector('.element__img').addEventListener('click', function () {\n    openPopup(popupImage);\n    popupImageImage.src = link;\n    popupImageImage.alt = name;\n    popupImageDiscription.textContent = name;\n  });\n  return cardElement;\n};\nvar renderInitialCards = function renderInitialCards() {\n  initialCards.forEach(function (addcard) {\n    return container.append(createElement(addcard.name, addcard.link));\n  });\n};\nrenderInitialCards();\n\n// добавляем карточку\n\nvar addNewCard = function addNewCard(evt) {\n  evt.preventDefault();\n  container.prepend(createElement(nameCard.value, linkCard.value));\n  nameCard.value = \"\";\n  linkCard.value = \"\";\n  closePopup(popupPlace);\n  blockButton(btnSubmitCard);\n};\nbtnSubmitCard.addEventListener('click', addNewCard);\n\n// popup картинки карточки\n\nvar popupImage = document.querySelector('.popup_type_image');\nvar popupImageImage = popupImage.querySelector('.popup__image');\nvar popupImageDiscription = popupImage.querySelector('.popup__caption');\nvar cardImage = document.querySelector('.element__img');\nvar closePopupImageBtn = popupImage.querySelector('.popup__close');\nvar cardName = document.querySelector('.element__place');\nclosePopupImageBtn.addEventListener('click', function () {\n  closePopup(popupImage);\n});\n\n// закрываем по нажатию Escape\n\nfunction closeByEscape(evt) {\n  if (evt.key === \"Escape\") {\n    var popup = document.querySelector(\".popup_opened\");\n    closePopup(popup);\n  }\n}\n\n// закрываем по Overlay\n\nfunction closeOnOverlay(evt) {\n  if (evt.target === evt.currentTarget) closePopup(evt.currentTarget);\n}\n;\nfunction activateButton(button) {\n  button.removeAttribute(\"disabled\");\n  button.classList.remove(\"popup__button_invalid\");\n}\nfunction blockButton(button) {\n  button.setAttribute(\"disabled\", true);\n  button.classList.add(\"popup__button_invalid\");\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/index.js?");

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
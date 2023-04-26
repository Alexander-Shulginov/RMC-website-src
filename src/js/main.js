//? Для "глубокой проверки" на вложенность используется метод .closest(".css-class") через точку
// if (event.target.closest(".menu__item")) {

//! Не потерять
// menuItem.forEach((el, index) => {
// 	el.addEventListener("click", (event) => {
// 		if (event.target.closest(".menu__list")) {
// 			subMenu[index].classList.toggle(isVisibleClass);
// 		}
// 	});
// });

// const cssActivatedClass = "hero__list--show";
// const cssCrossEffectsClass = "burger__close";
// const btn = document.querySelector(".burger__btn");
// const menu = document.querySelector(".hero__list");

// function toggler(elem, cssClass) {
// 	elem.classList.toggle(cssClass);
// }

// function remover(elem, cssClass) {
// 	elem.classList.remove(cssClass);
// }

// function toggleHandler({ triggerElem, targetElem, eventType, triggerCssClass, targetCssClass }) {
// 	if (triggerElem && targetElem) {
// 		triggerElem.addEventListener(eventType, () => {
// 			toggler(triggerElem, triggerCssClass);
// 			toggler(targetElem, targetCssClass);
// 		});
// 	}
// 	document.addEventListener(eventType, (event) => {
// 		if (!triggerElem.contains(event.target) && !targetElem.contains(event.target)) {
// 			remover(triggerElem, triggerCssClass);
// 			remover(targetElem, targetCssClass);
// 		}
// 	});
// }

// toggleHandler({
// 	triggerElem: btn,
// 	targetElem: menu,
// 	eventType: "click",
// 	triggerCssClass: cssCrossEffectsClass,
// 	targetCssClass: cssActivatedClass,
// });
import burgerMenu from "./burger.js";
import modal from "./contact-modal.js";
import tabs from "./tabs.js"
import showMore from "./show-more.js";

showMore();
tabs();
modal();
burgerMenu();

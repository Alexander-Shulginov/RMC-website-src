let btn = document.querySelector(".burger__btn");
let menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
	btn.classList.toggle("burger__active");
	menu.classList.toggle("isActive");
});

document.addEventListener("click", (event) => {
	if (!menu.contains(event.target) && !btn.contains(event.target)) {
		menu.classList.remove("isActive");
		btn.classList.remove("burger__active");
	}
});
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

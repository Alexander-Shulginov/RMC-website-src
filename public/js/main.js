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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vPyDQlNC70Y8gXCLQs9C70YPQsdC+0LrQvtC5INC/0YDQvtCy0LXRgNC60LhcIiDQvdCwINCy0LvQvtC20LXQvdC90L7RgdGC0Ywg0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPINC80LXRgtC+0LQgLmNsb3Nlc3QoXCIuY3NzLWNsYXNzXCIpINGH0LXRgNC10Lcg0YLQvtGH0LrRg1xuLy8gaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm1lbnVfX2l0ZW1cIikpIHtcblxuLy8hINCd0LUg0L/QvtGC0LXRgNGP0YLRjFxuLy8gbWVudUl0ZW0uZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4vLyBcdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbi8vIFx0XHRpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubWVudV9fbGlzdFwiKSkge1xuLy8gXHRcdFx0c3ViTWVudVtpbmRleF0uY2xhc3NMaXN0LnRvZ2dsZShpc1Zpc2libGVDbGFzcyk7XG4vLyBcdFx0fVxuLy8gXHR9KTtcbi8vIH0pO1xuXG4vLyBjb25zdCBjc3NBY3RpdmF0ZWRDbGFzcyA9IFwiaGVyb19fbGlzdC0tc2hvd1wiO1xuLy8gY29uc3QgY3NzQ3Jvc3NFZmZlY3RzQ2xhc3MgPSBcImJ1cmdlcl9fY2xvc2VcIjtcbi8vIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyX19idG5cIik7XG4vLyBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvX19saXN0XCIpO1xuXG4vLyBmdW5jdGlvbiB0b2dnbGVyKGVsZW0sIGNzc0NsYXNzKSB7XG4vLyBcdGVsZW0uY2xhc3NMaXN0LnRvZ2dsZShjc3NDbGFzcyk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHJlbW92ZXIoZWxlbSwgY3NzQ2xhc3MpIHtcbi8vIFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gdG9nZ2xlSGFuZGxlcih7IHRyaWdnZXJFbGVtLCB0YXJnZXRFbGVtLCBldmVudFR5cGUsIHRyaWdnZXJDc3NDbGFzcywgdGFyZ2V0Q3NzQ2xhc3MgfSkge1xuLy8gXHRpZiAodHJpZ2dlckVsZW0gJiYgdGFyZ2V0RWxlbSkge1xuLy8gXHRcdHRyaWdnZXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAoKSA9PiB7XG4vLyBcdFx0XHR0b2dnbGVyKHRyaWdnZXJFbGVtLCB0cmlnZ2VyQ3NzQ2xhc3MpO1xuLy8gXHRcdFx0dG9nZ2xlcih0YXJnZXRFbGVtLCB0YXJnZXRDc3NDbGFzcyk7XG4vLyBcdFx0fSk7XG4vLyBcdH1cbi8vIFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIChldmVudCkgPT4ge1xuLy8gXHRcdGlmICghdHJpZ2dlckVsZW0uY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhdGFyZ2V0RWxlbS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4vLyBcdFx0XHRyZW1vdmVyKHRyaWdnZXJFbGVtLCB0cmlnZ2VyQ3NzQ2xhc3MpO1xuLy8gXHRcdFx0cmVtb3Zlcih0YXJnZXRFbGVtLCB0YXJnZXRDc3NDbGFzcyk7XG4vLyBcdFx0fVxuLy8gXHR9KTtcbi8vIH1cblxuLy8gdG9nZ2xlSGFuZGxlcih7XG4vLyBcdHRyaWdnZXJFbGVtOiBidG4sXG4vLyBcdHRhcmdldEVsZW06IG1lbnUsXG4vLyBcdGV2ZW50VHlwZTogXCJjbGlja1wiLFxuLy8gXHR0cmlnZ2VyQ3NzQ2xhc3M6IGNzc0Nyb3NzRWZmZWN0c0NsYXNzLFxuLy8gXHR0YXJnZXRDc3NDbGFzczogY3NzQWN0aXZhdGVkQ2xhc3MsXG4vLyB9KTtcbmltcG9ydCBidXJnZXJNZW51IGZyb20gXCIuL2J1cmdlci5qc1wiO1xuaW1wb3J0IG1vZGFsIGZyb20gXCIuL2NvbnRhY3QtbW9kYWwuanNcIjtcbmltcG9ydCB0YWJzIGZyb20gXCIuL3RhYnMuanNcIlxuaW1wb3J0IHNob3dNb3JlIGZyb20gXCIuL3Nob3ctbW9yZS5qc1wiO1xuXG5zaG93TW9yZSgpO1xudGFicygpO1xubW9kYWwoKTtcbmJ1cmdlck1lbnUoKTtcbiJdLCJmaWxlIjoibWFpbi5qcyJ9

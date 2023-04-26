// let btn = document.querySelector(".burger__btn");
// let menu = document.querySelector(".menu");

// btn.addEventListener("click", () => {
// 	btn.classList.toggle("burger__active");
// 	menu.classList.toggle("isActive");
// });

// document.addEventListener("click", (event) => {
// 	if (!menu.contains(event.target) && !btn.contains(event.target)) {
// 		menu.classList.remove("isActive");
// 		btn.classList.remove("burger__active");
// 	}
// });
const burgerMenu = () => {
	const cssBtn = ".burger__btn";
	const cssMenu = ".header__list";
	const cssBtnClose = "burger__close";
	const cssMenuActive = "header__list--active";
	const cssOverFlowHidden = "is-hidden";

	const btn = document.querySelector(cssBtn);
	const menu = document.querySelector(cssMenu);

	btn.addEventListener("click", () => {
		btn.classList.toggle(cssBtnClose);
		menu.classList.toggle(cssMenuActive);
		document.body.classList.toggle(cssOverFlowHidden);
	});

	menu.addEventListener("click", (event) => {
		if (event.target.closest(".header__link")) {
			btn.classList.remove(cssBtnClose);
			menu.classList.remove(cssMenuActive);
			document.body.classList.remove(cssOverFlowHidden);
		}
	});

	function hideAfterSwipeX(hideElem, hideElemCssClass) {
		let startTouchPositionX;
		let swipeLenght = 120;

		hideElem.addEventListener("touchstart", (event) => {
			startTouchPositionX = event.touches[0].clientX;
		});

		hideElem.addEventListener("touchend", (event) => {
			let finishTouchPositionX = event.changedTouches[0].clientX;
			let swipeDistance = startTouchPositionX - finishTouchPositionX;
			if (swipeDistance > swipeLenght) {
				hideElem.classList.toggle(hideElemCssClass);
				btn.classList.remove(cssBtnClose);
				document.body.classList.remove(cssOverFlowHidden);
			}
		});
	}
	hideAfterSwipeX(menu, cssMenuActive);
};

export default burgerMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJidXJnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyX19idG5cIik7XG4vLyBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcblxuLy8gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyBcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYnVyZ2VyX19hY3RpdmVcIik7XG4vLyBcdG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImlzQWN0aXZlXCIpO1xuLy8gfSk7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbi8vIFx0aWYgKCFtZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWJ0bi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4vLyBcdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiaXNBY3RpdmVcIik7XG4vLyBcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJidXJnZXJfX2FjdGl2ZVwiKTtcbi8vIFx0fVxuLy8gfSk7XG5jb25zdCBidXJnZXJNZW51ID0gKCkgPT4ge1xuXHRjb25zdCBjc3NCdG4gPSBcIi5idXJnZXJfX2J0blwiO1xuXHRjb25zdCBjc3NNZW51ID0gXCIuaGVhZGVyX19saXN0XCI7XG5cdGNvbnN0IGNzc0J0bkNsb3NlID0gXCJidXJnZXJfX2Nsb3NlXCI7XG5cdGNvbnN0IGNzc01lbnVBY3RpdmUgPSBcImhlYWRlcl9fbGlzdC0tYWN0aXZlXCI7XG5cdGNvbnN0IGNzc092ZXJGbG93SGlkZGVuID0gXCJpcy1oaWRkZW5cIjtcblxuXHRjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNzc0J0bik7XG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNzc01lbnUpO1xuXG5cdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKGNzc0J0bkNsb3NlKTtcblx0XHRtZW51LmNsYXNzTGlzdC50b2dnbGUoY3NzTWVudUFjdGl2ZSk7XG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKGNzc092ZXJGbG93SGlkZGVuKTtcblx0fSk7XG5cblx0bWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0aWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmhlYWRlcl9fbGlua1wiKSkge1xuXHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoY3NzQnRuQ2xvc2UpO1xuXHRcdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKGNzc01lbnVBY3RpdmUpO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGNzc092ZXJGbG93SGlkZGVuKTtcblx0XHR9XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIGhpZGVBZnRlclN3aXBlWChoaWRlRWxlbSwgaGlkZUVsZW1Dc3NDbGFzcykge1xuXHRcdGxldCBzdGFydFRvdWNoUG9zaXRpb25YO1xuXHRcdGxldCBzd2lwZUxlbmdodCA9IDEyMDtcblxuXHRcdGhpZGVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xuXHRcdFx0c3RhcnRUb3VjaFBvc2l0aW9uWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcblx0XHR9KTtcblxuXHRcdGhpZGVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoZXZlbnQpID0+IHtcblx0XHRcdGxldCBmaW5pc2hUb3VjaFBvc2l0aW9uWCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG5cdFx0XHRsZXQgc3dpcGVEaXN0YW5jZSA9IHN0YXJ0VG91Y2hQb3NpdGlvblggLSBmaW5pc2hUb3VjaFBvc2l0aW9uWDtcblx0XHRcdGlmIChzd2lwZURpc3RhbmNlID4gc3dpcGVMZW5naHQpIHtcblx0XHRcdFx0aGlkZUVsZW0uY2xhc3NMaXN0LnRvZ2dsZShoaWRlRWxlbUNzc0NsYXNzKTtcblx0XHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoY3NzQnRuQ2xvc2UpO1xuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoY3NzT3ZlckZsb3dIaWRkZW4pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdGhpZGVBZnRlclN3aXBlWChtZW51LCBjc3NNZW51QWN0aXZlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1cmdlck1lbnU7XG4iXSwiZmlsZSI6ImJ1cmdlci5qcyJ9

const burgerMenu = () => {
	const cssBtn = '.burger__btn';
	const cssMenu = '.header__list';
	const cssBtnClose = 'burger__close';
	const cssMenuActive = 'header__list--active';
	const cssOverFlowHidden = 'is-hidden';

	const btn = document.querySelector(cssBtn);
	const menu = document.querySelector(cssMenu);

	btn.addEventListener('click', () => {
		btn.classList.toggle(cssBtnClose);
		menu.classList.toggle(cssMenuActive);
		document.body.classList.toggle(cssOverFlowHidden);
	});

	menu.addEventListener('click', (event) => {
		if (event.target.closest('.header__link')) {
			btn.classList.remove(cssBtnClose);
			menu.classList.remove(cssMenuActive);
			document.body.classList.remove(cssOverFlowHidden);
		}
	});

	function hideAfterSwipeX(hideElem, hideElemCssClass) {
		let startTouchPositionX;
		const swipeLenght = 120;

		hideElem.addEventListener('touchstart', (event) => {
			startTouchPositionX = event.touches[0].clientX;
		});

		hideElem.addEventListener('touchend', (event) => {
			const finishTouchPositionX = event.changedTouches[0].clientX;
			const swipeDistance = startTouchPositionX - finishTouchPositionX;
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

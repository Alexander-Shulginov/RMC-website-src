const modalWindow = () => {
	const btn = document.querySelector('.header__btn');
	const btnClose = document.querySelector('.header__close');
	const modalPopUp = document.querySelector('.header__contacts');
	const cssActiveModal = 'header__contacts--active';

	btn.addEventListener('click', () => {
		modalPopUp.classList.add(cssActiveModal);
	});

	btnClose.addEventListener('click', () => {
		modalPopUp.classList.remove(cssActiveModal);
	});
};
export default modalWindow;

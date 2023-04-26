const modal = () => {
	const btn = document.querySelector(".header__btn");
	const btnClose = document.querySelector(".header__close");
	const modal = document.querySelector(".header__contacts");
	const cssActiveModal = "header__contacts--active";

	btn.addEventListener("click", () => {
		modal.classList.add(cssActiveModal);
	});

	btnClose.addEventListener("click", () => {
		modal.classList.remove(cssActiveModal);
	});

};
export default modal;

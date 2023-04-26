const showMore = () => {
	const btn = document.querySelector(".tabs__btn-show-more");
	const tabsItem = document.querySelectorAll(".tabs__item:nth-child(1n + 5");
	btn.addEventListener("click", () => {
		tabsItem.forEach((el) => {
			el.style.display = "block";
			btn.style.display = "none";
		});
	});
};

export default showMore;

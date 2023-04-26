function initMenu() {
	const allMenuItem = document.querySelectorAll(".menu__item");
	const allSubMenu = document.querySelectorAll(".menu__sublist");
	const isVisibleClass = "menu__sublist--visible";
	let activeSubMenu = null;

	allMenuItem.forEach((menuItem) => {
		const subMenu = menuItem.querySelector(".menu__sublist");
		if (subMenu) {
			const showSubMenu = () => {
				allSubMenu.forEach((sub) => {
					if (sub !== subMenu) {
						sub.classList.remove(isVisibleClass);
					}
				});
				subMenu.classList.add(isVisibleClass);
				activeSubMenu = subMenu;
			};
			const hideSubMenu = () => {
				subMenu.classList.remove(isVisibleClass);
				activeSubMenu = null;
			};
			menuItem.addEventListener("mouseenter", showSubMenu);
			menuItem.addEventListener("mouseleave", hideSubMenu);
		}
	});

	document.addEventListener("click", (event) => {
		if (!event.target.closest(".menu__item")) {
			allSubMenu.forEach((subMenu) => {
				subMenu.classList.remove(isVisibleClass);
			});
			activeSubMenu = null;
		}
	});
}

initMenu();

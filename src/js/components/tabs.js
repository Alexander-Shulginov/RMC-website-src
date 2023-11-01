const createTabs = () => {
	//* получаем все табы на странице
	const allTabs = document.querySelectorAll('.tabs');

	//* устанавливаем css класс для управления состоянием кнопки
	// const activeBtnClass = "custom-tabs__btn--active";
	const activeBtnClass = 'tabs-btn-style--active';

	//* устанавливаем css класс для управления состоянием контента
	const activeContentClass = 'tabs__content--active';

	//* устанавливаем каждой кнопки id
	function addBtnsId(tabsBtn) {
		tabsBtn.forEach((el, index) => {
			el.setAttribute('data-order', index + 1);
		});
	}

	//* устанавливаем каждому контенту id
	function addContentsId(tabsContent) {
		tabsContent.forEach((el, index) => {
			el.setAttribute('data-order', index + 1);
		});
	}

	//* удаляем цвет с кнопки
	function resetBtnColor(tabsBtn) {
		tabsBtn.forEach((el) => {
			el.classList.remove(activeBtnClass);
		});
	}

	//* устанавливаем цвет для кнопки
	function setBtnColor(event) {
		event.target.classList.add(activeBtnClass);
	}

	//* логика изменения цвета на кнопках
	function changeColor(tabsBtn) {
		tabsBtn.forEach((el) => {
			el.addEventListener('focusin', (event) => {
				resetBtnColor(tabsBtn);
				setBtnColor(event);
			});
		});
	}

	//* получаем id кнопки на которой произошло событие
	function getCurrentBtnOrder(event) {
		return event.target.getAttribute('data-order');
	}

	//* получаем id контента
	function getContentOrder(item) {
		return item.getAttribute('data-order');
	}

	//* скрываем контент
	function hideTabsContent(tabsContent) {
		tabsContent.forEach((item) => {
			item.classList.remove(activeContentClass);
		});
	}

	//* отображаем контент
	function showTabsContent(event, tabsContent) {
		tabsContent.forEach((item) => {
			//* если id кнопки равен id контенту отобразить контент
			if (getCurrentBtnOrder(event) === getContentOrder(item)) {
				item.classList.add(activeContentClass);
			}
		});
	}

	//* логика скрытия и отображения контента
	function changeContent(tabsBtn, tabsContent) {
		tabsBtn.forEach((item) => {
			item.addEventListener('focusin', (event) => {
				hideTabsContent(tabsContent);
				showTabsContent(event, tabsContent);
			});
		});
	}

	allTabs.forEach((tabsAll) => {
		const tabsBtn = tabsAll.querySelectorAll('.tabs__btn');
		const tabsContent = tabsAll.querySelectorAll('.tabs__content');
		addBtnsId(tabsBtn);
		addContentsId(tabsContent);
		changeColor(tabsBtn);
		changeContent(tabsBtn, tabsContent);
	});
};

export default createTabs;

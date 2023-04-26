function customTabsInit() {
	//* получаем все табы на странице
	const allTabs = document.querySelectorAll(".custom-tabs");

	//* устанавливаем css класс для управления состоянием кнопки
	const activeBtnClass = "custom-tabs__btn--active";

	//* устанавливаем css класс для управления состоянием контента
	const activeContentClass = "custom-tabs__content--active";

	//* устанавливаем каждой кнопки id
	function addBtnsId(tabsBtn) {
		tabsBtn.forEach((el, index) => {
			el.setAttribute("data-order", index + 1);
		});
	}

	//* устанавливаем каждому контенту id
	function addContentsId(tabsContent) {
		tabsContent.forEach((el, index) => {
			el.setAttribute("data-order", index + 1);
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
			el.addEventListener("focusin", (event) => {
				resetBtnColor(tabsBtn);
				setBtnColor(event);
			});
		});
	}

	//* получаем id кнопки на которой произошло событие
	function getCurrentBtnOrder(event) {
		return event.target.getAttribute("data-order");
	}

	//* получаем id контента
	function getContentOrder(item) {
		return item.getAttribute("data-order");
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
			item.addEventListener("focusin", (event) => {
				hideTabsContent(tabsContent);
				showTabsContent(event, tabsContent);
			});
		});
	}

	allTabs.forEach((tabs) => {
		let tabsBtn = tabs.querySelectorAll(".custom-tabs__btn");
		let tabsContent = tabs.querySelectorAll(".custom-tabs__content");
		addBtnsId(tabsBtn);
		addContentsId(tabsContent);
		changeColor(tabsBtn);
		changeContent(tabsBtn, tabsContent);
	});
}

customTabsInit();

//? Я понял как работать со множеством элементов на странице, я разобрался как задавать логику для каждого элемента, не ломая поведение однородных элементов.
//? И так, имеются множество однородных элементов, например табы.
//? Что бы изменить состояние одного элемента, не изменяя состояние других подобных сущностей, необходимо:
//? - Получить все табы const allTabs = document.querySelectorAll(".all-tabs-on-page");
//? - Используя forEach перебрать все вложенные элементы необходимые для работы
//? -	allTabs.forEach((tabs) => {
//? -		let tabsBtn = tabs.querySelectorAll(".custom-tabs__btn");
//? -		addBtnsId(tabsBtn);
//? -	});
//? - В примере выше я перебрал все вложенные кнопки, и передал их как аргумент для функции, которая будет работь с этими элементама

//? - В этом суть, я сначла перебираю все элементы, затем перебираю из дочерние элементы, и эти самые дочерние элементы передаю как аргументы функциям которые с ними работают

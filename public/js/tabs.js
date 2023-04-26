const tabs = () => {
	//* получаем все табы на странице
	const allTabs = document.querySelectorAll(".tabs");

	//* устанавливаем css класс для управления состоянием кнопки
	// const activeBtnClass = "custom-tabs__btn--active";
	const activeBtnClass = "tabs-btn-style--active";

	//* устанавливаем css класс для управления состоянием контента
	const activeContentClass = "tabs__content--active";

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
		let tabsBtn = tabs.querySelectorAll(".tabs__btn");
		let tabsContent = tabs.querySelectorAll(".tabs__content");
		addBtnsId(tabsBtn);
		addContentsId(tabsContent);
		changeColor(tabsBtn);
		changeContent(tabsBtn, tabsContent);
	});
};

export default tabs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0YWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhYnMgPSAoKSA9PiB7XG5cdC8vKiDQv9C+0LvRg9GH0LDQtdC8INCy0YHQtSDRgtCw0LHRiyDQvdCwINGB0YLRgNCw0L3QuNGG0LVcblx0Y29uc3QgYWxsVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic1wiKTtcblxuXHQvLyog0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10LwgY3NzINC60LvQsNGB0YEg0LTQu9GPINGD0L/RgNCw0LLQu9C10L3QuNGPINGB0L7RgdGC0L7Rj9C90LjQtdC8INC60L3QvtC/0LrQuFxuXHQvLyBjb25zdCBhY3RpdmVCdG5DbGFzcyA9IFwiY3VzdG9tLXRhYnNfX2J0bi0tYWN0aXZlXCI7XG5cdGNvbnN0IGFjdGl2ZUJ0bkNsYXNzID0gXCJ0YWJzLWJ0bi1zdHlsZS0tYWN0aXZlXCI7XG5cblx0Ly8qINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8IGNzcyDQutC70LDRgdGBINC00LvRjyDRg9C/0YDQsNCy0LvQtdC90LjRjyDRgdC+0YHRgtC+0Y/QvdC40LXQvCDQutC+0L3RgtC10L3RgtCwXG5cdGNvbnN0IGFjdGl2ZUNvbnRlbnRDbGFzcyA9IFwidGFic19fY29udGVudC0tYWN0aXZlXCI7XG5cblx0Ly8qINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC60LDQttC00L7QuSDQutC90L7Qv9C60LggaWRcblx0ZnVuY3Rpb24gYWRkQnRuc0lkKHRhYnNCdG4pIHtcblx0XHR0YWJzQnRuLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmRlclwiLCBpbmRleCArIDEpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8qINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC60LDQttC00L7QvNGDINC60L7QvdGC0LXQvdGC0YMgaWRcblx0ZnVuY3Rpb24gYWRkQ29udGVudHNJZCh0YWJzQ29udGVudCkge1xuXHRcdHRhYnNDb250ZW50LmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmRlclwiLCBpbmRleCArIDEpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8qINGD0LTQsNC70Y/QtdC8INGG0LLQtdGCINGBINC60L3QvtC/0LrQuFxuXHRmdW5jdGlvbiByZXNldEJ0bkNvbG9yKHRhYnNCdG4pIHtcblx0XHR0YWJzQnRuLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUJ0bkNsYXNzKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vKiDRg9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDRhtCy0LXRgiDQtNC70Y8g0LrQvdC+0L/QutC4XG5cdGZ1bmN0aW9uIHNldEJ0bkNvbG9yKGV2ZW50KSB7XG5cdFx0ZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoYWN0aXZlQnRuQ2xhc3MpO1xuXHR9XG5cblx0Ly8qINC70L7Qs9C40LrQsCDQuNC30LzQtdC90LXQvdC40Y8g0YbQstC10YLQsCDQvdCwINC60L3QvtC/0LrQsNGFXG5cdGZ1bmN0aW9uIGNoYW5nZUNvbG9yKHRhYnNCdG4pIHtcblx0XHR0YWJzQnRuLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0cmVzZXRCdG5Db2xvcih0YWJzQnRuKTtcblx0XHRcdFx0c2V0QnRuQ29sb3IoZXZlbnQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyog0L/QvtC70YPRh9Cw0LXQvCBpZCDQutC90L7Qv9C60Lgg0L3QsCDQutC+0YLQvtGA0L7QuSDQv9GA0L7QuNC30L7RiNC70L4g0YHQvtCx0YvRgtC40LVcblx0ZnVuY3Rpb24gZ2V0Q3VycmVudEJ0bk9yZGVyKGV2ZW50KSB7XG5cdFx0cmV0dXJuIGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9yZGVyXCIpO1xuXHR9XG5cblx0Ly8qINC/0L7Qu9GD0YfQsNC10LwgaWQg0LrQvtC90YLQtdC90YLQsFxuXHRmdW5jdGlvbiBnZXRDb250ZW50T3JkZXIoaXRlbSkge1xuXHRcdHJldHVybiBpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtb3JkZXJcIik7XG5cdH1cblxuXHQvLyog0YHQutGA0YvQstCw0LXQvCDQutC+0L3RgtC10L3RglxuXHRmdW5jdGlvbiBoaWRlVGFic0NvbnRlbnQodGFic0NvbnRlbnQpIHtcblx0XHR0YWJzQ29udGVudC5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ29udGVudENsYXNzKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vKiDQvtGC0L7QsdGA0LDQttCw0LXQvCDQutC+0L3RgtC10L3RglxuXHRmdW5jdGlvbiBzaG93VGFic0NvbnRlbnQoZXZlbnQsIHRhYnNDb250ZW50KSB7XG5cdFx0dGFic0NvbnRlbnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0Ly8qINC10YHQu9C4IGlkINC60L3QvtC/0LrQuCDRgNCw0LLQtdC9IGlkINC60L7QvdGC0LXQvdGC0YMg0L7RgtC+0LHRgNCw0LfQuNGC0Ywg0LrQvtC90YLQtdC90YJcblx0XHRcdGlmIChnZXRDdXJyZW50QnRuT3JkZXIoZXZlbnQpID09PSBnZXRDb250ZW50T3JkZXIoaXRlbSkpIHtcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNvbnRlbnRDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvLyog0LvQvtCz0LjQutCwINGB0LrRgNGL0YLQuNGPINC4INC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LrQvtC90YLQtdC90YLQsFxuXHRmdW5jdGlvbiBjaGFuZ2VDb250ZW50KHRhYnNCdG4sIHRhYnNDb250ZW50KSB7XG5cdFx0dGFic0J0bi5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIChldmVudCkgPT4ge1xuXHRcdFx0XHRoaWRlVGFic0NvbnRlbnQodGFic0NvbnRlbnQpO1xuXHRcdFx0XHRzaG93VGFic0NvbnRlbnQoZXZlbnQsIHRhYnNDb250ZW50KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0YWxsVGFicy5mb3JFYWNoKCh0YWJzKSA9PiB7XG5cdFx0bGV0IHRhYnNCdG4gPSB0YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic19fYnRuXCIpO1xuXHRcdGxldCB0YWJzQ29udGVudCA9IHRhYnMucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX19jb250ZW50XCIpO1xuXHRcdGFkZEJ0bnNJZCh0YWJzQnRuKTtcblx0XHRhZGRDb250ZW50c0lkKHRhYnNDb250ZW50KTtcblx0XHRjaGFuZ2VDb2xvcih0YWJzQnRuKTtcblx0XHRjaGFuZ2VDb250ZW50KHRhYnNCdG4sIHRhYnNDb250ZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YWJzO1xuIl0sImZpbGUiOiJ0YWJzLmpzIn0=

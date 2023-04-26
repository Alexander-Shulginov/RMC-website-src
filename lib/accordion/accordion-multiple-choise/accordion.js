function toggleAccordion() {
	//* получаем выпадающий элемент
	const accordionBody = this.nextElementSibling;
	//* получаем стрелочку
	const accordionArrow = this.lastElementChild.firstElementChild;
	//* получаем высоты выпадающего элемента
	const heightHiddenElem = accordionBody.scrollHeight;
	//* если у выпадающего элемента нет установленной высоты
	if (!accordionBody.style.height) {
		//* устанавливаем выпадающему элементу высоту, что бы он появился
		accordionBody.style.height = `${heightHiddenElem}px`;
		//* изменяем положение стрелочки
		accordionArrow.classList.add("accordion__icon--active");
	} else {
		//* иначе, удаляем аттрибут, что бы он скрылся
		accordionBody.removeAttribute("style");
		//* изменяем положение стрелочки
		accordionArrow.classList.remove("accordion__icon--active");
	}
}
const accordionsHeaders = document.querySelectorAll(".accordion__header");

accordionsHeaders.forEach((elem) => {
	const accordionBody = elem.nextElementSibling;
	//* если имеется предустановленный класс accordion__body--active
	if (accordionBody.classList.contains("accordion__body--active")) {
		//* устанавливаем высоту активному элементу, что бы он был предварительно открыт
		accordionBody.style.height = `${accordionBody.scrollHeight}px`;
		//* изменяем положение стрелочки
		elem.lastElementChild.firstElementChild.classList.add("accordion__icon--active");
	}
	elem.addEventListener("click", toggleAccordion);
});

//* accordion__body--active - класс для установки предварительно открытого аккордиона, устанавливать на  accordion__body

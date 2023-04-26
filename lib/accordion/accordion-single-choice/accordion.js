function toggleAccordion() {
	const accordionBody = this.nextElementSibling;
	const heightHiddenElem = accordionBody.scrollHeight;
	const accordionArrow = this.lastElementChild.firstElementChild;

	if (!accordionBody.style.height) {
		accordionBody.classList.add("accordion__body--active");
		accordionArrow.classList.add("accordion__icon--active");
		accordionBody.style.height = `${heightHiddenElem}px`;
	} else {
		accordionBody.classList.remove("accordion__body--active");
		accordionArrow.classList.remove("accordion__icon--active");
		accordionBody.removeAttribute("style");
	}
}

const accordionsHeaders = document.querySelectorAll(".accordion__header");

accordionsHeaders.forEach((header) => {
	header.addEventListener("click", function () {
		const openAccordionBody = document.querySelector(".accordion__body--active");
		if (openAccordionBody && openAccordionBody !== this.nextElementSibling) {
			openAccordionBody.removeAttribute("style");
			openAccordionBody.classList.remove("accordion__body--active");
		}
		toggleAccordion.call(this);
	});

	if (header.nextElementSibling.classList.contains("accordion__body--active")) {
		toggleAccordion.call(header);
	}
});

//* accordion__body--active - класс для установки предварительно открытого аккордиона, устанавливать на  accordion__body

const btn = document.querySelector(".go-to-top");
const isActiveClass = "go-to-top--active";
const isDisableClass = "go-to-top--disable";

//* при скролле
window.addEventListener("scroll", () => {
	//* получаем значение сколько прокручено
	let getPageScroll = window.scrollY;
	//* получаем размер первого экрана
	let getHeightFirstScreen = window.innerHeight;
	//* если первый экран прокручен
	if (getPageScroll > getHeightFirstScreen) {
		btn.classList.add(isActiveClass);
	} else {
		btn.classList.remove(isActiveClass);
	}
});

btn.addEventListener("click", () => {
	//* добавляем стили для плавной прокрутки
	document.documentElement.style.scrollBehavior = "smooth";
	//* перемещаемся наверх
	document.documentElement.scrollTop = 0;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzaG93LW1vcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hvd01vcmUgPSAoKSA9PiB7XG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic19fYnRuLXNob3ctbW9yZVwiKTtcblx0Y29uc3QgdGFic0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnNfX2l0ZW06bnRoLWNoaWxkKDFuICsgNVwiKTtcblx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0dGFic0l0ZW0uZm9yRWFjaCgoZWwpID0+IHtcblx0XHRcdGVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRidG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dNb3JlO1xuIl0sImZpbGUiOiJzaG93LW1vcmUuanMifQ==

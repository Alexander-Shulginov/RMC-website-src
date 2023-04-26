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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb250YWN0LW1vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vZGFsID0gKCkgPT4ge1xuXHRjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnRuXCIpO1xuXHRjb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19jbG9zZVwiKTtcblx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fY29udGFjdHNcIik7XG5cdGNvbnN0IGNzc0FjdGl2ZU1vZGFsID0gXCJoZWFkZXJfX2NvbnRhY3RzLS1hY3RpdmVcIjtcblxuXHRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRtb2RhbC5jbGFzc0xpc3QuYWRkKGNzc0FjdGl2ZU1vZGFsKTtcblx0fSk7XG5cblx0YnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKGNzc0FjdGl2ZU1vZGFsKTtcblx0fSk7XG5cbn07XG5leHBvcnQgZGVmYXVsdCBtb2RhbDtcbiJdLCJmaWxlIjoiY29udGFjdC1tb2RhbC5qcyJ9

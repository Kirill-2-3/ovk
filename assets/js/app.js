const body = document.body;
const btns = document.querySelectorAll('.btn-modal');
const btnsClose = document.querySelectorAll('.modal__close');
const modalOverlay = document.querySelector('.modal__overlay');
const modals = document.querySelectorAll('.modal');

btns.forEach(el => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		body.classList.add('body-scroll');
		body.classList.remove('show-burger');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal__overlay--visible');
	});
});

btnsClose.forEach(btnClose => {
	btnClose.addEventListener('click', (e) => {
		body.classList.remove('body-scroll');

		modalOverlay.classList.remove('modal__overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	});
});
burger.addEventListener("click", () => {
    const body = document.body;
    
    body.classList.toggle("show-burger");
    body.classList.toggle("body-scroll");
});
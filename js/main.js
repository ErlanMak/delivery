const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector("#modal");
const close = document.querySelector(".modal__close");


cartButton.addEventListener('click', function (event) {
	modal.classList.add("modal-active");
})

close.addEventListener('click', function (event) {
	modal.classList.remove("modal-active");
})

new WOW().init();
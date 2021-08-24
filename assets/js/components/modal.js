/**  Module to manage opening and closing modal events.  */

const modalBg = document.querySelector(".modal-bg");
const modalDisplay = document.querySelector(".modal-view");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close-btn");

/* Opening/Closing modal event */
modalBtn.forEach((btn) => btn.addEventListener("click", function launchModal() {
  modalBg.classList.remove ('is-close');
  modalBg.classList.toggle ('is-open');
}));


closeBtn.addEventListener("click", function () {
  modalBg.classList.remove ('is-open');
  modalBg.classList.toggle ('is-close');
});
/* END Opening/Closing modal event */


/* Success Submit event */

/* END Success Submit event */
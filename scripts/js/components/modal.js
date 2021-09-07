import {removeErrors} from './form.js';
/*  Module to manage opening and closing modal events.  */

const modalBg = document.querySelector(".modal-container");
const modalDisplay = document.querySelector(".modal-view");
const modalBtn = document.querySelectorAll(".signup");
const closeBtn = document.querySelector(".close-btn");
const closemodal = document.querySelector(".close-form");
const form = document.getElementById("registration-form");

function closeModal () {
  modalBg.classList.remove ('is-open');
  modalBg.classList.toggle ('is-close');
  form.reset();
  removeErrors();
  document.location.reload();
}

// Open modal event
modalBtn.forEach((btn) => btn.addEventListener("click", function launchModal() {
  form.classList.remove("visuallyhidden", "hidden");
  form.reset();
  modalBg.classList.remove ('is-close');
  modalBg.classList.toggle ('is-open');
}));
// Close modal events
closeBtn.onclick = closeModal;
closemodal.onclick = closeModal;


// Close modal when clicking outside modal
modalDisplay.onclick = (e) => e.stopPropagation();
modalBg.onclick = closeModal;
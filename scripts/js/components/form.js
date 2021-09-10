import {
  firstNameValidation, 
  lastNameValidation, 
  emailValidation, 
  birthdayValidation,
  tournamentValidation,
  cityValidation,
  cguValidation,
  formIsValid,
  activeSubmitBtn,
  displaySuccess,
  removeForm,
  sign
} from './functions.js';

const firstName = document.getElementById('firstName');
const firstNameErrorField = document.getElementById('firstNameErrorField');
const lastName = document.getElementById('lastName');
const lastNameErrorField = document.getElementById('lastNameErrorField');
const emailAddr = document.getElementById('email');
const emailAddrErrorField = document.getElementById('emailErrorField');

const birthday = document.getElementById('birthday');
const birthdayErrorField = document.getElementById('birthdayErrorField');

const nbTournament = document.getElementById('nbTournament');
const nbTournamentErrorField = document.getElementById('nbTournamentErrorField');

const city = document.querySelectorAll('input[name="location"]');
const cityErrorField = document.getElementById('locationErrorField');

const cgu = document.getElementById('cgu');
const cguErrorField = document.getElementById('cguErrorField');

const newsletter = document.getElementById('newsletter');
const success = document.getElementById('success__wrapper');
/* ==================== */
/*   CHECK ON THE GO    */
/* ==================== */
firstName.oninput = () => {
  firstNameValidation(firstName, firstNameErrorField);
  activeSubmitBtn();
};
firstName.addEventListener ('blur', () => {
  firstNameValidation(firstName, firstNameErrorField);
  activeSubmitBtn();
});
lastName.oninput = () => {
  lastNameValidation(lastName, lastNameErrorField);
  activeSubmitBtn();
};
lastName.addEventListener('blur', () => {
  lastNameValidation (lastName, lastNameErrorField);
  activeSubmitBtn();
});
emailAddr.oninput = () => {
  emailValidation(emailAddr, emailAddrErrorField);
  activeSubmitBtn();
};
emailAddr.addEventListener('blur', () => {
  emailValidation (emailAddr, emailAddrErrorField);
  activeSubmitBtn();
});
birthday.oninput = () => {
  birthdayValidation(birthday, birthdayErrorField);
  activeSubmitBtn();
};
birthday.addEventListener('blur', () => {
  birthdayValidation (birthday, birthdayErrorField);
  activeSubmitBtn();
});
nbTournament.oninput = () => {
  tournamentValidation(nbTournament, nbTournamentErrorField);
  activeSubmitBtn();
};
nbTournament.addEventListener('blur', () => {
  tournamentValidation (nbTournament, nbTournamentErrorField);
  activeSubmitBtn();
});
city.forEach((btn) =>
  btn.addEventListener("change", () => {
    cityValidation (cityErrorField)
    activeSubmitBtn();
  })
);
cgu.onchange = () => {
  cguValidation(cgu, cguErrorField);
  activeSubmitBtn();
};
/* ==================== */
/*     SUBMIT FORM      */
/* ==================== */
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('submitBtn').addEventListener('click', sign);
});
import {
  firstNameValidation, 
  lastNameValidation, 
  emailValidation, 
  birthdayValidation,
  tournamentValidation,
  cityValidation,
  cguValidation,
  formIsValid,
  displaySuccess,
  removeForm
} from './functions.js';

/** CONTROL AND VALIDATION MODULE **/

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
const success = document.getElementById('success-wrapper');

/* ==================== */
/*   CHECK ON THE GO    */
/* ==================== */
firstName.oninput = () => {
  firstNameValidation(firstName, firstNameErrorField)
};
firstName.addEventListener ('blur', () => {
  firstNameValidation(firstName, firstNameErrorField);
});
lastName.oninput = () => {
  lastNameValidation(lastName, lastNameErrorField)
};
lastName.addEventListener('blur', () => {
  lastNameValidation (lastName, lastNameErrorField);
});
emailAddr.oninput = () => {
  emailValidation(emailAddr, emailAddrErrorField)
};
emailAddr.addEventListener('blur', () => {
  emailValidation (emailAddr, emailAddrErrorField);
});
birthday.oninput = () => {
  birthdayValidation(birthday, birthdayErrorField)
};
birthday.addEventListener('blur', () => {
  birthdayValidation (birthday, birthdayErrorField);
});
nbTournament.oninput = () => {
  tournamentValidation(nbTournament, nbTournamentErrorField)
};
nbTournament.addEventListener('blur', () => {
  tournamentValidation (nbTournament, nbTournamentErrorField);
});
city.forEach((btn) =>
  btn.addEventListener("change", () => {
    cityValidation (cityErrorField)
  })
);
cgu.onchange = () => {
  cguValidation(cgu, cguErrorField)
};

/* ==================== */
/*  Remove à exporter   */
/* ==================== */
const removeErrors = () => {
  const errorFieldsList = [
    firstNameErrorField,
    lastNameErrorField,
    emailAddrErrorField,
    birthdayErrorField,
    nbTournamentErrorField,
    cityErrorField,
    cguErrorField,
  ];
  const inputFields = document.querySelectorAll("input");

  for (const errorField of errorFieldsList) {
    errorField.textContent = "";
    errorField.classList.remove("error-txt");
  }
  for (let inputField of inputFields) {
    inputField.classList.remove("error-border");
  }
};

/* ==================== */
/*   CHECK ON SUBMIT    */
/* ==================== */

const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();


  firstNameValidation(firstName, firstNameErrorField);
  lastNameValidation(lastName, lastNameErrorField);
  emailValidation(emailAddr, emailAddrErrorField);
  birthdayValidation(birthday, birthdayErrorField);
  tournamentValidation(nbTournament, nbTournamentErrorField);
  cityValidation (cityErrorField);
  cguValidation(cgu, cguErrorField);
  
  if(formIsValid()) {
    console.log("Validation finale OK")
    displaySuccess(firstName, lastName); 
    removeForm();    
  };
});

export {removeErrors};
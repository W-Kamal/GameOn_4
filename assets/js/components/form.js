import {
  firstNameValidation, 
  lastNameValidation, 
  emailValidation, 
  birthdayValidation,
  tournamentValidation,
  cityValidation,
  cguValidation,
  formIsValid,
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

const nbTounament = document.getElementById('nbTournament');
const nbTounamentErrorField = document.getElementById('nbTournamentErrorField');
//controle sur les checkbox-radio
const cityErrorField = document.getElementById('locationErrorField');

const cgu = document.getElementById('cgu');
const cguErrorField = document.getElementById('cguErrorField');
const newsletter = document.getElementById('newsletter');
const success = document.getElementById('success');

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

nbTounament.oninput = () => {
  tournamentValidation(nbTounament, nbTounamentErrorField)
};
nbTounament.addEventListener('blur', () => {
  tournamentValidation (nbTounament, nbTounamentErrorField);
});

cgu.onchange = () => {
  cguValidation(cgu, cguErrorField)
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
  tournamentValidation(nbTounament, nbTounamentErrorField);
  cityValidation (cityErrorField);
  cguValidation(cgu, cguErrorField);

  formIsValid();
  
  //   //removeErrors();
  // firstNameValidation(firstName, firstNameErrorField);
  // lastNameValidation(lastName, lastNameErrorField);
  // emailValidation(emailAddr, emailAddrErrorField);
  // birthdayValidation(birthday, birthdayErrorField);
  // tournamentValidation(nbTounament,nbTounamentErrorField);
  // cityValidation(cityErrorField);
  // cguValidation(cgu, cguErrorField);
  
  // if (formIsValid!==true){
  //   e.preventDefault()
  // } else {
  //   window.alert("success");
  // }
});

/** FUNCTIONS MODULE **/
const errorMsgList = {
  empty: "Veuillez renseigner le champ",
  letters: "Ce champ doit contenir au moins 2 car. (uniquement lettres ou tirets).",
  mail: "Le format email ne correspond pas (exemple@mail.xxx)",
  birthday: "Seules les personnes majeures peuvent participer.",
  tournament: "La valeur doit être comprise entre 0 et 100.",
  integer : "Veuillez entrer un nombre entier positif.",
  location: "Vous devez choisir une ville.",
  cgu: "Vous devez acceptez les conditions d'utilisation.",
};
let fieldValidStatus = {
firstNameIsValid: false,
lastNameIsValid: false,
emailIsValid: false,
birthdayIsValid: false,
tournamentIsValid: false,
cityIsValid: false,
cguIsValid: false,
};

const firstNameErrorField = document.getElementById('firstNameErrorField');
const lastNameErrorField = document.getElementById('lastNameErrorField');
const emailAddrErrorField = document.getElementById('emailErrorField');
const birthdayErrorField = document.getElementById('birthdayErrorField');
const nbTournamentErrorField = document.getElementById('nbTournamentErrorField');
const cityErrorField = document.getElementById('locationErrorField');
const cguErrorField = document.getElementById('cguErrorField');
const form = document.getElementById("registration-form");
const submitBtn = document.getElementById("submitBtn");

/** UTILITY FUNCTIONS **/

function setValidStatus (inputField, errorField){
  inputField.classList.remove("error__border");
  errorField.textContent = "";
  errorField.classList.remove("error__text");
}
function setErrorStatus (inputField, errorField, errorMsg){
  inputField.classList.add("error__border");
  errorField.textContent = errorMsg;
  errorField.classList.add("error__text");
}
const regNameValidation = (name) => {
  const regexName =/^[a-zA-Z]+[a-zA-Z -]*[a-zA-Z]$/;
  return regexName.test(name);  
}
const regEmailValidation = (name) => {
  const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  return regexMail.test(name);  
}
const setAge = (inputField) => {
  const birthday = new Date(inputField);
    if (!(birthday instanceof Date) || isNaN(birthday)) 
    {
      return false;
    }
  const currentDate = Date.now();
  const yearInMs = 365.25 * 24 * 60 * 60 * 1000;
  const age = (currentDate-birthday) / yearInMs;
  return age>= 18;
}

/** CONTROL FUNCTIONS **/
const firstNameValidation = (inputField, errorField) => {
  if (regNameValidation(inputField.value)) {
    setValidStatus (inputField, errorField);
    fieldValidStatus.firstNameIsValid = true;
  } else {
    setErrorStatus (inputField, errorField, errorMsgList.letters);
    fieldValidStatus.firstNameIsValid = false;
  }
};
const lastNameValidation = (inputField, errorField) => {
  if (regNameValidation(inputField.value)) {
    setValidStatus (inputField, errorField);
    fieldValidStatus.lastNameIsValid = true;
  } else {
    setErrorStatus (inputField, errorField, errorMsgList.letters);
    fieldValidStatus.lastNameIsValid = false;
  }
};
const emailValidation = (inputField, errorField) => {
  if (regEmailValidation(inputField.value)) {
    setValidStatus (inputField, errorField)
    fieldValidStatus.emailIsValid = true;
  } else {
    setErrorStatus (inputField, errorField, errorMsgList.mail);
    fieldValidStatus.emailIsValid = false;
  }
};
const birthdayValidation = (inputField, errorField) => {
  if (setAge (inputField.value)){
    setValidStatus (inputField, errorField);
    fieldValidStatus.birthdayIsValid = true;
  } else {
    const errorMsg = errorMsgList.birthday;
    setErrorStatus (inputField, errorField, errorMsg);
    fieldValidStatus.birthdayIsValid = false;
  }
};
const tournamentValidation = (inputField, errorField) => {
  let nbtournament = inputField.value;
  if (!nbtournament || Number(nbtournament) < 0 || Number(nbtournament) > 100) {
    setErrorStatus (inputField, errorField, errorMsgList.tournament);
    fieldValidStatus.tournamentIsValid = false;
  } else {
    setValidStatus (inputField, errorField);
    fieldValidStatus.tournamentIsValid = true;
  }
};
const cityValidation = (errorField) => {
  const city = document.querySelector('input[name="location"]:checked');
  if(city!==null){
    errorField.textContent = "";
    errorField.classList.remove("error__text");
    fieldValidStatus.cityIsValid = true;
  }else{
    errorField.textContent = errorMsgList.location;
    errorField.classList.add("error__text");
    fieldValidStatus.cityIsValid = false;
  }
};

const cguValidation = (inputField, errorField) => {
  if(inputField.checked){
    errorField.textContent = "";
    errorField.classList.remove("error__text");
    fieldValidStatus.cguIsValid = true;
  }else{
    errorField.textContent = errorMsgList.cgu;
    errorField.classList.add("error__text");
    fieldValidStatus.cguIsValid = false;
  }
};

/** VALIDATION **/
//Control if all input fields have valid status on true
function allPropertiesAreTrue(object) {
  let res = false;
	for(const prop in object){
		if(!object[prop]) { 
      return false;
    } else {
      res = true;
    };  
  }
  if (res) {
    return true;
  } else {
    return false;
  }
}

//Control if all value are valid, form is valid and return true
function formIsValid() {
	if (!allPropertiesAreTrue(fieldValidStatus)) {
    return false 
  } else {
    return true;
	};	
}

//Control if all input are valid (not empty AND verification is ok)
function activeSubmitBtn() {
  if (!allPropertiesAreTrue(fieldValidStatus)) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
	};
}
//Display success view
const displaySuccess = (firstNameInputField, lastNameInputField) => {
  setTimeout(function () {
    const successDisplay = document.getElementById('success__wrapper');
    successDisplay.classList.remove('hidden');
    const successField = document.getElementById('success__msg');
    successField.textContent = `Votre inscription est enregistrée.`;
  }, 300);
  
};

//Set input status value array to false + disable submit btn
function resetFormStatusValue(object) {
  for(let prop in object){
    prop = false;
  }  
  submitBtn.disabled = true;
}
// Remove all error border + msg of the form
function removeAllErrors () {
  const errorFieldsArr = [
    firstNameErrorField,
    lastNameErrorField,
    emailAddrErrorField,
    birthdayErrorField,
    nbTournamentErrorField,
    cityErrorField,
    cguErrorField
  ]
  const inputFields = document.querySelectorAll("input");

  for (const errorField of errorFieldsArr) {
    errorField.textContent = "";
    errorField.classList.remove("error__text");
  }

  for (let inputField of inputFields) {
    inputField.classList.remove("error__border");
  }
}

//Make form disapear to free space for success view + reset status array + refresh form
function removeForm () {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    setTimeout(function () {
      form.classList.remove('visuallyhidden');
    }, 200);
  } else {
    form.classList.add('visuallyhidden');    
    form.addEventListener('transitionend', function(e) {
    form.classList.add('hidden');
    }, 
    {
      capture: false,
      once: true,
      passive: false
    });
  }
  resetFormStatusValue(fieldValidStatus);
  removeAllErrors ();
  form.reset ();
}
/** VALID FORM AND LOCALSTORAGE OF INPUTS **/
//  Control if form is valid,
//  + add input values in array of object, each object (on localstorage) is a user,
//  + remove form + display success
let players = [];

const sign = (e) => {
  e.preventDefault();
  if(formIsValid()) {
    
    let playerId = {
      firstName : document.getElementById('firstName').value,
      lastName : document.getElementById('lastName').value,
      email : document.getElementById('email').value,
      birthday : document.getElementById('birthday').value,
      nbtournament : document.getElementById('nbTournament').value,
      location : document.querySelector('input[name="location"]:checked').value
    }
    players.push(playerId);
    localStorage.setItem('playersList', JSON.stringify(players));
    
    removeForm ();
    displaySuccess(firstName, lastName);      
  };
  
}

export {
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
};
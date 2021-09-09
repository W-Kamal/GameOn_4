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
const fieldValidStatus = {
firstNameIsValid: false,
lastNameIsValid: false,
emailIsValid: false,
birthdayIsValid: false,
tournamentIsValid: false,
cityIsValid: false,
cguIsValid: false,
};

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
    if (!(birthday instanceof Date) || isNaN(birthday)) {
    return false;
  }
  const currentDate = Date.now();
  const yearInMs = 365.25*24*60*60*1000;
  const age = Math.ceil((currentDate-birthday)/yearInMs);
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

/** FORM VALIDATION **/
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
function formIsValid() {
	if (!allPropertiesAreTrue(fieldValidStatus)) {
    console.log("PAS OK") 
    return false 
  } else {
    console.log("C'EST BON")
    return true;
	};	
}

const displaySuccess = (firstNameInputField, lastNameInputField) => {
  const modalDisplay = document.querySelector(".modal__view");
  modalDisplay.classList.add(".success-style");
  const successField = document.getElementById('success__msg');
  successField.textContent = `Félicitation ${firstNameInputField.value} ${lastNameInputField.value}, votre inscription est enregistrée.`;
};


function removeForm () {
  const form = document.getElementById("registration-form");
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    setTimeout(function () {
      form.classList.remove('visuallyhidden');
    }, 20);
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
  displaySuccess,
  removeForm
};
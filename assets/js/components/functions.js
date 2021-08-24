/** FUNCTIONS MODULE **/
const errorMsgList = {
  empty: "Veuillez renseigner le champ",
  letters: "Ce champ ne peut comporter que des lettres ou des tirets.",
  length: "Ce champ doit contenir au moins 2 caractères.",
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
  inputField.classList.remove("error-border");
  errorField.textContent = "";
  errorField.classList.remove("error-text");
}
function setErrorStatus (inputField, errorField, errorMsg){
  inputField.classList.add("error-border");
  errorField.textContent = errorMsg;
  errorField.classList.add("error-text");
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
    setErrorStatus (inputField, errorField, errorMsgList.letters)
  }
};
const lastNameValidation = (inputField, errorField) => {  
  if (regNameValidation(inputField.value)) {
    setValidStatus (inputField, errorField);
    fieldValidStatus.lastNameIsValid = true;
  } else {
    setErrorStatus (inputField, errorField, errorMsgList.letters)
  }
};
const emailValidation = (inputField, errorField) => {
  if (regEmailValidation(inputField.value)) {
    setValidStatus (inputField, errorField)
    fieldValidStatus.emailIsValid = true;
  } else {
    setErrorStatus (inputField, errorField, errorMsgList.mail)
  }
};
const birthdayValidation = (inputField, errorField) => {
  if (setAge (inputField.value)){
    setValidStatus (inputField, errorField);
    fieldValidStatus.birthdayIsValid = true;
  } else {
    const errorMsg = errorMsgList.birthday;
    setErrorStatus (inputField, errorField, errorMsg);
  }
};
const tournamentValidation = (inputField, errorField) => {
  let nbtournament = inputField.value;
  if (nbtournament === "" || Number(nbtournament) < 0 || Number(nbtournament) > 100) {
    setErrorStatus (inputField, errorField, errorMsgList.tournament);

  } else {
    setValidStatus (inputField, errorField);
    fieldValidStatus.tournamentIsValid = true;
  }
};
const cityValidation = (errorField) => {
  const city = document.querySelector('input[name="location"]:checked');
  if(city!==null){
    errorField.textContent = "";
    errorField.classList.remove("error-text");
    fieldValidStatus.cityIsValid = true;
  }else{
    errorField.textContent = errorMsgList.location;
    errorField.classList.add("error-text");
  }
};
const cguValidation = (inputField, errorField) => {
  if(inputField.checked){
    errorField.textContent = "";
    errorField.classList.remove("error-text");
    fieldValidStatus.cguIsValid = true;
  }else{
    errorField.textContent = errorMsgList.cgu;
    errorField.classList.add("error-text");
  }
};

/** FORM VALIDATION **/
const formIsValid = () => {
  for (const property in fieldValidStatus) {
    if(`${property}`==false){
      console.log(`${property}: ${fieldValidStatus[property]}`);
      return true;
    };
    console.log(`${property}: ${fieldValidStatus[property]}`);
    console.log('KO');
  }
};

// const removeErrors = () => {
//   const errorFieldsList = [
//     firstNameErrorField,
//     lastNameErrorField,
//     emailAddrErrorField,
//     birthdayErrorField,
//     nbTounamentErrorField,
//     cguErrorField,
//   ];
//   for (const field of errorFieldsList) {
//     field.textContent = "";
//     field.classList.remove("error-text");
//   }
//   const inputFields = document.querySelectorAll("input");
//   for (let inputField of inputFields) {
//     inputField.classList.remove("error-border");
//   }
// };
// const displaySuccess = () => {

// };



export {
  firstNameValidation,
  lastNameValidation,
  emailValidation,
  birthdayValidation,
  tournamentValidation,
  cityValidation,
  cguValidation,
  formIsValid
};
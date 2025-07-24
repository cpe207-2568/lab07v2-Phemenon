// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passInput = document.querySelector("#password-input");
const cfpassInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
};

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passInput.onkeyup = () => {
  passInput.classList.remove("is-valid");
  passInput.classList.remove("is-invalid");
};

cfpassInput.onkeyup = () => {
  cfpassInput.classList.remove("is-valid");
  cfpassInput.classList.remove("is-invalid");
};

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPassOk = false;
  isCF = false;

  // validate first name
  if (typeof firstNameInput.value !== 'string' || firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (typeof lastNameInput.value !== 'string' || lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  // validate email
  if (validateEmail(emailInput.value) !== true || emailInput.value === "") {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  // validate password
  if (passInput.value.length < 6) {
    passInput.classList.add("is-invalid");
  } else {
    passInput.classList.add("is-valid");
    isPassOk = true;
  }

  // validate confirm password
  if (cfpassInput.value !== passInput.value || cfpassInput.value === "" || isPassOk === false) {
    cfpassInput.classList.add("is-invalid");
  } else {
    cfpassInput.classList.add("is-valid");
    isCF = true;
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPassOk && isCF) alert("Registered successfully");
};
 
// add callback function for Reset button.
resetBtn.onclick = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passInput.value = "";
  cfpassInput.value = "";
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
  passInput.classList.remove("is-valid");
  passInput.classList.remove("is-invalid");
  cfpassInput.classList.remove("is-valid");
  cfpassInput.classList.remove("is-invalid");
};
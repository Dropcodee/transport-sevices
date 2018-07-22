let submitUser = document.getElementById("submit");
let loginUser = document.getElementById("loginUser");
let loginSuccess = document.getElementById("loginSuccess");
let contactSubmit = document.getElementById("contactBtn");
let firstName = document.getElementById("userName");
let email = document.getElementById("userEmail");
let password = document.getElementById("userPassword");
let password2 = document.getElementById("userVerifyPassword");
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let contactName = document.getElementById("contactName");
let contactEmail = document.getElementById("contactEmail");
let contactMessage = document.getElementById("contactMessage");

// errors variables
let firstNameError = document.getElementById("userNameError");
let emailError = document.getElementById("userEmailError");
let passwordError = document.getElementById("userPasswordError");
let password2Error = document.getElementById("verifyPasswordError");
let loginEmailError = document.getElementById("loginEmailError");
let loginPasswordError = document.getElementById("loginPasswordError");
let contactMessageError = document.getElementById("messageError");
let contactNameError = document.getElementById("contactNameErrors");
let contactEmailError = document.getElementById("contactEmailError");

// user registration values
let newUser = {
  name: firstName.value,
  email: email.value,
  password: password2.value
};
let newUserStorage;
let UserLoginData;

// custom functions for name and email validations.

// email validation function
validateEmail = (x, y) => {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (x.value == "" || x.value == null) {
    y.innerHTML = "Email field is required";
    return false;
  } else if (!filter.test(x.value)) {
    y.innerHTML = "Email is Invalid";
    return false;
  } else {
    y.innerHTML = "";
    newUser.email = x.value;
  }
};
// end of email validation

// Name field validation
validateName = (nameVal, nameErr) => {
  if (nameVal.value == "" || nameVal.value == null) {
    nameErr.innerHTML = "Name Field is Required";
    return false;
  } else if (nameVal.value.length < 3) {
    nameErr.innerHTML = "Name must be 3 characters and above ";
    return false;
  } else {
    nameErr.innerHTML = "";
    newUser.name = nameVal.value;
  }
};
// end of Name validation

// validate password function
validatePassword = (passVal, passErr) => {
  if (passVal.value == "") {
    passErr.innerHTML = "Password field is required";
    return false;
  } else if (passVal.value.length < 6) {
    passErr.innerHTML = "Your password characters must be 6 and above";
    return false;
  } else {
    passErr.innerHTML = "";
  }
};
// end of password validation function

// onsubmit function to carry out validation
onSubmit = () => {
  // validate fields onClick
  validateName(firstName, firstNameError);
  // validation for email
  validateEmail(email, emailError);

  // validate for password
  validatePassword(password, passwordError);
  // verify password
  if (password2.value == "") {
    password2Error.innerHTML = "Please Re-enter password to verify";
    return false;
  } else if (password2.value !== password.value) {
    password2Error.innerHTML = "Password does not match";
    return false;
  } else {
    password2Error.innerHTML = "";
    newUser.password = password2.value;
    newUserStorage = JSON.stringify(newUser);
    localStorage.setItem("newUserStorage", newUserStorage);
    console.log(localStorage);
  }
};

// Login validation

onLoginSubmit = () => {
  UserLoginData = JSON.parse(localStorage.getItem("newUserStorage"));
  if (loginEmail.value == "") {
    loginEmailError.innerHTML = "Field cannot be left blank abeg ";
  } else if (loginEmail.value !== UserLoginData.email) {
    loginEmailError.innerHTML = " Invalid Email or Password, check well";
  } else {
    loginEmailError.innerHTML = "";
  }
  if (loginPassword.value == null || loginPassword.value == "") {
  } else if (loginPassword.value !== UserLoginData.password) {
    loginPasswordError.innerHTML = "Invalid Email or password, check well";
  } else {
    loginPasswordError.innerHTML = "";
    loginSuccess.innerHTML = " Logged in successful";
  }
};

// validation for the contact form
onContactSubmit = () => {
  // name field validation using custom function at the top
  validateName(contactName, contactNameError);

  // email validation using the email function
  validateEmail(contactEmail, contactEmailError);

  if (contactMessage.value == "" || contactMessage.value == null) {
    contactMessageError.innerHTML = "Message field cannot be blank";
  } else {
    contactMessageError.innerHTML = "";
  }
};

// validation for the bookings page

let submitUser = document.getElementById("submit");
let loginUser = document.getElementById("loginUser");
let loginSuccess = document.getElementById("loginSuccess");
let firstName = document.getElementById("userName");
let email = document.getElementById("userEmail");
let password = document.getElementById("userPassword");
let password2 = document.getElementById("userVerifyPassword");
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
// errors variables
let firstNameError = document.getElementById("userNameError");
let emailError = document.getElementById("userEmailError");
let passwordError = document.getElementById("userPasswordError");
let password2Error = document.getElementById("verifyPasswordError");
let loginEmailError = document.getElementById("loginEmailError");
let loginPasswordError = document.getElementById("loginPasswordError");

// user registration values
let newUser = [
  {
    name: firstName.value,
    email: email.value,
    password: password2.value
  }
];
// onsubmit function to carry out validation
onSubmit = () => {
  submitUser.addEventListener("click", () => {
    // validate fields onClick
    if (firstName.value == "" || firstName.value == null) {
      firstNameError.innerHTML = "Name Field is Required";
      return false;
    } else if (firstName.value.length < 3) {
      firstNameError.innerHTML = "Name must be 3 characters and above ";
      return false;
    } else {
      firstNameError.innerHTML = "";
      newUser[0].name = firstName.value;
    }

    // validation for email
    validateEmail();

    // validate for password
    if (password.value == "") {
      passwordError.innerHTML = "Password field is required";
      return false;
    } else if (password.value.length < 6) {
      passwordError.innerHTML = "Your password characters must be 6 and above";
      return false;
    } else {
      passwordError.innerHTML = "";
    }

    // verify password
    if (password2.value == "") {
      password2Error.innerHTML = "Please Re-enter password to verify";
      return false;
    } else if (password2.value !== password.value) {
      password2Error.innerHTML = "Password does not match";
      return false;
    } else {
      password2Error.innerHTML = "";
      newUser[2].password = password2.value;
      newUser = JSON.parse(localStorage.getItem("session"));
      localStorage.setItem("session", JSON.stringify(newUser));
    }
  });
};

validateEmail = () => {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (email.value == "" || email.value == null) {
    emailError.innerHTML = "Email field is required";
    return false;
  } else if (!filter.test(email.value)) {
    emailError.innerHTML = "Email is Invalid";
    return false;
  } else {
    emailError.innerHTML = "";
    newUser[1].email = email.value;
  }
};

// Login validation

onLoginSubmit = () => {
  loginUser.addEventListener("click", () => {
    if (loginEmail.value == "") {
      loginEmailError.innerHTML = "Field cannot be left blank abeg ";
    } else if (loginEmail.value !== newUser.email) {
      loginEmailError.innerHTML = " Invalid Email or Password, check well";
    } else {
      loginEmailMailError.innerHTML = "";
    }
    if (loginPassword.value == null || loginPassword.value == "") {
    } else if (loginPassword.value !== newUser.password) {
      loginPasswordError.innerHTML = "Invalid Email or password, check well";
    } else {
      loginSuccess.innerHTML = " Logged in successful";
    }
  });
};

// validation for the contact form

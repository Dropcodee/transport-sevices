let submitUser = document.getElementById("submit");
firstName = document.getElementById("userName");
email = document.getElementById("userEmail");
password = document.getElementById("userPassword");
password2 = document.getElementById("userVerifyPassword");
// errors variables
let firstNameError = document.getElementById("userNameError");
let emailError = document.getElementById("userEmailError");
let passwordError = document.getElementById("userPasswordError");
let password2Error = document.getElementById("verifyPasswordError");

// user registration values
let newUser = {
  name: firstName,
  email: email,
  password: password
};
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
      newUser.name = firstName.value;
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
      newUser.password = password.value;
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
    newUser.email = email.value;
  }
};

// Login validation

onLoginClick = () => {
  loginUser.addEventListener("click", event => {
    event.preventDefault();

    if (loginEmail !== newUser.email) {
      loginMailError.innerHTML = " Invalid Email or Password";
    } else {
      loginMailError.innerHTML = "";
    }
  });
};

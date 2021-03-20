import validator from "validator";

const emailValidation = (e) => {
  var email = e.target.value;
  let message = { text: "", email: "", acceptEmail: false };
  if (validator.isEmail(email)) {
    message.text = "valid email";
    message.email = email;
    message.acceptEmail = true;
  } else {
    message.text = "Enter valid Email!";
  }
  return message;
};

const passwordValidation = (value) => {
  let message = { text: "", acceptPassword: false };
  if (
    validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    message.text = "Is Strong Password";
    message.acceptPassword = true;
  } else {
    message.text = "Weak password";
  }

  return message;
};

export { emailValidation, passwordValidation };

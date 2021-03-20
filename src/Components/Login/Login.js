import {
  facebookSignIn,
  googleSignIn,
  login,
  initializeFirebaseApp,
  signInWithEmailAndPass,
} from "./FirebaseCode/LoginMethods";
import React, { useContext, useState } from "react";
import "./Login.css";
import { emailValidation, passwordValidation } from "./ValidationFunction";
import { UserContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  const [user, setUser] = useContext(UserContext);

  initializeFirebaseApp();
  const [displayUserNameField, setDisplayUserNameField] = useState(false);
  const [showEmailToast, setShowEmailToast] = useState(false);
  const [showPassWordToast, setShowPasswordToast] = useState(false);
  const [emailValidationMessage, setEmailValidationMessage] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordStrengthMessage, setPasswordStrengthMessage] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    photo: "",
    acceptPass: false,
    password: "",
    confirmPassword: "",
  });
  let { from } = location.state || { from: { pathname: "/" } };
  const toastEmailMessage = () => {
    setShowEmailToast(true);
    setTimeout(() => {
      setShowEmailToast(false);
    }, 3000);
  };
  const toastPasswordMessage = () => {
    setShowPasswordToast(true);
    setTimeout(() => {
      setShowPasswordToast(false);
    }, 3000);
  };

  const handleErrorMessage = (text) => {
    setErrorMessage(text);
    setTimeout(() => {
      setErrorMessage("");
    }, 10000);
  };
  const inputChange = (e) => {
    let isFieldValid = true;
    let message;
    if (e.target.name === "email") {
      message = emailValidation(e);
      setEmailValidationMessage(message);
      toastEmailMessage();
      isFieldValid = message.acceptEmail;
    }
    if (e.target.name === "password") {
      message = passwordValidation(e.target.value);
      setPasswordStrengthMessage(message);
      toastPasswordMessage();
      isFieldValid = message.acceptPassword;
    }

    const newUser = { ...userInfo };
    if (isFieldValid) {
      newUser[e.target.name] = e.target.value;
    } else {
      newUser[e.target.name] = "";
    }
    setUserInfo(newUser);
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      if (res.name || res.email) {
        setUser(res);
        history.replace(from);
      } else {
        handleErrorMessage(res);
      }
    });
  };

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    if (userInfo.password === userInfo.confirmPassword) {
      signInWithEmailAndPass(
        userInfo.name,
        userInfo.email,
        userInfo.password
      ).then((res) => {
        if (res.name || res.email) {
          const newUser = { ...res };
          newUser.name = userInfo.name;
          setUser(newUser);
          history.replace(from);
        } else {
          handleErrorMessage(res);
        }
      });
    } else {
      handleErrorMessage(
        "sorry password does not match or password strength is weak. Your password should have minimum length of 8 characters containing at least 1 lower case,1 uppercase, 1 number, 1 symbol."
      );
    }
  };
  const handleFacebookLogin = () => {
    facebookSignIn().then((res) => {
      if (res.name || res.email) {
        setUser(res);
        history.replace(from);
      } else {
        handleErrorMessage(res);
      }
    });
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    login(userInfo.email, userInfo.password).then((res) => {
      if (res.name || res.email) {
        setUser(res);
        history.replace(from);
      } else {
        handleErrorMessage(res);
      }
    });
  };

  return (
    <div className=" p-5 m-auto login-form img-fluid">
      <h3 className="text-center">
        {displayUserNameField
          ? "Create an account"
          : "Log in using email ans password"}
      </h3>
      <form
        className="border border-primary rounded p-2"
        onSubmit={handleEmailSignIn}
      >
        {displayUserNameField && (
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            required
            name="name"
            onChange={inputChange}
          />
        )}
        <div className="mb-3 email-input">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label"
            style={{ fontSize: 12 }}
          >
            Email address :
            <div
              className={`d-flex text-white ${
                emailValidationMessage.acceptEmail ? "bg-success" : "bg-danger"
              } toast-message ${
                showEmailToast && displayUserNameField ? "d-block" : "d-none "
              }`}
            >
              <div className="toast-body">{emailValidationMessage.text}</div>
              <i
                className={`bi bi-caret-down-fill  ${
                  emailValidationMessage.acceptEmail
                    ? "text-success"
                    : "text-danger"
                }  `}
              ></i>
            </div>
          </label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            type="text"
            aria-describedby="emailHelp"
            required
            onChange={inputChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label password-input"
            style={{ fontSize: 12 }}
          >
            Password :
            {displayUserNameField &&
              "Your password should have minimum length of 8 characters containing at least 1 lower case,1 uppercase, 1 number, 1 symbol."}
            <div
              className={`d-flex text-white ${
                passwordStrengthMessage.acceptPassword
                  ? "bg-success"
                  : "bg-danger"
              } toast-message ${
                showPassWordToast && displayUserNameField
                  ? "d-block"
                  : "d-none "
              }`}
            >
              <div className="toast-body"> {passwordStrengthMessage.text}</div>
              <i
                className={`bi bi-caret-down-fill  ${
                  passwordStrengthMessage.acceptPassword
                    ? "text-success"
                    : "text-danger"
                }  `}
              ></i>
            </div>
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
            name="password"
            onChange={inputChange}
          />
        </div>
        {displayUserNameField && (
          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">
              Confirm password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirm-password"
              name="confirmPassword"
              required
              onChange={inputChange}
            />
          </div>
        )}
        <div>
          {displayUserNameField ? (
            <input type="submit" className="w-100 btn text-white bg-primary" />
          ) : (
            <div>
              <div className="d-flex justify-content-between">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
                <Link to="#">
                  <p> Forget password ?</p>
                </Link>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                onClick={handleLogIn}
              >
                Log in
              </button>
            </div>
          )}
        </div>
        <div className="mb-3 form-check text-center">
          <p
            className="text-decoration-underline"
            onClick={() => setDisplayUserNameField(!displayUserNameField)}
          >
            {displayUserNameField
              ? "Already have an account? Log in"
              : " Don't have an account ? Sign in"}
          </p>
        </div>
      </form>
      <p className="text-center text-danger">{errorMessage}</p>
      {}
      <div className="break-line">
        <div className="break-line-div "></div>
        <div className="break-line-div-middle">or</div>
        <div className="break-line-div "></div>
      </div>
      <div className="submit-button">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleGoogleSignIn}
        >
          <i className="bi bi-google"></i> Continue with google
        </button>
      </div>
      <div className="submit-button mt-2">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleFacebookLogin}
        >
          <i className="bi bi-facebook"></i> Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;

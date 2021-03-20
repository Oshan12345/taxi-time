import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeFirebaseApp = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const googleSignIn = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const { displayName, email, photoURL } = result.user;
      let userDetails = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      return userDetails;
    })
    .catch((error) => {
      const errorMessage = error.message;

      return errorMessage;
    });
};
export const facebookSignIn = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const { displayName, email, photoURL } = result.user;
      let userDetails = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      return userDetails;
    })
    .catch((error) => {
      var errorMessage = error.message;
      return errorMessage;
    });
};
export const signInWithEmailAndPass = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      updateUserName(name);
      const { displayName, email, photoURL } = userCredential.user;
      let userDetails = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      return userDetails;
    })
    .catch((error) => {
      var errorMessage = error.message;
      return errorMessage;
    });
};

const updateUserName = (name) => {
  let user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {
      console.log("user name set up successfully");
    })
    .catch(function (error) {
      console.log("error during updating user name ", error);
    });
};

export const login = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const { displayName, email, photoURL } = userCredential.user;
      let userDetails = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      return userDetails;
    })
    .catch((error) => {
      var errorMessage = error.message;
      return errorMessage;
    });
};

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("log out successfully");
    })
    .catch((error) => {
      // An error happened.
    });
};

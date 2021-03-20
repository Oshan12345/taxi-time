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
      // ...
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
      console.log("hello", name);
      updateUserName(name);
      // Signed in
      //const userInfo = userCredential.user;

      // .then(function () {
      //   // Update successful.
      //   console.log("updated successfully");
      // })
      // .catch(function (error) {
      //   // An error happened.
      // });
      // return userInfo;
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

//
const updateUserName = (name) => {
  var user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {
      console.log("Update successful");
    })
    .catch(function (error) {
      // An error happened.
      console.log("nnn", error);
    });
};
//

// auth
//   .createUserWithEmailAndPassword(mail, password)
//   .then((authUser) => {
//     console.log(authUser);
//     authUser.user.update({
//       displayName: name,
//       photoURL:
//         imageUrl ||
//         "https://media.distractify.com/brand-img/6UqU-veoB/0x0/avatar-1614215731705.png",
//     });
//   })
//   .catch((err) => alert(err.message));

export const login = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      // var user = userCredential.user;
      // // ...
      // return user;
      const { displayName, email, photoURL } = userCredential.user;
      let userDetails = {
        name: displayName,
        email: email,
        photo: photoURL,
      };

      console.log("inside the the----", userCredential);
      return userDetails;
    })
    .catch((error) => {
      console.log("inside the catch----", error);
      var errorMessage = error.message;
      return errorMessage;
    });
};

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log("log out successfully");
    })
    .catch((error) => {
      // An error happened.
    });
};

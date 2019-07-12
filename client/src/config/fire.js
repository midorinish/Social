import app from "firebase/app";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSYm-xiv8rVeSn8-ILy-SnGhE76OmDNU8",
  authDomain: "social-bd5dc.firebaseapp.com",
  databaseURL: "https://social-bd5dc.firebaseio.com",
  projectId: "social-bd5dc",
  storageBucket: "",
  messagingSenderId: "615315112538",
  appId: "1:615315112538:web:fb5503d4a8f7ab40"
};
// Initialize Firebase

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}

export default Firebase;


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCC1GmDO9pxUwR-9Rz9XYB7nnZshGF7HLM",
  authDomain: "speakfriend-b449a.firebaseapp.com",
  projectId: "speakfriend-b449a",
  storageBucket: "speakfriend-b449a.appspot.com",
  messagingSenderId: "963353950300",
  appId: "1:963353950300:web:63fa147cbb8688a9f4ce99",
  measurementId: "G-G101WQ5ZZ2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
window.auth = auth;
window.recaptchaVerifier = new RecaptchaVerifier('sendCode', {
  size: 'invisible',
  callback: (response) => {}
}, auth);

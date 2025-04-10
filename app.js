
let confirmationResult = null;

function sendCode() {
  const input = document.getElementById("identifier").value;
  if (input.includes("@")) {
    alert("L’authentification email avec code sera ajoutée bientôt.");
  } else {
    const phoneNumber = input;
    window.recaptchaVerifier.verify().then(() => {
      signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
        .then((result) => {
          confirmationResult = result;
          alert("Code envoyé. Vérifie tes SMS.");
        }).catch((error) => {
          alert("Erreur : " + error.message);
        });
    });
  }
}

function verifyCode() {
  const code = document.getElementById("code").value;
  const pseudo = document.getElementById("pseudo").value;
  confirmationResult.confirm(code).then((result) => {
    const user = result.user;
    document.getElementById("auth-screen").classList.remove("active");
    document.getElementById("main-app").classList.add("active");
    document.getElementById("bottom-nav").classList.add("active");
    document.getElementById("welcome-user").innerText = "Bonjour " + pseudo + " !";
  }).catch((error) => {
    alert("Code invalide : " + error.message);
  });
}

function switchTab(tab) {
  alert("Fonctionnalité '" + tab + "' à venir.");
}

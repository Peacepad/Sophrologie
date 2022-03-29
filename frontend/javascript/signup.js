const emailRegExp = /.+\@.+\..+/;
const emailDOM = document.getElementById("signup-form__email");

const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
const passwordDOM = document.getElementById("signup-form__password");
const password2DOM = document.getElementById("signup-form__password2");

function checkEmail() {
  // On vérifie le champ au moment de l'envoi

  document.getElementById("signup-form").addEventListener("submit", () => {
    const emailValue = emailDOM.value;

    if (!emailRegExp.test(emailValue)) {
      emailDOM.classList.add("invalid");
    }
  });

  emailDOM.addEventListener("focus", () => {
    emailDOM.classList.remove("invalid");
  });
}

checkEmail();

function checkPassword() {
  // Vérification du mot de passe

  document.getElementById("signup-form").addEventListener("submit", () => {
    const passwordValue = passwordDOM.value;
    const password2Value = password2DOM.value;

    if (!passwordRegExp.test(passwordValue)) {
      passwordDOM.classList.add("invalid");
      document.getElementById("signup-password").style.display = "block";
    }
    if (!passwordRegExp.test(password2Value)) {
      password2DOM.classList.add("invalid");
    }
    if (passwordValue != password2Value) {
      password2DOM.classList.add("invalid");
      document.getElementById("signup-password2").style.display = "block";
    }
  });

  passwordDOM.addEventListener("focus", () => {
    passwordDOM.classList.remove("invalid");
  });

  password2DOM.addEventListener("focus", () => {
    password2DOM.classList.remove("invalid");
  });
}

checkPassword();

function verifySignup() {
  document.getElementById("signup-form").addEventListener("submit", (e) => {
    // Mettre un spinner dans le bouton de connexion
    document.querySelector(".submit-spinner").style.display = "flex";

    const emailValue = emailDOM.value;
    const passwordValue = passwordDOM.value;
    const password2Value = password2DOM.value;

    if (
      !passwordRegExp.test(passwordValue) ||
      !emailRegExp.test(emailValue) ||
      !passwordRegExp.test(password2Value) ||
      passwordValue != password2Value
    ) {
      e.preventDefault();
      setTimeout(() => {
        document.querySelector(".submit-spinner").style.display = "none"; // suppression du spinner
      }, 500);
    } else {
      e.preventDefault();

      let signupData = {
        email: emailValue,
        password: passwordValue,
        password2: password2Value,
      };

      fetch(`http://localhost:3000/api/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      })
        .then((res) => {
          console.log(res);
          // Si c'est bon
          if (res.status == 201) {
            setTimeout(() => {
              document.location.href = "./signin.html";
            }, 1000);
          }
          // Si l'adresse existe déjà
          if (res.status === 403) {
            setTimeout(() => {
              document.getElementById("signup-account").style.display = "block";
              emailDOM.classList.add("invalid");
              // Création d'une fenêtre pour annoncer que le compte existe déjà
              document.querySelector(".submit-spinner").style.display = "none"; // suppression du spinner
            }, 1000);
          }
        })
        .catch();
    }
  });
}

verifySignup();

emailDOM.addEventListener("input", () => {
  document.getElementById("signup-account").style.display = "none";
});

passwordDOM.addEventListener("input", () => {
  document.getElementById("signup-password").style.display = "none";
  document.getElementById("signup-password2").style.display = "none";
});

password2DOM.addEventListener("input", () => {
  document.getElementById("signup-password2").style.display = "none";
});

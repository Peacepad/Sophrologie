const emailDom = document.querySelector("#register__email");
const passwordConfirmationDom = document.querySelector("#register__password2");
const passwordDom = document.querySelector("#register__password");

function verifyPassword() {
  passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
  passwordDom.addEventListener("input", () => {
    document.querySelector("#subscription__password-incorrect").style.display =
      "none";
    if (!passwordRegExp.test(passwordDom.value)) {
      passwordDom.classList.remove("valid");
    } else {
      passwordDom.classList.add("valid");
    }
  });
}

verifyPassword();

function verifyConfirmationPassword() {
  passwordConfirmationDom.addEventListener("input", () => {
    document.querySelector("#subscription__password-incorrect").style.display =
      "none";
    if (passwordConfirmationDom.value != passwordDom.value) {
      passwordConfirmationDom.classList.remove("valid");
    } else {
      passwordConfirmationDom.classList.add("valid");
    }
  });
}

verifyConfirmationPassword();

function verifyEmail() {
  emailRegExp = /.+\@.+\..+/;

  emailDom.addEventListener("input", () => {
    document.querySelector("#subscription__email-incorrect").style.display =
      "none";
    if (emailRegExp.test(emailDom.value)) {
      emailDom.classList.add("valid");
      emailDom.classList.remove("invalid");
    } else {
      emailDom.classList.add("invalid");
      emailDom.classList.remove("valid");
    }
  });

  emailDom.addEventListener("focus", () => {
    emailDom.classList.remove("invalid");
    emailDom.classList.remove("valid");
  });
}

verifyEmail();

function sendRegister() {
  document.querySelector("#register").addEventListener("submit", (e) => {
    e.preventDefault();
    // valeurs à envoyer
    let emailValue = emailDom.value;
    let passwordValue = passwordDom.value;
    let passwordConfirmationValue = passwordConfirmationDom.value;

    let data = {
      email: emailValue,
      password: passwordValue,
    };

    // Vérification des valeurs
    emailRegExp = /.+\@.+\..+/;
    passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

    if (
      emailRegExp.test(emailValue) &&
      passwordRegExp.test(passwordValue) &&
      passwordValue == passwordConfirmationValue
    ) {
      fetch("http://localhost:3000/api/user/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json;
        })
        .catch((error) => {
          return error.json;
        });
    } else if (!emailRegExp.test(emailValue)) {
      incorrectEmail();
    } else if (
      !passwordRegExp.test(passwordValue) ||
      passwordConfirmationValue != passwordValue
    ) {
      incorrectPassword();
    }
  });
}

sendRegister();

function incorrectEmail() {
  document.querySelector("#subscription__email-incorrect").style.display =
    "flex";
}

function incorrectPassword() {
  document.querySelector("#subscription__password-incorrect").style.display =
    "flex";
}

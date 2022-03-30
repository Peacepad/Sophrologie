const emailRegExp = /.+\@.+\..+/;
const emailDOM = document.getElementById("signin-form__email");


const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
const passwordDOM = document.getElementById("signin-form__password");


function checkEmail() {
  // On vérifie le champ au moment de l'envoi

  document.getElementById("signin-form").addEventListener("submit", () => {
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
  // On vérifie le champ au moment de l'envoi

  document.getElementById("signin-form").addEventListener("submit", () => {
    const passwordValue = passwordDOM.value;
    if (!passwordRegExp.test(passwordValue)) {
      passwordDOM.classList.add("invalid");
    }
  });

  passwordDOM.addEventListener("focus", () => {
    passwordDOM.classList.remove("invalid");
  });
}

checkPassword();

function verifySignIn() {
  document.getElementById("signin-form").addEventListener("submit", (e) => {
    const emailValue = emailDOM.value;
    const passwordValue = passwordDOM.value;
    if (!emailRegExp.test(emailValue) || !passwordRegExp.test(passwordValue)) {
      e.preventDefault();
    } else {
      
      

      function sendSignIn() {
        let signinData = {
          email: emailValue,
          password: passwordValue,
        };
        fetch(`http://localhost:3000/api/user/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          
          credentials: "include",
          body: JSON.stringify(signinData),
        }).then((res) => {
          console.log(res);
          
        })
        .catch();
      }

      sendSignIn();
      e.preventDefault();
      
    }
  });
}

verifySignIn();

function test() {
  console.log(document.cookie)
}
test()
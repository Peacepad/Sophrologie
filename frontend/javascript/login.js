function sendLogin() {
  let loginDom = document.querySelector("#login__email");
  let passwordDom = document.querySelector("#login__password");

  let emailValue = loginDom.value;
  let passwordValue = passwordDom.value;

  document.querySelector("#login").addEventListener("submit", (e) => {
    data = {
      email: emailValue,
      password: passwordValue,
    };

    fetch("http://localhost:3000/api/user/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        
        
        return res.json();
      })
      .then((dataFromServer) => {
        localStorage.setItem("token", dataFromServer.token);
      })
        .catch((res) => {
        return res.json();
      });
  });
}

sendLogin();

function isConnected() {
  const token = localStorage.getItem("token");

  if (token == undefined) {
    let linkForAccount = document.createElement("a");

    linkForAccount.setAttribute("href", "./pages/signin.html");
    linkForAccount.className = "header-account__button";

    document
      .querySelector(`#header-account__button`)
      .appendChild(linkForAccount);

    document.querySelector(
      ".header-account__button"
    ).innerHTML = `<i class="fas fa-user"></i> Se connecter`;
  } else {
    let linkForAccount = document.createElement("a");

    linkForAccount.setAttribute("href", "./pages/signin.html");
    linkForAccount.className = "header-account__button";

    document
      .querySelector(`#header-account__button`)
      .appendChild(linkForAccount);
    document.querySelector(
      ".header-account__button"
    ).innerHTML = `<i class="fas fa-user"></i> Mon compte`;
  }
}

isConnected();

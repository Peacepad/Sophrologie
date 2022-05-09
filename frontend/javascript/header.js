function isConnected() {
  const token = localStorage.getItem("token");
  let documentLocation = document.location.href;

  if (token == undefined) {
    let linkForAccount = document.createElement("a");

    if (documentLocation.includes("index.html")) {
      linkForAccount.setAttribute("href", "./pages/signin.html");
    } else {
      linkForAccount.setAttribute("href", "./signin.html");
    }

    linkForAccount.className = "header-account__link";

    document
      .querySelector(`.header-account__button`)
      .appendChild(linkForAccount);

    document.querySelector(
      ".header-account__link"
    ).innerHTML = `<i class="fas fa-user"></i> Se connecter`;
  } else {
    let linkForAccount = document.createElement("a");

    // lien différent en fonction de la page d'accueil
    if (documentLocation.includes("index.html")) {
      linkForAccount.setAttribute("href", "./pages/signin.html");
    } else {
      linkForAccount.setAttribute("href", "./signin.html");
    }
    linkForAccount.className = "header-account__link";

    document
      .querySelector(`.header-account__button`)
      .appendChild(linkForAccount);
    document.querySelector(
      ".header-account__link"
    ).innerHTML = `<i class="fas fa-user"></i> Mon compte`;
  }
}

isConnected();

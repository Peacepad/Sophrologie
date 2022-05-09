function verifyConnection() {
    const token = localStorage.getItem("token");
    if (token) {
        document.querySelector('.header-account__button').href= "myaccount.html";
        document.querySelector('.header-account__button').innerHTML= "Mon compte"
    }
};

verifyConnection();
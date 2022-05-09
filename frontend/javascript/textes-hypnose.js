let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function () {
  const cardContainer = document.querySelector(".card-container");
  if (httpRequest.readyState === 4) {
    cardContainer.innerHTML = "";
    if (httpRequest.status === 201) {
      function showDataFromServer() {
        const response = JSON.parse(httpRequest.responseText);
        const cardContainer = document.querySelector(".card-container");

        for (let i = 0; i < response.length; i++) {
          // Creation de la carte
          let card = document.createElement("div");
          cardContainer.appendChild(card);
          card.setAttribute("class", "card");
          // Ajout du lien vers la page
          let cardLink = document.createElement("a");
          card.appendChild(cardLink);
          cardLink.setAttribute("href", `./one_text.html?id=${response[i].text_id}`)
          // Ajout du titre
          let cardHeader = document.createElement("div");
          cardLink.appendChild(cardHeader);
          cardHeader.setAttribute("class", "card-header");
          cardHeader.innerText = `${response[i].title}`;
          // Ajout de l'image
          let cardImage = document.createElement("div");
          cardLink.appendChild(cardImage);
          cardImage.setAttribute("class", "card-img");
          let image = document.createElement("img");
          cardImage.appendChild(image);
          image.setAttribute("src", `${response[i].image}`);
          // Ajout de la description
          let cardDescription = document.createElement("div");
          cardLink.appendChild(cardDescription);
          cardDescription.setAttribute("class", "card-description");
          cardDescription.innerText = `${response[i].description}`;
          // Ajout du prix
          let cardPrice = document.createElement("div");
          cardLink.appendChild(cardPrice);
          cardPrice.setAttribute("class", "card-price");
          cardPrice.innerText = `${response[i].price}€`;
        }
      }
      showDataFromServer();
    }
  }
};

httpRequest.open("POST", "http://localhost:3000/api/text/", true);

httpRequest.send();

const formTriDOM = document.getElementById("filter-form-tri");
const formCategoryDOM = document.getElementById("filter-form-category");



formTriDOM.addEventListener("change", () => {
  
  const triValue = formTriDOM.value;
  const categoryValue = formCategoryDOM.value;

  const params = {
    tri: triValue,
    category: categoryValue,
  };

  httpRequest.open("POST", "http://localhost:3000/api/text/", true);
  httpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );

  httpRequest.send(JSON.stringify(params));
});

formCategoryDOM.addEventListener('change', () => {

  const triValue = formTriDOM.value;
  const categoryValue = formCategoryDOM.value;

  const params = {
    tri: triValue,
    category: categoryValue,
  };

  httpRequest.open("POST", "http://localhost:3000/api/text/", true);
  httpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );

  httpRequest.send(JSON.stringify(params));

})
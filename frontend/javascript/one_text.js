const token = localStorage.getItem("token");
const pageParams = new URL(document.location).searchParams;
const text_id = pageParams.get("id");

function getOneText() {
  return fetch(`http://localhost:3000/api/text/${text_id}`, {
    method: "GET",
    headers: {
      authorization: "Bearer " + token,
      "content-type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((textData) => {
      return textData;
    });
}
getOneText();

async function showText() {
  const textData = await getOneText();

  // image Book
  const textImageContainer = document.getElementById("book-image");
  const textImage = document.createElement("img");
  textImageContainer.appendChild(textImage);
  textImage.setAttribute("src", textData.link_picture);

  console.log(textData.link_picture);

  // title Book
  const textTitleBook = document.getElementById("book-title");
  textTitleBook.innerText = `${textData.title}`;

  // title
  const textTitle = document.querySelector(".text-information-title");
  textTitle.innerText = `${textData.title}`;

  // description
  const textDescription = document.querySelector(
    ".text-information-description"
  );
  textDescription.innerText = `${textData.description}`;

  // Prix
  const textPrice = document.querySelector('.text-information-price');
  textPrice.innerText = `${textData.price}` + '€';
}

showText();

window.addEventListener("scroll", (e) => {
  if (document.body.scrollTop >= 10) {
      
    document.getElementById("left-cover").classList.remove("book-anim");
    document
      .getElementById("book-background")
      .classList.remove("book-background-anim");
    document
      .getElementById("book-container")
      .classList.remove("book-container-anim");
    document
      .querySelector(".text-information")
      .classList.remove("text-information-anim");
  } else {
    
    document.getElementById("left-cover").classList.add("book-anim");
    document
      .getElementById("book-background")
      .classList.add("book-background-anim");
    document
      .getElementById("book-container")
      .classList.add("book-container-anim");
    document
      .querySelector(".text-information")
      .classList.add("text-information-anim");
    document.querySelector('.text-information-description').classList.add("appear");
    document.querySelector('.add-cart').classList.add("appear");
    document.querySelector('.text-information-more').classList.add("disappear");
    


  }
});

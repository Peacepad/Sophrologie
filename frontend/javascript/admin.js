function addText() {
    document.getElementById('form-text').addEventListener("submit", (e) => {
        e.preventDefault()

        const token = localStorage.getItem("token");
        const titleDOM = document.getElementById('form-text-title');
        const descriptionDOM = document.getElementById('form-text-description');
        const priceDOM = document.getElementById('form-text-price');
        const category1DOM = document.getElementById('form-text-category1');
        const category2DOM = document.getElementById('form-text-category2');
        const pictureDOM = document.getElementById('form-text-picture');
        const PDFDOM = document.getElementById('form-text-PDF');
        
       
       let textData = new FormData();

       textData.append("title", titleDOM.value);
       textData.append("description", descriptionDOM.value);
       textData.append("price", priceDOM.value);
       textData.append("category1", category1DOM.value);
       textData.append("category2", category2DOM.value);
       textData.append("picture", pictureDOM.files[0]);
       textData.append("PDF", PDFDOM.files[0]);
       

       fetch("http://localhost:3000/api/text/create", {
        method: "POST",
        body: textData,
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then(() => console.log("document envoyé"))
      .catch(() => console.log("document NON envoyé"))
    })
};

addText();


let getHttpRequest = new XMLHttpRequest();

getHttpRequest.onreadystatechange = function() {
  if(getHttpRequest.readyState == 4) {
    const response = JSON.parse(getHttpRequest.responseText);

    const textList = document.getElementById('text-list');
    console.log(response)
    for(let i = 0; i < response.length; i++) {
      let li = document.createElement('li');
      textList.appendChild(li);
      
      let textForm = document.createElement('form');
      li.appendChild(textForm);
      textForm.setAttribute('id', `text-form__${response[i].text_id}`);

      textForm.innerHTML = `<input type="text" value='${response[i].title}'></input>
      <input type="text" value='${response[i].description}'></input>
      <input type="number" value='${response[i].price}'></input>
      <select>
      <option value='${response[i].category1}'>${response[i].category1}</option>
      </select>
      <select>
      <option value='${response[i].category2}'>${response[i].category2}</option>
      </select>
      <img class="text-form__img" src="${response[i].image}"/>
      `;

    }
    
  }
}

getHttpRequest.open('GET', 'http://localhost:3000/api/text/', true)

getHttpRequest.send();




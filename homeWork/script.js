// import { api_key } from "./config"

function Album() {
  fetch("https://api.pexels.com/v1/search?query=people", {
    headers: {
      Authorization: "563492ad6f91700001000001ad21b22d8d5e4a00b9135265a6ac4c23",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);

      const imag = data.photos;

      console.log(imag);

      const forCard = document.querySelector(".container > .row");
      for (let m = 0; m < imag.length; m++) {
        let images = imag[m];

        const card = document.createElement("div");
        card.className = "col-sm-6 col-md-4 col-lg-3";
        //  console.log(images.photographer);
        card.innerHTML = `  
<div class="card p-2" style="width: 18rem;">
  <img src="${images.src.original}" class="card-img-top" alt="${images.alt}">
  <div class="card-body">
    <h5 class="card-title">${images.photographer}</h5>
  
    <a href="${images.photographer_url}" class="btn btn-primary">Photographer </a>
  </div>
</div>

`;
        forCard.appendChild(card);
      }
    })
    .catch((err) => console.error(err));
}

window.onload = () => {
  const btn = document.getElementById("close");

  btn.addEventListener("click", Album);
};
// const btnCose = document.getElementById("#close")
function CloseDiv() {
  let rm = document.getElementById("main");
  rm.classList.add("remove");
}

// second card

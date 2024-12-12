const imagens = [
  "src/images/cravo.png",
  "src/images/cravo.png",
  "src/images/gerbera.png",
  "src/images/gerbera.png",
  "src/images/girassol.png",    
  "src/images/girassol.png",    
  "src/images/orquidea.png",
  "src/images/orquidea.png",
  "src/images/papoula.png",
  "src/images/papoula.png",
  "src/images/rosa.png",
  "src/images/rosa.png",   
];  

let openCards = [];

let shuffleCards = imagens.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < imagens.length; i++) {
  let box = document.createElement("div");
  box.className = "item";

  let img = document.createElement("img");
  img.src = shuffleCards[i];  

  box.appendChild(img);
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");

  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === imagens.length) { 
    showWinMessage();   
  }
}

function showWinMessage() {
  const winMessage = document.querySelector(".mensagem-final");
  winMessage.classList.remove("hidden");
}

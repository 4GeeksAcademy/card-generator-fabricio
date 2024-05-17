/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let palo = Math.floor(Math.random() * 3);
  let numCard = Math.floor(Math.random() * 12);
  let typePalo = ["♦", "♥", "♠", "♣"];

  let p = document.createElement("p");
  p.innerHTML = `<span>${typePalo[palo]}</span> ${numCard} <span>${typePalo[palo]}</span>`;

  if (palo === 0) {
    p.classList.add("diamond");
  } else if (palo === 1) {
    p.classList.add("heart");
  } else if (palo === 2) {
    p.classList.add("spade");
  } else {
    p.classList.add("club");
  }

  let divContainer = document.getElementById("card-body");
  divContainer.classList.add("naipe");

  divContainer.appendChild(p);
};

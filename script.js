"use strict";

const personality = [
  "intelligent",
  "unlucky",
  "bright",
  "goldman",
  "shineman",
  "superman",
  "unscared",
  "scared",
  "chick",
  "hen",
  "angel",
  "demon",
  "lucky",
  "villian",
  "winner",
  "loser",
  "thinker",
  "spoiled",
  "better",
  "good",
  "musician",
  "best",
  "bad",
  "police",
  "soldier",
  "thief",
  "begger",
  "programmer",
  "lawyer",
  "rich",
  "artist",
  "doctor",
  "banker",
];

let counter = 0;
let tempArr = [];
let userSelection = [];

function randomArrVal() {
  return Math.floor(Math.random() * personality.length);
}

const finalValue = () => {
  for (let i = 0; i < 3; i++) {
    tempArr.push(personality[randomArrVal()]);
  }
  return tempArr;
};

function removeColor(classN) {
  classN.classList.add("removeColor");
  userSelection.push(classN.textContent);
  counter++;
  if (counter > 2) {
    document.querySelector(".parent").style.display = "none";
    document.querySelector(".wait").style.display = "block";

    setTimeout(() => {
      document.querySelector(".wait").style.display = "none";
    }, 1000);

    const finalRes = finalValue();

    setTimeout(() => {
      document.querySelector(
        ".final",
      ).textContent = `${userSelection[0]} ${finalRes[0]} 
      ${userSelection[1]} ${finalRes[1]} 
      ${userSelection[2]} ${finalRes[2]} `;
    }, 2000);
  }
}

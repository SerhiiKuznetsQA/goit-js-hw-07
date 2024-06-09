const inputValue = document.querySelector("input[type=number]");
const createElem = document.querySelector("[data-create]");
const deleteElem = document.querySelector("[data-destroy]");
const createBox = document.querySelector("#boxes");
inputValue.addEventListener("input", handlerInput);
inputValue.addEventListener("blur", () => {
  inputValue.value = "";
});
deleteElem.addEventListener("click", handlerDeleteCollection);
createElem.addEventListener("click", handlerCreateCollection);
createElem.addEventListener("click", getRandomHexColor);
let valueInput = 0;
function handlerInput(event) {
  if (event) {
    valueInput = inputValue.valueAsNumber;
  }
}
let widthDiv = 30;
let heightDiv = 30;
function handlerCreateCollection(event) {
  if (valueInput < 1 || valueInput > 100 || isNaN(valueInput)) {
    return;
  }
  let collectionDivs = document.createDocumentFragment()
  console.dir(collectionDivs);
  for (let i = 1; i <= valueInput; i++) {

    let divChild = document.createElement("div");
    divChild.style.width = `${widthDiv}px`;
    divChild.style.height = `${heightDiv}px`;
    divChild.style.backgroundColor = getRandomHexColor();
    widthDiv += 10;
    heightDiv += 10;
    collectionDivs.append(divChild);
  }
   valueInput = "";
  createBox.append(collectionDivs);
 
}

function handlerDeleteCollection() {
  createBox.innerHTML = "";
  widthDiv = 30;
  heightDiv = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

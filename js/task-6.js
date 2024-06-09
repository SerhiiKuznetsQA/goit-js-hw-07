const inputValue = document.querySelector("input[type=number]");
const createElem = document.querySelector("[data-create]");
const deleteElem = document.querySelector("[data-destroy]");
const createBox = document.querySelector("#boxes");
inputValue.addEventListener("input", handlerInputA);
inputValue.addEventListener("blur", () => {
  inputValue.value = "";
});
deleteElem.addEventListener("click", handlerDelete);
createElem.addEventListener("click", handlerCreate);
createElem.addEventListener("click", getRandomHexColor);
let valueInput = 0;
function handlerInputA(event) {
  if (event) {
    valueInput = inputValue.valueAsNumber;
  }
}
let width = 30;
let height = 30;
function handlerCreate(event) {
  if (valueInput < 1 || valueInput > 100 || valueInput === " ") {
    return;
  }

  for (let i = 1; i <= valueInput; i++) {
    let divDiv = document.createElement("div");

    divDiv.style.width = `${width}px`;
    divDiv.style.height = `${height}px`;
    divDiv.style.backgroundColor = getRandomHexColor();
    width += 10;
    height += 10;
    createBox.append(divDiv);
  }
  valueInput = "";
}

function handlerDelete() {
  createBox.innerHTML = "";
   width = 30;
   height = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

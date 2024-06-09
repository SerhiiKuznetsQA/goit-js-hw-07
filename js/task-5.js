const changeColor = document.querySelector(".change-color")



changeColor.addEventListener("click", handlerColor)

function handlerColor(event) { 
// console.log(event);
  if (event) { 
    const spanColor = document.querySelector(".color")
    spanColor.innerHTML = document.body.style.backgroundColor =
      getRandomHexColor();
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


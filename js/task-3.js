const inputUserName = document.querySelector("#name-input")
const spanName = document.querySelector("#name-output");


inputUserName.addEventListener("input", handlerInput)


function handlerInput(event) { 
    const inputValue = event.currentTarget.value.trim(); 
    
    if (inputValue === "") {
      spanName.textContent = "Anonymous";
    } else {
      spanName.textContent = inputValue;
    }
    return spanName
}







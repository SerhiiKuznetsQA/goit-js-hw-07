const formSubmit = document.querySelector(".login-form")

formSubmit.addEventListener("submit", handlerForm)

function handlerForm(event) { 
    event.preventDefault()
    const form = event.target
    const emailinput = form.elements.email.value.trim()
    const passwordInput = form.elements.password.value.trim()

    if (emailinput === "" || passwordInput === "") {
        return alert("'All form fields must be filled in");
    }

    const formElemetnts = event.target.elements
    const fromData = {}
    Array.from(formElemetnts).forEach(element => {
        if (element.nodeName === "INPUT") { 
            fromData[element.name] = element.value
        }
        
    });
    console.log(fromData);

    formSubmit.reset()
}


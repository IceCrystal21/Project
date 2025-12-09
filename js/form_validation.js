let $ = (selector) => document.querySelector(selector)

let button = $("#submit-button")
button.addEventListener("click", function(event) {
    
    event.preventDefault()

    let name = $("#name").value

    let email = $("#email").value

    let age = $("#age").value

    let error = ""

    if (name.length < 2) {
        error += "Name is too short. \n"
    }
    
    if (!email.includes("@gmail.com")) {
        error += "Please enter a valid email. \n"
    }
    
    if (age < 16) {
        error += "You are too young to join our team."
    }

    if (error.length > 0) {
        alert(error)
    } else {
        alert("Your application has been submitted for review.")

        name.innerHTML = ""
        email.innerHTML = ""
        age.innerHTML = ""
    }
})
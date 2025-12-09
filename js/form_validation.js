let $ = (selector) => document.querySelector(selector)

let button = $("#submit-button")
button.addEventListener("click", function(event) {
    
    event.preventDefault()

    let name = $("#name").value
    let email = $("#email").value
    let age = $("#age").value

    let name_label = $("#name-label")
    let email_label = $("#email-label")
    let age_label = $("#age-label")

    if (name.length < 2) {
        name_label.innerHTML =  "Name is too short. \n"
    }
    
    if (!email.includes("@gmail.com")) {
        email_label.innerHTML = "Please enter a valid email. \n"
    }
    
    if (age < 16) {
        age_label.innerHTML= "You are too young to join our team."
    }

    if (error.length > 0) {
        alert(error)
    } else {
        alert("Your application has been submitted for review.")

        name_label.innerHTML = "Name:"
        email_label.innerHTML = "Email:"
        age_label.innerHTML = "Age: "
    }
})
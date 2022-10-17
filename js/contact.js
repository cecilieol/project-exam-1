const form = document.querySelector(".form");
const submittedForm = document.querySelector(".submitted-form");
const fullName = document.querySelector("#fullname");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const button = document.querySelector(".submit-button");
const contactModal = document.querySelector(".contact-modal");
const returnButton = document.querySelector(".return");
const newButton = document.querySelector(".contact-new");


function validateForm(event) {
    event.preventDefault();

    if(fullName.value.trim().length > 5) {
        nameError.style.display = "none";
        fullName.style.borderColor = "black";
    } else {
        nameError.style.display = "block";
        fullName.style.borderColor = "red";
    }

    if(validateEmail(email.value)) {
        emailError.style.display = "none";
        email.style.borderColor = "black";
    } else {
        emailError.style.display = "block";
        email.style.borderColor = "red";
    }

    if(subject.value.trim().length > 15) {
        subjectError.style.display = "none";
        subject.style.borderColor = "black";
    } else {
        subjectError.style.display = "block";
        subject.style.borderColor = "red";
    }

    if(message.value.trim().length > 25) {
        messageError.style.display = "none";
        message.style.borderColor = "black";
    } else {
        messageError.style.display = "block";
        message.style.borderColor = "red";
    }
}

form.addEventListener("submit", validateForm);

function validateEmail(email) { 
    const regEx = /\S+@\S+\.\S+/;
    const validEmail = regEx.test(email);    
    
    return validEmail;
}

function submitForm(event) {
    if((fullName.value.trim().length > 5) && (validateEmail(email.value)) && (subject.value.trim().length > 15) && (message.value.trim().length > 25)) {
        contactModal.style.display = "flex";
    } else {
        contactModal.style.display = "none";
    }
}

form.addEventListener("submit", submitForm);

window.onclick = function(event) {
    if (event.target === returnButton) {
        window.location.href = "http://cecilieolsen-project-exam-1.netlify.app/";
    }

    if (event.target === newButton) {
        contactModal.style.display = "none";
        location.reload();
    }
}

const returnButtonContact = document.querySelector(".return-button");

function previousPage() {
    window.history.back();
}

returnButtonContact.addEventListener("click", previousPage);
const returnButton = document.querySelector(".return-button");

function previousPage() {
    window.history.back();
}

returnButton.addEventListener("click", previousPage);
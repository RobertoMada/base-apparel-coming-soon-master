const inputEmail = document.querySelector(".email-input");
const errorMessage = document.querySelector(".error-message");
const submitButton = document.querySelector(".submit-btn");
const errorImg = document.querySelector(".error");
const emailInput = document.querySelector(".email-input");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


submitButton.addEventListener("click", () => {
  if(inputEmail.value === "" || !inputEmail.value.match(mailformat)){
    errorMessage.classList.remove("hidden");
    errorImg.classList.remove("hidden");
    emailInput.classList.add("border-red");
  }
})

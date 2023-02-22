// add form validation
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // validate name
  if (nameInput.value === "") {
    showError(nameInput, "Name is required.");
  } else {
    showSuccess(nameInput);
  }

  // validate email
  if (emailInput.value === "") {
    showError(emailInput, "Email is required.");
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, "Email is not valid.");
  } else {
    showSuccess(emailInput);
  }

  // validate message
  if (messageInput.value === "") {
    showError(messageInput, "Message is required.");
  } else {
    showSuccess(messageInput);
  }
});

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  const errorMessage = formGroup.querySelector(".error-message");
  errorMessage.innerText = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

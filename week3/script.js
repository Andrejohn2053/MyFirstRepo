// Select all the input elements and the form
const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

// Function to validate the email using a regular expression
function isEmailValid(emailValue) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(emailValue);
}

// Function to validate the password
function isPasswordValid(passwordValue) {
  return passwordValue.length >= 8;
}

// Function to update error messages and styles
function updateError(element, message, isValid) {
  const errorElement = element.nextElementSibling;
  if (!isValid) {
    errorElement.textContent = message;
    element.classList.add("error");
  } else {
    errorElement.textContent = "";
    element.classList.remove("error");
  }
}

// Event listeners for real-time validation
username.addEventListener("blur", () => {
  updateError(username, "Username is required", username.value.trim() !== "");
});

email.addEventListener("blur", () => {
  updateError(email, "Invalid email address", isEmailValid(email.value));
});

password.addEventListener("blur", () => {
  updateError(password, "Password must be at least 8 characters", isPasswordValid(password.value));
});

confirmPassword.addEventListener("blur", () => {
  updateError(confirmPassword, "Passwords do not match", confirmPassword.value === password.value);
});

// Event listener for form submission
form.addEventListener("submit", (event) => {
  if (
    username.value.trim() === "" ||
    !isEmailValid(email.value) ||
    !isPasswordValid(password.value) ||
    confirmPassword.value !== password.value
  ) {
    event.preventDefault(); // Prevent form submission if any validation fails
  }
}
);
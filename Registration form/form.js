const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const ageInput = document.querySelector("#age");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Passwords do not match!");
  } else {
    const data = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      age: ageInput.value,
    };
    console.log(data);
    form.reset();
  }
});
// script.js
// Responsive Navbar
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Form
const form = document.getElementById("userForm");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("nameInput").value;
  const birthday = document.getElementById("birthday").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("message").value;

  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString();

  //   console.log(name);
  //   console.log(birthday);
  //   console.log(gender);
  //   console.log(message);

  document.getElementById("displayTime").textContent = formattedTime;
  document.getElementById("displayNameHero").textContent = name;
  document.getElementById("displayName").textContent = name;
  document.getElementById("displayBirthday").textContent = birthday;
  document.getElementById("displayGender").textContent =
    gender === "men" ? "Laki-laki" : "Perempuan";
  document.getElementById("displayMessage").textContent = message;

  form.reset();
});

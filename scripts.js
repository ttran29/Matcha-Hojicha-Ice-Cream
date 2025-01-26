// Select the body element and the toggle button
const body = document.body;
const toggleButton = document.getElementById("dark-mode-toggle");

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "Light Mode";
}

// Add event listener for the toggle button
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Update the button text and save the theme preference
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

const headingElement = document.getElementById("contactHeading");
const inputElement = document.getElementById("input-name");
const buttonElement = document.getElementById("submit-button");

// Check if a name was previously stored and update the heading
window.addEventListener("load", function () {
  const savedName = localStorage.getItem("savedName");
  if (savedName) {
    headingElement.innerText = `Thank you, ${savedName}!`;
    localStorage.removeItem("savedName"); // Remove it after applying
  }
});

buttonElement.addEventListener("click", function () {
  let enteredName = inputElement.value.trim();

  if (enteredName !== "") {
    localStorage.setItem("savedName", enteredName); // Store name before reload
  }
});

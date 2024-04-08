// Selecting HTML elements by their IDs and assigning them to variables
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// Adding event listener to the SignUp button to trigger a class addition
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active"); // Adding class to container
});

// Adding event listener to the SignIn button to trigger a class removal
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active"); // Removing class from container
});

// Function to change background color every 3 seconds
function changeBackgroundColor() {
  const colors = ['#ff0000', '#00ff00', '#0000ff']; // Array of colors
  let index = 0;

  // Setting up an interval to change the background color
  setInterval(function() {
      document.body.style.backgroundColor = colors[index]; // Setting background color
      index = (index + 1) % colors.length; // Incrementing index, resetting if exceeds array length
  }, 3000); // Change color every 3 seconds (3000 milliseconds)
}

// Call the function when the page loads
window.addEventListener('load', changeBackgroundColor);

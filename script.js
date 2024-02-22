// Script for opening bio on click event

document.getElementById("toggleBio").addEventListener("click", function () {
  const button = document.getElementById("toggleBio");
  if (button.innerText === "Click to find out more about me") {
    button.innerText = "Hide";
  } else {
    button.innerText = "Click to find out more about me";
  }
});

/*
  Dynamically update the date on the newspaper webpage
    - Grab the element that will hold date content
        - document.querySelector()
    - Get the current date
    - Insert the current date information into the select element
*/
// Manhattan, NY - Monday December 28, 2020 - Seven Pages

// Grab Element with querySelector
const date = document.querySelector("#date");

// Get the current date
const today = new Date();
const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };

// Insert the current date information into the select element
date.innerHTML = `Manhattan, NY - ${today.toLocaleDateString("en-US", options)} - Seven Pages`; ``

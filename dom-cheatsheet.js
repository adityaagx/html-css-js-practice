/* =========================
   DOM CHEAT SHEET – ONE FILE
========================= */

/*
DOM (Document Object Model)
The browser converts HTML into a tree of objects.
JavaScript uses DOM to read, change, add, or remove HTML elements.
The `document` object represents the entire webpage.
*/


/* =========================
   SELECT ELEMENTS
========================= */

// By ID (single element)
document.getElementById("id");

// By class (multiple elements)
document.getElementsByClassName("class");

// By tag (multiple elements)
document.getElementsByTagName("p");

// Modern selectors (recommended)
document.querySelector("#id");     // tag
document.querySelector(".class");  // class
document.querySelector("p");       // id

document.querySelectorAll(".class"); // multiple


/* =========================
   CHANGE CONTENT
========================= */

// Change text only
element.textContent = "New text";

// Change HTML
element.innerHTML = "<strong>Bold text</strong>";


/* =========================
   CHANGE STYLES
========================= */

element.style.color = "red";
element.style.backgroundColor = "yellow";
element.style.fontSize = "20px";
element.style.padding = "10px";


/* =========================
   ATTRIBUTES
========================= */

element.setAttribute("src", "image.jpg");
element.setAttribute("href", "https://google.com");

element.getAttribute("src");
element.removeAttribute("disabled");


/* =========================
   CLASS LIST (VERY IMPORTANT)
========================= */

element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.contains("active");


/* =========================
   CREATE ELEMENTS
========================= */

let newDiv = document.createElement("div");
newDiv.textContent = "Hello DOM";
document.body.appendChild(newDiv);


/* =========================
   REMOVE ELEMENTS
========================= */

element.remove();


/* =========================
   EVENTS
========================= */

element.addEventListener("click", function () {
    console.log("Clicked");
});

// Common events:
// click
// submit
// input
// change
// keydown
// mouseover


/* =========================
   INPUT VALUES
========================= */

let value = input.value;


/* =========================
   FORM SUBMIT (STOP REFRESH)
========================= */

form.addEventListener("submit", function (event) {
    event.preventDefault();
});


/* =========================
   LOOP THROUGH ELEMENTS
========================= */

let items = document.querySelectorAll("li");

for (let i = 0; i < items.length; i++) {
    console.log(items[i].textContent);
}


/* =========================
   PAGE LOAD SAFETY
========================= */

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");
});


/* =========================
   DOM FLOW (REMEMBER THIS)
========================= */

// 1. Select element
// 2. Listen for event
// 3. Change DOM


/* =========================
   COMMON MISTAKES
========================= */

// ❌ document.getElementById("#id")  (no #)
// ❌ Running JS before HTML loads
// ❌ Wrong selector returns null


/* =========================
   REAL WORLD USES
========================= */

// Buttons
// Forms
// Validation
// Todo apps
// Counters
// Dark mode
// Popups


/* =========================
   GOLDEN RULE
========================= */

// If you can:
// select → listen → change
// You know DOM.

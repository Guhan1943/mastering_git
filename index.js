// script.js

// Run when the page loads
document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector("h1");
    const paragraph = document.querySelector("p");

    // Change heading text when clicked
    heading.addEventListener("click", function () {
        heading.textContent = "You clicked the heading!";
        heading.style.color = "#ff6600";
    });

    // Change paragraph text when hovered
    paragraph.addEventListener("mouseover", function () {
        paragraph.textContent = "You hovered over me!";
    });

    paragraph.addEventListener("mouseout", function () {
        paragraph.textContent = "This is my first HTML page.";
    });
});
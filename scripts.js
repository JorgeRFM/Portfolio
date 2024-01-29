// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the footer element
    const footer = document.querySelector("footer");

    // Add a scroll event listener
    window.addEventListener("scroll", function() {
        // Check if the user has reached the bottom of the page
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            // Add a class to the body to reveal the footer
            document.body.classList.add("reveal-footer");
        } else {
            // Remove the class if the user is not at the bottom
            document.body.classList.remove("reveal-footer");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the footer element
    const footer = document.querySelector("header");

    // Add a scroll event listener
    window.addEventListener("scroll", function() {
        // Check if the user has reached the bottom of the page
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            // Add a class to the body to reveal the footer
            document.body.classList.add("reveal-header");
        } else {
            // Remove the class if the user is not at the bottom
            document.body.classList.remove("reveal-header");
        }
    });
});
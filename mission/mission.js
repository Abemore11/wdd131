const themeSelector = document.getElementById("theme"); // Targets the select element
const logo = document.querySelector("img"); // Targets the logo in footer
const body = document.body; // Targets body element

function changeTheme() {
    // Check the current value
    if (themeSelector.value === "dark") {
        // Apply dark mode
        body.classList.add("dark");
        logo.src = "images/byui-logo2.png";
    } else {
        // Switch back to light mode
        body.classList.remove("dark");
        logo.src = "images/logo.webp"; // switch to blue logo
    }
}

themeSelector.addEventListener('change', changeTheme);
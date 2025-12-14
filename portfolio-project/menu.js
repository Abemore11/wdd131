const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
    if (window.innerWidth < 500) {
        menu.classList.toggle("hide");
    }
}

menuButton.addEventListener("click", toggleMenu);

// Track previous width to detect desktop→mobile transition
let wasDesktop = window.innerWidth >= 500;

function handleResize() {
    const isDesktop = window.innerWidth >= 500;

    if (isDesktop) {
        // Desktop always shows menu
        menu.classList.remove("hide");
    } else {
        // Mobile
        if (wasDesktop) {
            // Only hide when transitioning INTO mobile
            menu.classList.add("hide");
        }
        // If already mobile, do NOT auto-hide — allow user control
    }

    wasDesktop = isDesktop;
}

handleResize();
window.addEventListener("resize", handleResize);
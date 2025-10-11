// Toggle Menu on and off

const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);


// Prevents menu from accidentally remaining 
// hidden when resizing window.

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);


// MODAL

// Container for all images
const gallery = document.querySelector('.gallery');

// Create dialog dynamically
function createModal(fullSrc, alt) {

    const viewer = document.createElement('dialog');
    viewer.innerHTML = `
        <img src="${fullSrc}" alt="${alt}" class="modal-image">
        <button class="close-viewer" aria-label="Close viewer">X</button>
    `;

    // Attaches new dialog HTML element to HTML document
    document.body.appendChild(viewer);

    // Grab the newly created Image and Button elements
    const closeButton = viewer.querySelector('.close-viewer');
    const modalImage = viewer.querySelector('img');

    // Close button handler
    closeButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Stop click from bubbling up (prevents accidental close)
        viewer.close();
    });

    // Stop propagation on modal image click to prevent closing when image itself is clicked
    modalImage.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Click outside image to close
    viewer.addEventListener('click', (event) => {
        if (event.target === viewer) {
            viewer.close();
        }
    });

    // Remove the dialog from DOM after it closes
    viewer.addEventListener('close', () => {
        viewer.remove();
    });

    // Show modal
    viewer.showModal();
}

function handleGalleryClick(event) {
    // Find the nearest <img> ancestor (or itself)
    const modImg = event.target.closest('img');
    if (!modImg) return;

    // Gets Source and ALt attributes from that <img>
    const src = modImg.getAttribute('src');
    const alt = modImg.getAttribute('alt');

    // Build the full image filename
    const fullSrc = src.split('-')[0] + '-full.jpeg';

    // Create the modal dynamically
    createModal(fullSrc, alt);
}

gallery.addEventListener('click', handleGalleryClick);

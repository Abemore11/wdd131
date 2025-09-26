// Create a new <p> element
const newParagraph = document.createElement("p");
// Add text content to the paragraph
newParagraph.innerText = "Added with JS!";
// Insert the paragraph at the end of the <body>
document.body.appendChild(newParagraph);


// Create a new <img> element
const newImage = document.createElement("img");

// Set the image source (the picture to display)
newImage.setAttribute("src", "https://picsum.photos/200");

// Set the alternative text (for accessibility/when image can’t load)
newImage.setAttribute("alt", "cool pic");

// Add the image to the end of the <body>
document.body.appendChild(newImage);


// Create a new <div> element
const newDiv = document.createElement("div");
// Fill the div with HTML markup (unordered list with 3 items)
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
// Insert the div into the <body>
document.body.appendChild(newDiv);


// Create a new <section> element
const newSection = document.createElement("section");
// Add a heading and a paragraph inside the section
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through JS!</p>";
// Insert the section into the <body>
document.body.appendChild(newSection);

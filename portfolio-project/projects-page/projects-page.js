// =======================================================
// IMPORT PROJECT DATA:
// Import the default export from the `projects.mjs` module.
// File contains an array of project objects.
import projects from './projects.mjs';
// ========================================================

// SELECT ELEMENTS
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const container = document.getElementById("projects-container");

// EVENT LISTENER
searchForm.addEventListener("submit", e => {
  // Prevent the form from submitting the traditional way.
  // smoothly reload the page and the the form submission.
  e.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  // First filter according to query, then render the filtered list.
  renderProjects(filterProjects(query));
});

// FILTER FUNCTION
function filterProjects(query) {
  // If the query is empty, return all projects.
  if (!query) return projects;

  // Filter() loops through all projects
  // returns a new array with projects that match the query.
  return projects.filter(project => {
    // Checks if search text appears in the project's description.
    const descMatch = project.description.toLowerCase().includes(query);
    // some() checks if any of the keywords match the search text.
    const keywordMatch = project.keywords.some(k => k.toLowerCase().includes(query));
    // If either condition is true, the project is included in the new array.
    return descMatch || keywordMatch;
  });
}

// RENDER 
// Takes a filtered list of projects and renders them in the container.
function renderProjects(list) {
  // Loops through the filtered list and creates a new HTML string for each project.
  // The new HTML string is then added to the container.
  container.innerHTML = list.map(project => `
    <div class="project-card">

        <h3 class="project-title">
          <a href="${project.link}" target="_blank" rel="noopener noreferrer">
            ${project.title}
          </a>
        </h3>

        <img class="project-image" 
             src="${project.image}" 
             alt="${project.title}">

        <p class="project-description">
          ${project.description}
        </p>

        <div class="keywords">
          ${project.keywords.map(k => `<span class="keyword">${k}</span>`).join('')}
        </div>

    </div>
  `).join(''); // Removes commas and merges list into one HTML block.
  // Arrays naturally add commas if you cast them into strings - in between elements, join('') removes them.
  // Now it is one long string that HTML can understand and use.
}


// INITIAL RENDER:
// Runs when the page loads,
// all projects appear before searching (complete list).
renderProjects(projects);

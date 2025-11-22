// Imports array file.
import recipes from './recipes.mjs';

// SELECT SEARCH ELEMENTS
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

// EVENT LISTENER
searchForm.addEventListener("submit", searchHandler);

// Returns a random integer from 0 to num-1.
function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

// Returns a random item from an array.
function getRandomItem(list) {
    const index = getRandomNumber(list.length);
    return list[index];
}

// Returns a template literal string - dynamic HTML
function recipeTemplate(recipe) {
    return `
      <article class="recipe-card">
        <figure class="card-image">
          <img src="${recipe.image}" alt="${recipe.name}" />
        </figure>

        <div class="card-content">
          ${tagsTemplate(recipe.tags)}

          <h2 class="recipe-title">${recipe.name}</h2>

          ${ratingTemplate(recipe.rating)}

          <p class="description">${recipe.description}</p>
        </div>

      </article>`
}

// Creates HTML for all tags.
function tagsTemplate(tags) {
    let html = "";
    for (const tag of tags) {
        html += `<span class="tag">${tag}</span>`;
    }
    return html;
}

// Creates filled and empty stars
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">★</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`;
    return html;
}


function searchHandler(e) {
  e.preventDefault(); // stops page reload

  const query = searchInput.value.trim().toLowerCase();

  // Run filter
  const results = filterRecipes(query);

  // Render filtered list
  renderRecipes(results);
}


function filterRecipes(query) {
  const filtered = recipes.filter(recipe => {
    const nameMatch = recipe.name.toLowerCase().includes(query);
    const descMatch = recipe.description.toLowerCase().includes(query);

    const tagMatch = recipe.tags.find(tag =>
      tag.toLowerCase().includes(query)
    );

    const ingredientMatch = recipe.recipeIngredient.find(ing =>
      ing.toLowerCase().includes(query)
    );

    return nameMatch || descMatch || tagMatch || ingredientMatch;
  });

  // Sort alphabetically by name
  filtered.sort((a, b) => a.name.localeCompare(b.name));

  return filtered;
}


function renderRecipes(recipeList) {
    // 1. Get the container to output the recipes into.
    const container = document.getElementById("recipes-container");

    // 2. Transform each recipe object into HTML using recipeTemplate function.
    const html = recipeList.map(recipe => recipeTemplate(recipe)).join("");

    // 3. Insert the resulting HTML into the container.
    container.innerHTML = html;
}


function init() {
    const recipe = getRandomItem(recipes);
    renderRecipes([recipe]);
}

init();

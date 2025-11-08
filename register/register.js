// Wait until the HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize participant count
  let participantCount = 1;

  // Select the Add Participant button
  const addButton = document.querySelector("#add");

  // Attach click event listener
  addButton.addEventListener("click", () => {
    participantCount++; // Increment participant counter

    // Create new participant HTML using the template function
    const newParticipantHTML = participantTemplate(participantCount);

    // Insert new participant section before the Add button
    addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
  });

  // ====================
  // FORM SUBMIT SECTION
  // ====================

  // Select the form and summary element
  const form = document.querySelector("form");
  const summary = document.getElementById("summary");

  // Add event listener for form submission
  form.addEventListener("submit", submitForm);

  // Form submission event
  function submitForm(event) {
    // Prevent the default form behavior (page reload)
    event.preventDefault();

    // Calculate the total fee from all participant fee inputs
    const total = totalFees();

    // Get the adult name from the form
    const adultName = document.getElementById("adult_name").value;

    // Count all participant sections currently in the form
    const participantCount = document.querySelectorAll("section[class^='participant']").length;

    // Hide the form
    form.style.display = "none";

    // Create an info object with the form data
    const info = {
      name: adultName,
      totalFees: total,
      participants: participantCount
    };

    // Insert the success message into the summary element
    summary.innerHTML = successTemplate(info);

    // Show the summary element
    summary.style.display = "block";
  }
}); // end of DOMContentLoaded


/**
 * Template function that returns a new participant section
 * @param {number} count - current participant number
 */
function participantTemplate(count) {
  // Note the use of template literals and ${count} to make IDs unique
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}"> First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" required>
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}">
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}">
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}">
      </div>
      <div class="item">
        <p>Grade</p>
        <select id="grade${count}">
          <option selected disabled></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
  `;
}

// Calculates the total fees from all participant fee inputs
function totalFees() {
  // Grabs any element that has an id that begins with "fee"
  let feeElements = document.querySelectorAll("[id^=fee]");
  console.log(feeElements);

  // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
  // The line below is an easy way to convert something that is list-like to an actual Array
  // so we can use all of the helpful Array methods...like reduce
  // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in
  // inserts those list items into a new Array.
  feeElements = [...feeElements];

  // Sum up all of the fees using Array.reduce()
  const total = feeElements.reduce((sum, input) => {
    // Remember that the text entered into the input element will be found in the .value of the element.
    const fee = parseFloat(input.value) || 0; // Convert to number, default to 0 if empty
    return sum + fee;
  }, 0);

  // Once you have your total, make sure to return it!
  return total;
}

// Template for the success message that appears after form submission
function successTemplate(info) {
  return `
    <h2>Thank you, ${info.name}, for registering!</h2>
    <p>
      You have registered <strong>${info.participants}</strong> participant${info.participants !== 1 ? 's' : ''} 
      and owe <strong>$${info.totalFees.toFixed(2)}</strong> in fees.
    </p>
  `;
}

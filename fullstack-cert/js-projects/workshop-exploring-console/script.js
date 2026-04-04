// Debugging User Registration Form

// Step 1: Select DOM elements
const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const btn = document.getElementById("submit-btn");
const result = document.getElementById("result");

// Step 2: Clear browser console to check output
console.clear();

// Step 3: Inspect DOM elements
console.dir(nameInput);
console.dir(ageInput);

// Step 4: Add event listener with a placeholder function
btn.addEventListener("click", registerUser);

function registerUser() {
  // Step 5: Ensure the function runs on click
  console.log("Button clicked");

  // Step 6: Log user input
  const name = nameInput.value;
  const age = ageInput.value;

  console.log("Name:", name);
  console.log("Age:", age);

  // Step 7: Intro to server-side validation
  if (name === "") {
    throw new Error("Name is required");
  }
  if (age === "") {
    throw new Error("Age is required");
  }
}

// Step 8: Fix UncaughtError with try...catch
function registerUser() {
  console.log("Button clicked");

  const name = nameInput.value;
  const age = ageInput.value;

  console.log("Name:", name);
  console.log("Age:", age);

  try {
    if (name === "") {
      throw new Error("Name is required");
    }
    if (age === "") {
      throw new Error("Age is required");
    }

    // Step 9: Validate age
    if (age < 13) {
      throw new Error("User must be at least 13 years old");
    }

    // Step 10: Feedback
    result.textContent = "Registration successful";
  } catch (error) {
    console.error(error.message);
    result.textContent = error.message;
  }

  // Step 11: Store user data
  const user = {
    name: name,
    age: age,
  };

  // Step 12: Display in a table
  console.table([user]);
}

// Step 13: Group the logs
function registerUser() {
  console.log("Button clicked");

  const name = nameInput.value;
  const age = ageInput.value;

  // HERE
  console.groupCollapsed("Register User");

  console.log("Name:", name);
  console.log("Age:", age);

  try {
    if (name === "") {
      throw new Error("Name is required");
    }
    if (age === "") {
      throw new Error("Age is required");
    }
    if (age < 13) {
      throw new Error("User must be at least 13 years old");
    }
    result.textContent = "Registration successful";
  } catch (error) {
    console.error(error.message);
    result.textContent = error.message;
  }

  const user = {
    name: name,
    age: age,
  };
  console.table([user]);

  // TO HERE
  console.groupEnd();
}

// Get references to the form elements
const taskInput = document.getElementById("task");
const submitButton = document.getElementById("submit");
const taskList = document.getElementById("tasks");

// Disable the submit button by default
submitButton.disabled = true;

// Listen for input in the task field
taskInput.addEventListener("input", () => {
  // Enable the submit button if the task input is not empty
  submitButton.disabled = taskInput.value.trim() === "";
});

// Listen for form submission
document.getElementById("todo-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the task the user just submitted
  const newTask = taskInput.value.trim();

  if (newTask !== "") {
    // Create a new list item for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = newTask;

    // Add the new task to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";

    // Disable the submit button
    submitButton.disabled = true;
  }

  return false; // Prevent default form submission
});

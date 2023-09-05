const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");
const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {}; // Used to track state when editing and discarding tasks

const addOrUpdateTask = () => {
  // Attempt to find an existing task -- could add this
  // functionality while refactoring later in the project
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (dataArrIndex === -1) {
    // Add new task
    taskData.unshift(taskObj);
  } else {
    // Update existing task
    taskData[dataArrIndex] = taskObj;
  }

  localStorage.setItem("data", JSON.stringify(taskData));
  addTaskToTaskContainer();
  reset();
};

const addTaskToTaskContainer = () => {
  tasksContainer.innerHTML = "";

  taskData.forEach(
    ({ id, title, date, description }) =>
      (tasksContainer.innerHTML += `
      <div class="task" id="${id}">
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button onclick="editTask(this)" type="button" class="btn">Edit</button>
        <button onclick="deleteTask(this)" type="button" class="btn">Delete</button>
      </div>
    `)
  );
};

const deleteTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  buttonEl.parentElement.remove();
  taskData.splice(dataArrIndex, 1);
  localStorage.setItem("data", JSON.stringify(taskData));
};

const editTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );
  // Update currentTask for state management
  currentTask = taskData[dataArrIndex];

  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  // Update task form button
  addOrUpdateTaskBtn.innerText = "Update Task";
  addOrUpdateTaskBtn.ariaLabel = "Update Task";

  // Show task form
  taskForm.classList.toggle("hidden");
};

const reset = () => {
  // Reset form inputs
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  // Reset task form button
  addOrUpdateTaskBtn.innerText = "Add Task";
  addOrUpdateTaskBtn.ariaLabel = "Add Task";
  // Hide task form and reset currentTask
  taskForm.classList.toggle("hidden");
  currentTask = {};
};

if (taskData.length) {
  addTaskToTaskContainer();
}

openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden")
);

closeTaskFormBtn.addEventListener("click", () => {
  // Note: We could get a bit fancy here and use JSON.stringify() to compare
  // the currentTask object (minus the id) to the form inputs as an object,
  // but it may be overkill for this project.
  const formInputsContainValues =
    titleInput.value || dateInput.value || descriptionInput.value;
  const formInputValuesUpdated =
    titleInput.value !== currentTask.title ||
    dateInput.value !== currentTask.date ||
    descriptionInput.value !== currentTask.description;
  if (formInputsContainValues && formInputValuesUpdated) {
    // Changes detected, so show confirmCloseDialog as a modal
    confirmCloseDialog.showModal();
  } else {
    // No changes made, so reset everything to default and hide the form
    reset();
  }
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addOrUpdateTask();
});

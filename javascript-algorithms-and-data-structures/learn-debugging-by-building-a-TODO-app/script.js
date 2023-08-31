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
    description: descriptionInput.value
  }

  if (dataArrIndex === -1) {
    // Add new task
    taskData.unshift(taskObj);
  } else {
    // Update existing task
    taskData[dataArrIndex] = taskObj;
  }

  // Reset currentTask
  currentTask = {};
  // Hide elements and reset button text and aria-label
  taskForm.classList.toggle("hidden");
  addOrUpdateTaskBtn.innerText = "Add Task";
  addOrUpdateTaskBtn.ariaLabel = "Add Task";

  localStorage.setItem("data", JSON.stringify(taskData));
  addTaskToTaskContainer();
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

  resetForm();
};

const deleteTask = (buttonEl) => {
  let dataArrIndex = taskData.findIndex(
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

  taskForm.classList.toggle("hidden");
};

const resetForm = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
};

if (taskData.length) {
  addTaskToTaskContainer();
}

openTaskFormBtn.addEventListener("click", () => taskForm.classList.toggle("hidden"));

closeTaskFormBtn.addEventListener("click", () => confirmCloseDialog.showModal());

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden");
  resetForm();
});

addOrUpdateTaskBtn.addEventListener("click", () => addOrUpdateTask());

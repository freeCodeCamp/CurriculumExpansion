const addTaskForm = document.getElementById("add-task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openAddTaskFormBtn = document.getElementById("open-add-task-form-btn");
const closeAddTaskFormBtn = document.getElementById("close-add-task-form-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");
const taskData = JSON.parse(localStorage.getItem("data")) || [];

const addNewTask = () => {
  taskData.unshift({
    id: titleInput.value.split(" ").join("-"),
    task: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value
  });

  addTaskForm.style.display = "none";
  localStorage.setItem("data", JSON.stringify(taskData));

  addTaskToTaskContainer();
};

const addTaskToTaskContainer = () => {
  tasksContainer.innerHTML = "";

  taskData.forEach(
    ({ id, task, date, description }) =>
      (tasksContainer.innerHTML += `
      <div class="task" id="${id}">
        <p><strong>Task:</strong> ${task}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button onclick="editTask(this)" type="button" class="btn">Edit</button>
        <button onclick="deleteTask(this)" type="button" class="btn">Delete</button>
      </div>
    `)
  );

  resetForm();
};

const deleteTask = (task) => {
  task.parentElement.remove();
  let dataArrIndex = taskData.findIndex(
    (item) => item.id === task.parentElement.id
  );
  taskData.splice(dataArrIndex, 1);
  localStorage.setItem("data", JSON.stringify(taskData));
};

const editTask = (task) => {
  addTaskForm.style.display = "flex";
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === task.parentElement.id
  );

  titleInput.value = taskData[dataArrIndex].task;
  dateInput.value = taskData[dataArrIndex].date;
  descriptionInput.value = taskData[dataArrIndex].description;

  taskData.splice(dataArrIndex, 1);
};

const resetForm = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
};

if (taskData.length) {
  addTaskToTaskContainer();
}

openAddTaskFormBtn.addEventListener("click", () => addTaskForm.style.display = "flex");

closeAddTaskFormBtn.addEventListener("click", () => confirmCloseDialog.showModal());

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  addTaskForm.style.display = "none";
  resetForm();
});

addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addNewTask();
});

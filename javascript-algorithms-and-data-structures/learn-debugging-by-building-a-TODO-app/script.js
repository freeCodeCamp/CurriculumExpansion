const form = document.getElementById("modal");
const confirmModal = document.getElementById("confirm-modal");
const confirmBtn = document.getElementById("confirm-btn");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const tasksContainer = document.getElementById("tasks-container");
const textInput = document.getElementById("text-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("textarea");
let taskData = [];

openModalBtn.addEventListener("click", () => (form.style.display = "block"));
closeModalBtn.addEventListener("click", () => confirmModal.showModal());

confirmBtn.addEventListener("click", () => {
  form.style.display = "none";
  resetForm();
});

form.addEventListener("submit", (e) => {
  /**
   * We could have a debugging step here where the   e.preventDefault(); is initially left off
   * Then we could show campers that behavior so they understand why it is needed.
   *
   */
  e.preventDefault();

  addNewTask();
});

const addNewTask = () => {
  taskData.unshift({
    id: textInput.value.split(" ").join("-"),
    task: textInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  });

  form.style.display = "none";

  /**
   * We could have a debugging step where the original does not use JSON.stringify
   * and we could talk the "[object Object]" is not valid JSON error message
   * Then we could refactor it to use the JSON.stringify(taskData)
   */

  localStorage.setItem("data", JSON.stringify(taskData));

  addTaskToTaskContainer();
};

const addTaskToTaskContainer = () => {
  tasksContainer.innerHTML = "";

  taskData.forEach(
    ({ id, task, date, description }) =>
      /**
       * We could have a debugging step here where the original uses the assignment operator here tasksContainer.innerHTML =
       * Then we could show campers that new items are not be properly added to the container and that the += operator is needed
       *
       */
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
  form.style.display = "block";
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === task.parentElement.id
  );

  textInput.value = taskData[dataArrIndex].task;
  dateInput.value = taskData[dataArrIndex].date;
  descriptionInput.value = taskData[dataArrIndex].description;

  taskData.splice(dataArrIndex, 1);
};

const resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
};


if (taskData.length) {
  addTaskToTaskContainer();
}

// Debugging Task Tracker

// Each task should look like: { text: string, completed: boolean }
const tasks = [];

const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

// Clear old logs to avoid confusion
console.clear();

// Learners place a breakpoint here to inspect how the click event triggers logic
addBtn.addEventListener("click", addTask);


// Add tasks to the task array
function addTask() {
    /* Learners open DevTools and add watch expressions:
    - tasks
    - tasks.length
    - input.value */
    debugger;

    const text = input.value;

    // Review throw statement
    if (text.trim() === "") {
        throw new Error("Task cannot be empty");
    }

    tasks.push({
        text: text,
        completed: false
    });

    // Inspect stored data structure
    console.table(tasks);

    renderTasks();
    updateTaskCount();

    input.value = "";
}


// Render tasks to the page
function renderTasks() {
    // Group related logs for clarity
    console.groupCollapsed("Rendering Tasks");

    taskList.innerHTML = "";

    // Revisit higher-order functions
    tasks.forEach((task) => {
        console.log("Rendering task:", task);

        const li = document.createElement("li");
        li.textContent = task.text;

        /* Intentional Bug:
        Learners inspect the DOM and notice the <li> is never appended.

        Expected fix:
        taskList.appendChild(li); */
    });

    console.groupEnd();
}


// Update the task counter
function updateTaskCount() {
    /* Intentional Bug:
    Learners investigate incorrect UI state.

    Expected fix:
    total = tasks.length; */
    const total = tasks.length + 1;

    taskCount.textContent = `Total Tasks: ${total}`;
}


// Mark a task as completed
/* Learners experiment with watch expressions:
- tasks[index]
- tasks.length */
function markCompleted(index) {

    tasks[index].completed = true;

    renderTasks();
}
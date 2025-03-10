let tasks = [
    { id: 1, task: "Comprar leche", complete: false },
    { id: 2, task: "Zapatos", complete: false },
    { id: 3, task: "Limpiar cuarto", complete: false },
    { id: 4, task: "Hacer tarea de To de Do List", complete: true },
];

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "task";
        li.innerHTML = `
            <span class="${task.complete ? 'completed' : ''}">${task.task}</span>
            <button onclick="toggleTask(${task.id})">${task.complete ? "Deshacer" : "Completado"}</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const newTaskInput = document.getElementById("newTask");
    if (newTaskInput.value.trim() === "") return;
    tasks.push({ id: tasks.length + 1, task: newTaskInput.value, complete: false });
    newTaskInput.value = "";
    renderTasks();
}

function toggleTask(id) {
    tasks = tasks.map(task => task.id === id ? { ...task, complete: !task.complete } : task);
    renderTasks();
}

function removeCompleted() {
    tasks = tasks.filter(task => !task.complete);
    renderTasks();
}

renderTasks();
// script.js

document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('delete-all').addEventListener('click', deleteAllTasks);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;

        li.querySelector('.edit').addEventListener('click', () => editTask(li));
        li.querySelector('.delete').addEventListener('click', () => deleteTask(li));
        li.addEventListener('click', () => toggleComplete(li));

        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function toggleComplete(taskElement) {
    taskElement.classList.toggle('completed');
}

function editTask(taskElement) {
    const taskText = prompt('Edit your task:', taskElement.querySelector('span').innerText);
    if (taskText !== null) {
        taskElement.querySelector('span').innerText = taskText;
    }
}

function deleteTask(taskElement) {
    taskElement.remove();
}

function deleteAllTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
}

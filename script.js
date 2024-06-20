// script.js

let tasks = [
    {
        id: 1,
        title: "Design homepage layout",
        description: "Create wireframes and mockups for the homepage.",
        deadline: "2024-06-25",
        priority: "high"
    },
    {
        id: 2,
        title: "Implement responsive navigation",
        description: "Make navigation menu responsive using CSS media queries.",
        deadline: "2024-06-20",
        priority: "medium"
    },
    {
        id: 3,
        title: "Add form validation with JavaScript",
        description: "Validate user input on the contact form.",
        deadline: "2024-06-30",
        priority: "low"
    }
];

function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.classList.add(`priority-${task.priority}`);

        taskElement.innerHTML = `
            <div>
                <h2>${task.title}</h2>
                <p>${task.description}</p>
                <p class="meta">Deadline: ${task.deadline}</p>
            </div>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        `;

        taskList.appendChild(taskElement);
    });
}

function addTask(event) {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const priority = form.priority.value;

    const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

    const newTask = {
        id,
        title,
        description,
        deadline,
        priority
    };

    tasks.push(newTask);

    form.reset();

    displayTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}

const addTaskForm = document.getElementById('add-task-form');
addTaskForm.addEventListener('submit', addTask);

displayTasks();

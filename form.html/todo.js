function retrieveTasks() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json());
}

function displayTasks(tasks) {
    const todoList = document.getElementById('todoList');
    let completedTaskCount = 0;

    tasks.forEach(task => {
        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `task-${task.id}`;
        checkbox.checked = false;
        const label = document.createElement('label');
        label.textContent = task.title;
        label.htmlFor = `task-${task.id}`;

        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        todoList.appendChild(listItem);

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                completedTaskCount++;
                checkbox.disabled = true;
            } else {
                completedTaskCount--;
                checkbox.disabled = false;
            }

            if (completedTaskCount % 5 === 0) {
                alert(`Congrats. ${completedTaskCount} Tasks have been Successfully Completed`);
            }
        });
    });
}

function main() {
    retrieveTasks()
        .then(displayTasks)
        .catch(error => console.error('Error retrieving tasks:', error));
}

main();
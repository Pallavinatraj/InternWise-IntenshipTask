<<<<<<< Updated upstream
document.querySelector("#green").addEventListener("click", greenButtonFunction)
=======

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const deleteAllButton = document.getElementById('deleteAllButton');
const tasksList = document.getElementById('tasks');
>>>>>>> Stashed changes


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            li.remove();
        });

        li.appendChild(deleteButton);
        tasksList.appendChild(li);
        taskInput.value = "";
    }
}

addTaskButton.addEventListener('click', addTask);

<<<<<<< Updated upstream
}
=======
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

deleteAllButton.addEventListener('click', function () {
    tasksList.innerHTML = "";
});
>>>>>>> Stashed changes

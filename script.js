function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    var taskList = document.getElementById("task-list");
    var newTask = document.createElement("li");
    newTask.textContent = taskText;
    newTask.onclick = function() {
        this.parentNode.removeChild(this);
    };

    taskList.appendChild(newTask);
    taskInput.value = "";
}

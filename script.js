let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerText = task;

        li.onclick = function () {
            tasks.splice(index, 1);
            updateStorage();
        };

        list.appendChild(li);
    });

    document.getElementById("count").innerText =
        "Total Actions: " + tasks.length;
}

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    tasks.push(task);
    input.value = "";
    updateStorage();
}

function updateStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function showTip() {
    let tips = [
        "Turn off lights when not in use",
        "Use reusable bottles",
        "Avoid plastic bags",
        "Save water daily"
    ];

    let random = Math.floor(Math.random() * tips.length);
    document.getElementById("tip").innerText = tips[random];
}

displayTasks();

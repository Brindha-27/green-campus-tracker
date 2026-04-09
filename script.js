let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks on screen
function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    if (tasks.length === 0) {
        list.innerHTML = "<p>No eco actions yet 🌱</p>";
    }

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerText = task;

        // Click to delete task
        li.onclick = function () {
            tasks.splice(index, 1);
            updateStorage();
        };

        list.appendChild(li);
    });

    // Update counter
    document.getElementById("count").innerText =
        "Total Actions: " + tasks.length;
}

// Add new task
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") return;

    tasks.push(task);
    input.value = "";
    updateStorage();
}

// Save to localStorage
function updateStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

// Eco tips
function showTip() {
    let tips = [
        "Switch off appliances when not in use",
        "Use public transport to reduce pollution",
        "Carry reusable bags while shopping",
        "Reduce water wastage daily",
        "Plant trees and support greenery",
        "Avoid single-use plastics"
    ];

    let random = Math.floor(Math.random() * tips.length);
    document.getElementById("tip").innerText = tips[random];
}

// Enter key support
document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Initial load
displayTasks();



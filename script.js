let count = 0;

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.innerText = task;

    li.onclick = function() {
        li.remove();
        count--;
        updateCount();
    };

    document.getElementById("taskList").appendChild(li);

    count++;
    updateCount();

    input.value = "";
}

function updateCount() {
    document.getElementById("count").innerText = "Total Actions: " + count;
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

function addTask() {
    let task = document.getElementById("task");
    if (task.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerText = task.value;
        li.onclick = function() { this.remove(); };
        document.getElementById("list").appendChild(li);
        task.value = "";
    }
}
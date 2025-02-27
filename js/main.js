document.getElementById("add-todo").addEventListener("click", function() {
    const todoText = document.getElementById("todo-text").value.trim(); 

    if (todoText === "") return;

    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const todoTextElement = document.createElement("span");
    todoTextElement.classList.add("todo-text");
    todoTextElement.textContent = todoText;

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const doneButton = document.createElement("button");
    doneButton.innerHTML = "✔️";
    doneButton.classList.add("done");
    doneButton.addEventListener("click", function() {
        todoTextElement.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "🗑️";
    deleteButton.classList.add("trash"); 
    deleteButton.addEventListener("click", function() {
        todoItem.remove();
    });

    actions.appendChild(doneButton);
    actions.appendChild(deleteButton);

    todoItem.appendChild(todoTextElement);
    todoItem.appendChild(actions);

    document.getElementById("todo-list").appendChild(todoItem);

    document.getElementById("todo-text").value = "";
});

document.getElementById("todo-text").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("add-todo").click();
    }
});
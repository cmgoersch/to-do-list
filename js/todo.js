// Funktion: Erstellt ein neues To-Do-Item
export function addTodo() {
    const todoText = document.getElementById("todo-text").value.trim(); 

    if (todoText === "") return;

    const todoItem = document.createElement("div");
    todoItem.classList.add("flex", "justify-between", "items-center", "bg-white", "p-3", "rounded-md", "shadow-md");

    const todoTextElement = document.createElement("span");
    todoTextElement.classList.add("text-lg", "font-semibold");
    todoTextElement.textContent = todoText;

    const actions = document.createElement("div");
    actions.classList.add("flex", "gap-2");

    const doneButton = document.createElement("button");
    doneButton.innerHTML = "✔️";
    doneButton.classList.add("text-green-500", "hover:text-green-700", "transition");
    doneButton.addEventListener("click", function() {
        todoTextElement.classList.toggle("line-through");
        todoTextElement.classList.toggle("text-gray-500");
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "🗑️";
    deleteButton.classList.add("text-red-500", "hover:text-red-700", "transition");
    deleteButton.addEventListener("click", function() {
        todoItem.remove();
    });

    actions.appendChild(doneButton);
    actions.appendChild(deleteButton);

    todoItem.appendChild(todoTextElement);
    todoItem.appendChild(actions);

    document.getElementById("todo-list").appendChild(todoItem);

    document.getElementById("todo-text").value = "";
}
//Entertasse
export function setupEnterKey() {
    document.getElementById("todo-text").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });
}
import { addTodo, setupEnterKey } from './todo.js';

document.getElementById("add-todo").addEventListener("click", addTodo);

setupEnterKey();
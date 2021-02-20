const todoForm = document.querySelector(".todo-list-container form");
const input = todoForm.querySelector("input");
const TODO_LS = "todos";
let todoListArr = [];
let delBtnArr = [];

function hasTodoList() {
    if (localStorage.getItem(TODO_LS) !== null) {
        return true;
    }
    return false;
}
function handleToDoSubmit(event) {
    event.preventDefault();
    appendToDo();
    saveToDo();
    clearInput();
    loadToDo();
}
function appendToDo() {
    const enteredTodo = input.value;
    todoListArr.push(enteredTodo);
}
function saveToDo() {
    localStorage.setItem(TODO_LS, JSON.stringify(todoListArr));
}
function clearInput() {
    input.value = "";
}
function loadToDo() {
    todoListArr = JSON.parse(localStorage.getItem(TODO_LS));
    printToDoList();
}
function printToDoList() {
    const ul = document.querySelector(".todo-list-container ul");
    let newUl = document.createElement("ul");
    for (let i = 0; i < todoListArr.length; i++) {
        const delBtn = document.createElement("button");
        delBtn.innerHTML = `&#10005;`;
        delBtn.setAttribute("class", "deleteBtn");
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.innerText = todoListArr[i];
        li.setAttribute("id", i);
        li.appendChild(span);
        li.appendChild(delBtn);
        newUl.appendChild(li);
    }
    const todoContainer = document.querySelector(".todo-list-container");
    todoContainer.replaceChild(newUl, ul);
    for (let i = 0; i < todoListArr.length; i++) {
        const li = document.getElementById(`${i}`);
        const delBtn = li.querySelector(".deleteBtn");
        delBtn.addEventListener("click", handleDelBtnClick);
    }
}
function handleDelBtnClick(event) {
    event.preventDefault();
    deleteToDoFromList(event.target.parentNode.id);
}
function deleteToDoFromList(number) {
    todoListArr[number] = null;
    let newTodoListArr = [];
    for (let i = 0; i < todoListArr.length; i++) {
        if (todoListArr[i] !== null) {
            newTodoListArr.push(todoListArr[i]);
        }
    }
    todoListArr = newTodoListArr;
    saveToDo();
    loadToDo();
}

function todoInit() {
    if (hasTodoList()) {
        loadToDo();
    }
    todoForm.addEventListener("submit", handleToDoSubmit);
}

todoInit();

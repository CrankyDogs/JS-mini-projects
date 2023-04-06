const input = document.getElementById("new-todo");
const button = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

button.addEventListener("click", () => {
    const todo = input.value;
    if(todo.trim() !== ''){
        const todoItem = document.createElement("li");
        const del_btn = document.createElement("button");
        todoItem.textContent = todo;
        del_btn.textContent = "Delete";
        del_btn.classList.add("del-btn");
        del_btn.addEventListener("click", () => {
            todoList.removeChild(todoItem);
        })
        todoList.appendChild(todoItem);
        todoItem.appendChild(del_btn);
        input.value = "";
    }else{
        alert("Please enter a todo");
    }

});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        button.click();
    }
});

todoList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI'){
        event.target.classList.toggle('completed');
    }
    
});
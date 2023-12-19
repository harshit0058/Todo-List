function addTodo() {
    let todoText = document.getElementById('todo').value;
    if (todoText == '') {
        alert("Please enter a task");
        return false;
    }
    let newLi = document.createElement('li');
    newLi.innerHTML = `${todoText}<button class="delete-btn" onclick="deleteTodo(this)"><i class=" delete-btn fa-solid fa-trash" ></i></button>`;
    document.querySelector('#todos').appendChild(newLi);
    document.getElementById('todo').value = '';


    document.getElementById('clearTodosButton').style.display = 'inline-block';

}
function deleteTodo(button) {
    const todoItem = button.parentNode;
    todoItem.parentNode.removeChild(todoItem);

    const todosList = document.getElementById('todos');
    const clearButton = document.getElementById('clearTodosButton');
    clearButton.style.display = todosList.children.length > 0 ? 'inline-block' : 'none';
}

function clearTodos() {
    const todosList = document.getElementById('todos');
    todosList.innerHTML = '';

    document.getElementById('clearTodosButton').style.display = 'none';
}
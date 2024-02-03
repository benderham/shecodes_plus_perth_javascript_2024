let todoTasks = ['Walk Lyla', 'Walk Georgie', 'Walk Maddie'];
let todoTasksStatus = [true, false, true];
const todoList = document.getElementById('todo-list');

updateTodoList();

function addTask() {
  const newTask = document.getElementById('new-task-text');
  if (newTask.value.length > 0) {
    todoTasks.push(newTask.value);
    todoTasksStatus.push(false);
    newTask.value = '';
    updateTodoList();
  }
}

function updateTodoList() {
  todoList.innerText = '';
  for (const [index, task] of todoTasks.entries()) {
    const newTodoTaskElement = createNewTodoItemElement(task, index);
    todoList.appendChild(newTodoTaskElement);
  }
}

function createNewTodoItemElement(task, index) {
  const newTodoTaskTextElement = document.createElement('p');
  newTodoTaskTextElement.innerText = task;

  if (todoTasksStatus[index] === true) {
    newTodoTaskTextElement.classList.add('complete');
  }

  const newTodoTaskElement = document.createElement('li');
  newTodoTaskElement.appendChild(newTodoTaskTextElement);

  const completeButtonElement = document.createElement('input');
  completeButtonElement.type = 'button';
  completeButtonElement.value = 'Complete';
  newTodoTaskElement.appendChild(completeButtonElement);

  completeButtonElement.onclick = function () {
    toggleComplete(index);
  };

  return todoList.appendChild(newTodoTaskElement);
}

function toggleComplete(index) {
  if (todoTasksStatus[index] === false) {
    todoTasksStatus[index] = true;
  } else {
    todoTasksStatus[index] = false;
  }
  updateTodoList();
}

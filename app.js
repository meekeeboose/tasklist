// define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners() {
  // add task event
  form.addEventListener('submit', addTask);
}

// add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('add task');
  }
  // create li element
  const li = document.createElement('li');
  //add class
  li.className = 'collection-item';
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement('a');
  e.preventDefault();
  // add class
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append the link to li
  li.appendChild(link);
  // append li to ul
  taskList.appendChild(li);
  // clear input
  taskInput.value = '';
}

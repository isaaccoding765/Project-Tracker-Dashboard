function logger(message) {
  console.log(message);
}

function handleAddTask() {
  const input = document.getElementById('task-input');
  if (!input) return;
  const name = input.value.trim();
  if (!name) return;

  logger(`task name ${name}`);

  const statusArea = document.getElementById('status-message');
  if (statusArea) statusArea.textContent = `task added successfully: ${name}`;

  const todoColumn = document.querySelector('.flexboard section');
  if (todoColumn) {
    const newCard = document.createElement('article');
    newCard.className = 'card';
    const newPara = document.createElement('p');
    newPara.textContent = name;
    newCard.appendChild(newPara);
    todoColumn.appendChild(newCard);
  }

  input.value = '';
}

logger('did i load successfully');

const addButton = document.getElementById('add-task-button');
if (addButton) {
  addButton.addEventListener('click', function() {
    logger('add button clicked');
    handleAddTask();
  });
}

const listForm = document.getElementById('list-form');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');

//form submission
listForm.addEventListener('submit', function(event) {
  event.preventDefault();

  //input values
  const listTitle = document.getElementById('list-title').value;
  const listDescription = document.getElementById('list-description').value;

  //current date and time
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();

  // Create new list item
  const listItem = document.createElement('li');
  listItem.innerHTML = `<div class="task-info">
    <span class="title">${listTitle} </span> <br> 
    <span class="desc">${listDescription}</span>
    <br>
    <span class="timestamp">Added: ${formattedDate} </span>
    </div>
    <br>
    <div class="task-actions">
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
    <button class="complete-btn">Done</button>
    </div>
  `;

  const editButton = listItem.querySelector('.edit-btn');
  const deleteButton = listItem.querySelector('.delete-btn');
  const completeButton = listItem.querySelector('.complete-btn');

  // Edit button
  editButton.addEventListener('click', function() {
    const taskText = listItem.querySelector('span').textContent;
  const newTaskText = prompt('Edit task:', taskText);
  if (newTaskText !== null && newTaskText.trim() !== '') {
    listItem.querySelector('span').textContent = newTaskText;
  }
  });

  // Delete button
  deleteButton.addEventListener('click', function() {
    listItem.remove();
  });

  // Done button 
  completeButton.addEventListener('click', function() {
    listItem.classList.add('completed');
    completeButton.remove();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();
    listItem.querySelector('.timestamp').textContent = `Completed: ${formattedDate}`;
    completedTasksList.appendChild(listItem);
  });

  // Reverting tasks
  completedTasksList.addEventListener('click', function(event) {
    if (event.target.classList.contains('complete-btn')) {
      const listItem = event.target.parentNode;
      listItem.classList.remove('completed');
      pendingTasksList.appendChild(listItem);
    }
  });
  

  pendingTasksList.appendChild(listItem);
  listForm.reset();
});

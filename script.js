document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskModal = document.getElementById('taskModal');
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
  
    addTaskButton.addEventListener('click', function() {
      taskModal.style.display = 'block';
    });
  
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const taskName = document.getElementById('taskName').value;
      const taskTime = document.getElementById('taskTime').value;
      const taskDescription = document.getElementById('taskDescription').value;
      const taskBox = document.createElement('div');
      taskBox.classList.add('taskBox');
      taskBox.innerHTML = `${taskName} at ${taskTime}`;
  
      taskBox.addEventListener('click', function() {
        this.classList.toggle('expandedTask');
        const taskDetails = this.querySelector('.taskDetails');
        taskDetails.style.display = taskDetails.style.display === 'block' ? 'none' : 'block';
      });
  
      const taskDetails = document.createElement('div');
      taskDetails.classList.add('taskDetails');
      taskDetails.innerHTML = `
        <p><strong>Task Name:</strong> ${taskName}</p>
        <p><strong>Time:</strong> ${taskTime}</p>
        <p><strong>Description:</strong> ${taskDescription}</p>
      `;
  
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('deleteButton');
      deleteButton.innerHTML = 'Delete';
      deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskBox);
      });
  
      taskBox.appendChild(taskDetails);
      taskBox.appendChild(deleteButton);
      taskList.appendChild(taskBox);
  
      taskModal.style.display = 'none';
      taskForm.reset();
    });
  
    const closeButton = document.getElementsByClassName('close')[0];
    closeButton.addEventListener('click', function() {
      taskModal.style.display = 'none';
      taskForm.reset();
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == taskModal) {
        taskModal.style.display = 'none';
        taskForm.reset();
      }
    });
  });

import { format } from 'date-fns';

export default class UI {
  static renderTasks(project) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    project.tasks.forEach((task, index) => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
// Validate and format the due date
let dueDateFormatted = 'No due date';
if (task.dueDate && !isNaN(new Date(task.dueDate))) {
  dueDateFormatted = format(new Date(task.dueDate), 'MM/dd/yyyy');
}

taskElement.innerHTML = `
  <h3>${task.title}</h3>
  <p>${task.description}</p>
  <p>Due: ${dueDateFormatted}</p>
  <p>Priority: ${task.priority}</p>
  <button onclick="UI.deleteTask(${index})">Delete</button>
  <button onclick="UI.toggleCompletion(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
`;
taskList.appendChild(taskElement);
    });
  }

  static deleteTask(index) {
    // Implement delete functionality
  }

  static toggleCompletion(index) {
    // Implement toggle functionality
  }
}
import "./../style.css";

import Project from './modules/Project';
import Task from './modules/Task';
import UI from './modules/UI';
import Storage from './modules/Storage';

document.addEventListener('DOMContentLoaded', () => {
  let project = Storage.loadProject();

  if (!project || !(project instanceof Project)) {
    project = new Project('Default');
  }

  UI.renderTasks(project);

  const taskForm = document.getElementById('task-form');
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('task-due-date').value;
    const priority = document.getElementById('task-priority').value;

    if (!dueDate) {
        alert('Please enter a valid date.');
        return;
    }

    const task = new Task(title, description, dueDate, priority);
    project.addTask(task);
    Storage.saveProject(project);
    UI.renderTasks(project);
    taskForm.reset();
  });
});
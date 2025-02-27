import Project from './Project'; // Add this line

export default class Storage {
    static saveProject(project) {
      localStorage.setItem('project', JSON.stringify(project));
    }
  
    static loadProject() {
      const project = JSON.parse(localStorage.getItem('project'));
      return project ? project : new Project('Default');
    }
  }
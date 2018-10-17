import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'To Do It';
  currentFocus: string = 'Angular Homework';
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];
  selectedTask: Task = this.tasks[0];

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }
  priorityColor(currentTask){
    if (parseInt(currentTask.priority) === 3){
      return "bg-danger";
    } else if (parseInt(currentTask.priority) === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}

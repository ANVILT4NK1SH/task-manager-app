// task-list.component.ts
import { Component, inject, signal } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { TaskService } from '../shared/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [TaskComponent]
})
export class TaskListComponent {
  tasksService = inject(TaskService)
  tasks = this.tasksService.tasks

  
  filterStatus = 'All';

  get filteredTasks() {
    if (this.filterStatus === 'Completed') {
      return this.tasks().filter(task => task.completed);
    }
    if (this.filterStatus === 'Pending') {
      return this.tasks().filter(task => !task.completed);
    }
    return this.tasks;
  }

  changeFilter(status: string) {
    status = this.filterStatus;
  }
}

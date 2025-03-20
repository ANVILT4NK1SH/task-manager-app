import { Component, input } from '@angular/core';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-dashboard',
  imports: [TaskListComponent, TaskFormComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  title = input<string>();

  
}

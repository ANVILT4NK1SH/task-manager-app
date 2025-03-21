import { Component, inject, input } from '@angular/core';
import { TaskService } from '../../shared/services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  imports: [FormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {
  taskService = inject(TaskService)
  tasks = this.taskService.tasks
  currentTitle = input();
  updatedTitle = '';

  updateHandler() {
    let task = this.tasks().find(task => task.title === this.currentTitle())  
    
    task!.title = this.updatedTitle
    
  }
}

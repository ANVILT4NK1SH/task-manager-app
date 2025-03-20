import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../shared/services/task.service';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskSevice = inject(TaskService)
  tasks = this.taskSevice.tasks
  newTaskTitle = signal<string>('')

  addTaskHandler(title: string) {
    
    if (title) {
      this.taskSevice.addTask(title)      
    }else {
      alert("You need to enter a task!")
    }
    this.newTaskTitle.set('');
  }
  
}

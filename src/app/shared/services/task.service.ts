import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([
    { title: 'Task 1', completed: false, priority: 'normal' },
    { title: 'Task 2', completed: true, priority: 'normal' },
    { title: 'Task 3', completed: false, priority: 'normal' },
  ]);

  addTask(title: string, priority: 'urgent' | 'normal' | 'not-urgent') {
    this.tasks.update((t) => [
      ...t,
      { title: title, completed: false, priority: priority },
    ]);
  }
}

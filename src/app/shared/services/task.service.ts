import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([
    { title: 'Task 1', completed: false },
    { title: 'Task 2', completed: true },
    { title: 'Task 3', completed: false },
  ]);

  addTask(title: string) {
    this.tasks.update((t) => [
      ...t,
      { title: title, completed: false },
    ]);
  }
}

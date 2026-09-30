import { Task, type STask } from './Task';
import { readFile, writeFile } from 'fs/promises';

interface TaskManagerActions {
  load: (filename: string) => Promise<void>;
  save: (filename: string) => Promise<void>;
  addTask: (title: string) => number;
  findTask: (id: number) => Task | null;
  removeTask: (id: number) => void;
  closeTask: (id: number) => void;
  allTasks: () => Task[];

  // Задания, для которых isComplete() => false
  availableTasks: () => Task[];
}

export class TaskManager implements TaskManagerActions {
  private tasks: Task[] = [];
  private nextId = 1;

  addTask(title: string): number {
    const task = new Task(this.nextId++, title);
    this.tasks.push(task);
    return task.id;
  }

  findTask(id: number): Task | null {
    const task = this.tasks.find((task) => task.id === id);
    return task || null;
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  closeTask(id: number) {
    const task = this.findTask(id);

    if (task) {
      task.close();
    } else {
      throw new Error('Task not found');
    }
  }

  allTasks(): Task[] {
    return this.tasks;
  }

  availableTasks(): Task[] {
    return this.tasks.filter((t) => !t.complete);
  }

  async save(filename: string) {
    const tasks = this.tasks.map((task) => task.toSerializable());
    await writeFile(filename, JSON.stringify(tasks, undefined, 2));
  }

  async load(filename: string) {
    try {
      const data = await readFile(filename, 'utf8');
      const sTasks: STask[] = JSON.parse(data);
      this.tasks = sTasks.map((sTask) => Task.fromSerializable(sTask));

      const maxId = this.tasks.reduce((max, t) => Math.max(max, t.id), 0);
      this.nextId = maxId + 1;
    } catch {}
  }
}

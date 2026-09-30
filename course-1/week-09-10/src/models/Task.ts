export interface ITask {
  title: string;
  complete: boolean;
  id: number;
  createdAt: Date;
}

export type STask = Omit<ITask, 'createdAt'> & { createdAt: string };

export interface TaskActions {
  close: () => void;
  isComplete: () => boolean;
}

export class Task implements ITask, TaskActions {
  id: number;
  title: string;
  complete: boolean;
  createdAt: Date;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.complete = false;
    this.createdAt = new Date();
  }

  close() {
    this.complete = true;
  }

  isComplete() {
    return this.complete;
  }

  toSerializable(): STask {
    return {
      ...this,
      createdAt: this.createdAt.toUTCString(),
    };
  }

  static fromSerializable(sTask: STask): Task {
    const task = new Task(sTask.id, sTask.title);
    task.complete = sTask.complete;
    task.createdAt = new Date(sTask.createdAt);
    return task;
  }
}

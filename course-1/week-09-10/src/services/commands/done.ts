import type { Command } from '../types';

export const done: Command = {
  accept(...argv) {
    const [name] = argv;
    return argv.length === 2 && name === 'done';
  },
  run(manager, ...argv) {
    const id = Number(argv[1]);
    if (isNaN(id)) {
      console.log('Invalid ID');
      return false;
    }

    const task = manager.findTask(id);

    if (!task) {
      console.log(`No tasks found with ID: ${id}`);
      return false;
    }

    manager.closeTask(id);
    return true;
  },
  description: 'done [task-id]: complete task',
};

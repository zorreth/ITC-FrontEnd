import type { Command } from '../types';

export const rm: Command = {
  accept(...argv) {
    const [name] = argv;
    return argv.length === 2 && name === 'rm';
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

    manager.removeTask(id);
    return true;
  },
  description: 'rm [task-id]: remove task',
};

import type { Command } from '../types';

export const add: Command = {
  accept(...argv) {
    const [name] = argv;
    return argv.length >= 1 && name === 'add';
  },
  run(manager, ...argv) {
    const title = argv.slice(1).join(' ');
    manager.addTask(title);
    return true;
  },
  description: 'add [long title]: add new task',
};

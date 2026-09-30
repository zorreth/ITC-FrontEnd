import type { Command } from '../types';

export const list: Command = {
  accept(...argv) {
    const [name, all] = argv;
    return argv.length <= 2 && ['ls', 'list'].includes(name) && ['-a', undefined].includes(all);
  },
  run(manager, ...argv) {
    const showAll = argv[1] === '-a';

    if (showAll) {
      console.log(
        manager
          .allTasks()
          .map((t) => `${t.id} ${t.complete ? '[DONE]' : '[TODO]'} ${t.title}`)
          .join('\n'),
      );
    } else {
      console.log(
        manager
          .availableTasks()
          .map((t) => `${t.id} [TODO] ${t.title}`)
          .join('\n'),
      );
    }

    return false;
  },
  description: 'ls, list [-a]: list available [all] todo tasks',
};

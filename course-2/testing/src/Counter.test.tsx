import { render } from 'vitest-browser-react';
import { expect, test } from 'vitest';
import { Counter } from './Counter';

test('counter displays 1 by default', async () => {
  const screen = await render(<Counter />);

  await expect.element(screen.getByText('Count is 1')).toBeVisible();
});

test('counter button increments the count', async () => {
  const screen = await render(<Counter />);

  await screen.getByRole('button', { name: 'Increment' }).click();

  await expect.element(screen.getByText('Count is 2')).toBeVisible();
});

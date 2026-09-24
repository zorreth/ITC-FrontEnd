import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <p>Count is {counter}</p>

      <button data-testid="123" onClick={() => setCounter((c) => c + 1)}>
        Increment
      </button>
    </div>
  );
}

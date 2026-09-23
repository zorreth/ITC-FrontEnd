import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <p>Count is {counter}</p>

      <button onClick={() => setCounter((c) => c + 1)}>Increment</button>
    </div>
  );
}

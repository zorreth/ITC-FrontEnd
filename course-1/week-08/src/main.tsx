import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntervalTimer } from './IntervalTimer';
import { TimeoutTimer } from './TimeoutTimer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p>
      setInterval: <IntervalTimer initialSeconds={5} />
    </p>

    <p>
      setTimeout: <TimeoutTimer initialSeconds={5} />
    </p>
  </StrictMode>,
);

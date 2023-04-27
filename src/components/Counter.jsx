import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(5);

  function handleIncrementClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={handleIncrementClick}>Increment</button>
    </div>
  );
}

export default Counter;

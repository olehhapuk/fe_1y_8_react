import { useState } from 'react';

import CounterActions from './CounterActions';

function Counter({ initialValue, step = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrementClick() {
    // for (let i = 0; i < 5; i++) {
    //   setCounter((prevCounter) => prevCounter + 1);
    // }

    setCounter((prevCounter) => prevCounter + step);
  }

  function handleDecrementClick() {
    setCounter((prevCounter) => prevCounter - step);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <CounterActions
        counter={counter}
        onIncrement={handleIncrementClick}
        onDecrement={handleDecrementClick}
      />
    </div>
  );
}

export default Counter;

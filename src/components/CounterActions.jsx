function CounterActions({ counter, onIncrement, onDecrement }) {
  return (
    <div>
      <span>{counter}</span>
      <button onClick={onIncrement}>Increment +</button>
      <button onClick={onDecrement}>Decrement -</button>
    </div>
  );
}

export default CounterActions;

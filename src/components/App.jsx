import Counter from './Counter';

function App() {
  function handleClick1(e) {
    console.log(e.target);
  }

  function handleButtonClick(a = 'hello') {
    console.log(a);
  }

  return (
    <div>
      <Counter />
      <hr />

      <button onClick={handleClick1}>Click me with event</button>
      <button onClick={() => handleButtonClick('abc')}>
        Click me with params
      </button>
    </div>
  );
}

export default App;

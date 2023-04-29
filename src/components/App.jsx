import Counter from './Counter';
import Switch from './Switch';

function App() {
  function handleClick1(e) {
    console.log(e.target);
  }

  function handleButtonClick(a = 'hello') {
    console.log(a);
  }

  return (
    <div>
      <Switch>Content 1</Switch>
      <hr />
      <Counter initialValue={1} step={5} />
      <hr />

      <button onClick={handleClick1}>Click me with event</button>
      <button onClick={() => handleButtonClick('abc')}>
        Click me with params
      </button>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('first render');
  }, []);

  useEffect(() => {
    console.log('render');
  });

  useEffect(() => {
    console.log('counter update', counter);
  }, [counter]);

  useEffect(() => {
    console.log('text update', text);
  }, [text]);

  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default App;

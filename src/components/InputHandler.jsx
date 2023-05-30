import { useEffect, useState } from 'react';

function InputHandler() {
  const [input, setInput] = useState('');

  useEffect(() => {
    function handleKeydown(e) {
      setInput(e.key);
    }

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <div>
      InputHandler: <span>{input}</span>
    </div>
  );
}

export default InputHandler;

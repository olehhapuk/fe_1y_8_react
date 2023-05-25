import { useEffect } from 'react';

function Timer() {
  useEffect(() => {
    setInterval(() => {
      console.log('interval');
    }, 1000);
  }, []);

  return <div>Timer</div>;
}

export default Timer;

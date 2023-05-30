import { useEffect, useState } from 'react';

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      // setTime((prevTime) => prevTime + 1);
      setTime(new Date());
    }, 5000);

    return () => {
      clearInterval(timerId); // Спрацьовує при розмонтуванні
    };
  }, []);

  useEffect(() => {
    console.log('time', time.getSeconds());
    console.log('------');

    return () => {
      console.log('time return'); // Спрацьовує перед кожним наступним рендером
    };
  }, [time]);

  return (
    <div>
      Timer:{' '}
      {time.toLocaleDateString('uk', {
        dateStyle: 'full',
      })}
    </div>
  );
}

export default Timer;

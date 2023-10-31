import axios from 'axios';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@chakra-ui/react';

function Todo() {
  const [todo, setTodo] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);

    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => {
        setTodo(res.data);
      })
      .catch((error) => {
        // setError(error.response.data.message);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <CircularProgress />}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {todo && (
        <>
          <h4>{todo.title}</h4>
          <input type="checkbox" defaultChecked={todo.completed} readOnly />
        </>
      )}
    </div>
  );
}

export default Todo;

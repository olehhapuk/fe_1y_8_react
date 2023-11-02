import { useEffect } from 'react';
import { CircularProgress } from '@chakra-ui/react';
import { useApi } from '../hooks/useApi';
import { getTodoDetailsService } from '../services/todosServices';

function Todo() {
  // data: todo - витягуємо значення властивості data у змінну todo
  const {
    data: todo,
    loading,
    error,
    fetchData,
  } = useApi(null, getTodoDetailsService);

  useEffect(() => {
    fetchData(4);
  }, []);

  return (
    <div>
      {loading && <CircularProgress />}
      {error && <p style={{ color: 'red' }}>{error.message}</p>}

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

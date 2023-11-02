import { useState } from 'react';

export function useApi(initialData, service) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  function fetchData(...args) {
    setLoading(true);
    setError(undefined);

    service(...args)
      .then((res) => setData(res))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }

  return {
    fetchData,
    data,
    loading,
    error,
  };
}

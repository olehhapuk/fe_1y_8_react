import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import ArticlesList from './components/ArticlesList';
import Searchbar from './components/Searchbar';
import { searchArticles } from './services/articlesService';

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    if (query === '') {
      return;
    }

    setLoading(true);
    setError(null);

    searchArticles(query, page)
      .then((data) => {
        setArticles((prevArticles) => [...prevArticles, ...data.hits]); // ... - spread оператор - розмазує всі елементи в новий масив
        setPagesCount(data.nbPages);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query, page]);

  function loadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  function search(newQuery) {
    setQuery(newQuery);
    setPage(0);
    setArticles([]);
  }

  return (
    <div>
      <Searchbar onSearch={search} />
      {error && <p>{error}</p>}
      <RotatingLines width={50} visible={loading} />
      <ArticlesList articles={articles} />

      {page < pagesCount && !error && (
        <button onClick={loadMore}>Load more</button>
      )}
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import ArticlesList from './components/ArticlesList';
import Searchbar from './components/Searchbar';
import { searchArticles } from './services/articlesService';

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('react');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    searchArticles(query, 0)
      .then((data) => {
        setArticles(data.hits);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div>
      <Searchbar onSearch={setQuery} />
      {error && <p>{error}</p>}
      <RotatingLines width={50} visible={loading} />
      <ArticlesList articles={articles} />
    </div>
  );
}

export default App;

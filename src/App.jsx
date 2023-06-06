import { useState, useEffect } from 'react';
import axios from 'axios';

import ArticlesList from './components/ArticlesList';
import Searchbar from './components/Searchbar';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    searchArticles('nodejs');
  }, []);

  function searchArticles(query) {
    axios
      .get('https://hn.algolia.com/api/v1/search', {
        params: {
          query: query,
          page: 0,
        },
      })
      .then((res) => {
        setArticles(res.data.hits);
      });
  }

  return (
    <div>
      <Searchbar onSearch={searchArticles} />
      <ArticlesList articles={articles} />
    </div>
  );
}

export default App;

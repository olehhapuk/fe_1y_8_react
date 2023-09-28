import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchShowsService } from '../services/showsService';
import Searchbar from '../components/Searchbar';

function ShowsPage() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    query: '',
  });

  useEffect(() => {
    setIsLoading(true);

    searchShowsService(searchParams.get('query'), 1)
      .then((res) => setShows(res))
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  function handleSearch(newQuery) {
    setSearchParams({
      query: newQuery,
    });
  }

  return (
    <div>
      <p>Shows Page</p>

      <Searchbar
        onSearch={handleSearch}
        defaultValue={searchParams.get('query')}
      />

      <p>Search results for: {searchParams.get('query')}</p>

      {isLoading && <p>Loading...</p>}

      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <Link to={`/shows/${show.id}`}>{show.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowsPage;

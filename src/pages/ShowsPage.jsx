import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { searchShowsService } from '../services/showsService';
import Searchbar from '../components/Searchbar';

function ShowsPage() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    query: '',
    page: 1,
  });
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    searchShowsService(searchParams.get('query'), searchParams.get('page'))
      .then((res) => {
        setShows(res.results);
        setTotalPages(res.totalPages);
      })
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  function handleSearch(newQuery) {
    setSearchParams({
      query: newQuery,
      page: searchParams.get('page'),
    });
  }

  function handlePageChange({ selected }) {
    setSearchParams({
      query: searchParams.get('query'),
      page: selected + 1,
    });
  }

  const initialPage = searchParams.get('page') - 1;

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

      <ReactPaginate
        initialPage={initialPage}
        pageCount={totalPages}
        onPageChange={handlePageChange}
        previousLabel={null}
        nextLabel={null}
      />
    </div>
  );
}

export default ShowsPage;

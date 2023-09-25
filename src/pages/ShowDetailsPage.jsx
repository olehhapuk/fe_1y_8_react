import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getShowDetails } from '../services/showsService';

function ShowDetailsPage() {
  const { showId } = useParams();

  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getShowDetails(showId)
      .then((res) => setShow(res))
      .finally(() => setIsLoading(false));
  }, [showId]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {show && (
        <div>
          <h1>{show.title}</h1>
          <p>{show.tagline}</p>
          <hr />
          {show.genres.map((genre) => (
            <span key={genre}>{genre} </span>
          ))}
          <p>{show.description}</p>
        </div>
      )}
      <Link to={`/shows/${showId}`}>Reviews</Link> <Link to="cast">Cast</Link>{' '}
      <Link to="episodes">Episodes</Link>
      <Outlet />
    </div>
  );
}

export default ShowDetailsPage;

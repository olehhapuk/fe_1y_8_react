import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { getMovieDetailsService } from '../services/moviesService';

function MovieDetailsPage() {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getMovieDetailsService(movieId)
      .then((data) => setDetails(data))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      {isLoading && <ColorRing visible />}
      {!isLoading && details && (
        <div>
          <h2>{details.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt={details.title}
          />
        </div>
      )}

      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;

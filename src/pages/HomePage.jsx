import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { getTrendingMoviesService } from '../services/moviesService';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrendingMoviesService()
      .then((res) => setMovies(res.results))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading && <ColorRing visible />}

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;

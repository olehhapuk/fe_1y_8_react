import { useEffect } from 'react';
import { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
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
      {movies.map((movie) => (
        <p>{movie.title}</p>
        // Замінити на Link і вказати посилання на сторінку деталей фільму(дивимось формат посилання у завданні)
      ))}
    </div>
  );
}

export default HomePage;

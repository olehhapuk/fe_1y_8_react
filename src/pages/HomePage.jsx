import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getTrendingService } from '../services/trendingService';

function HomePage() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getTrendingService(1)
      .then((res) => setShows(res))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Shows | Home</title>
      </Helmet>

      <h1>Trending</h1>

      {isLoading && <p>Loading...</p>}

      <ul>
        {shows.map((show) => (
          <li key={show.id}>{show.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;

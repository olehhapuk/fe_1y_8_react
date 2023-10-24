import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getShowDetails } from '../services/showsService';

function ShowDetailsPage() {
  const { showId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getShowDetails(showId)
      .then((res) => setShow(res))
      .finally(() => setIsLoading(false));
  }, [showId]);

  // Redirect with timeout
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/');
  //   }, 3000);
  // }, [navigate]);

  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        {'<-'} Go Back
      </button>
      {location.pathname.endsWith('cast') && <p>Cast is active</p>}
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

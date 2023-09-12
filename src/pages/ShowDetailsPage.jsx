import { useParams, Link, Outlet } from 'react-router-dom';

function ShowDetailsPage() {
  const { showId } = useParams();

  return (
    <div>
      <p>ShowDetailsPage #{showId}</p>

      <Link to={`/shows/${showId}`}>Reviews</Link>
      <br />
      <Link to="cast">Cast</Link>
      <br />
      <Link to="episodes">Episodes</Link>

      <Outlet />
    </div>
  );
}

export default ShowDetailsPage;

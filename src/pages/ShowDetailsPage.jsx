import { useParams, Link, Outlet } from 'react-router-dom';

function ShowDetailsPage() {
  const { showId } = useParams();

  return (
    <div>
      <p>ShowDetailsPage #{showId}</p>

      <Link to="reviews">Reviews</Link>

      <Outlet />
    </div>
  );
}

export default ShowDetailsPage;

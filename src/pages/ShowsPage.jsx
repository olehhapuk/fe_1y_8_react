import { Link } from 'react-router-dom';

function ShowsPage() {
  return (
    <div>
      <p>ShowsPage</p>
      <Link to="/shows/1">Show 1 details</Link>
      <br />
      <Link to="/shows/2">Show 2 details</Link>
    </div>
  );
}

export default ShowsPage;

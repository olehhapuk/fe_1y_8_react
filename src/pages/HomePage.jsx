import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <p>HomePage</p>

      <Link to="/about">About</Link>
    </div>
  );
}

export default HomePage;

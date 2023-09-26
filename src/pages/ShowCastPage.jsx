import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getShowCast } from '../services/showsService';

function ShowCastPage() {
  const { showId } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getShowCast(showId)
      .then((res) => setCast(res))
      .finally(() => setIsLoading(false));
  }, [showId]);

  return (
    <div>
      <h3>Cast:</h3>
      {isLoading && <p>Loading...</p>}

      <ul>
        {cast.map((person) => (
          <li key={person.id}>
            <h4>{person.name}</h4>
            <p>{person.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowCastPage;

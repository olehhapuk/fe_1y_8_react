import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getShowReviews } from '../services/showsService';

function ShowReviewsPage() {
  const { showId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getShowReviews(showId)
      .then((res) => setReviews(res))
      .finally(() => setIsLoading(false));
  }, [showId]);

  return (
    <div>
      <h3>Reviews:</h3>
      {isLoading && <p>Loading...</p>}

      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h4>{review.author.name}</h4>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowReviewsPage;

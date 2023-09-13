import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api';

import { ImagePendingView } from 'components/Loader';

import TextErrorView from 'components/TextErrorView';

const Reviews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function getInfo() {
      try {
        setLoading(true);
        const response = await getReviews(id);
        setReviews(response.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }

    getInfo();
  }, [id]);

  return (
    <>
      {error && <TextErrorView message={error.message} />}
      {loading && <ImagePendingView />}

      {reviews.length > 0 ? (
        reviews.map(review => (
          <ul key={review.id}>
            <li>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          </ul>
        ))
      ) : (
        <p>Did not find any reviews</p>
      )}
    </>
  );
};

export default Reviews;

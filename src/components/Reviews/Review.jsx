import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api';
import css from './Review.module.css';
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
            <li className={css.reviewItem}>
              <p className={css.author}>Author: {review.author}</p>
              <p className={css.content}>{review.content}</p>
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

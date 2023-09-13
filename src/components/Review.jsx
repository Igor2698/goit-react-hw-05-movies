import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api';

export const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { id } = useParams();
  useEffect(() => {
    async function getInfo() {
      try {
        const response = await getReviews(id);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    }

    getInfo();
  }, [id]);
  console.log(reviews);

  return (
    reviews &&
    reviews.map(review => (
      <ul>
        <li key={review.id}>
          <p>Author: {review.author}</p>
          <p>{review.content}</p>
        </li>
      </ul>
    ))
  );
};

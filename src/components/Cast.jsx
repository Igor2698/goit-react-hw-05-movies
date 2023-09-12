import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCast } from 'api';

export const Cast = () => {
  const [actors, setActors] = useState();
  const { id } = useParams();
  useEffect(() => {
    async function getCasts() {
      try {
        const response = await getCast(id);
        console.log(response);
        setActors(response.cast);
      } catch (error) {
        console.log(error);
      }
    }

    getCasts();
  }, [id]);

  return (
    actors && (
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <p>Character: {actor.character}</p>
            <p>Name: {actor.name}</p>
            <img
              width="100"
              height="150"
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt="actor"
            />
          </li>
        ))}
      </ul>
    )
  );
};

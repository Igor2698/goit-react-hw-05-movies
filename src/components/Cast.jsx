import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCast } from 'api';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const Cast = () => {
  const [actors, setActors] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getCasts() {
      try {
        const response = await getCast(id);
      
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
        {actors.slice(0, 30).map(actor => {
          return (
            <li key={actor.id}>
              <p>Character: {actor.character}</p>
              <p>Name: {actor.name}</p>
              <img
                width="100"
                height="150"
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultImg
                }
                alt="actor"
              />
            </li>
          );
        })}
      </ul>
    )
  );
};

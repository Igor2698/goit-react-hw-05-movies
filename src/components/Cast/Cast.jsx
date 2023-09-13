import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCast } from 'api';
import { ImagePendingView } from 'components/Loader';
import css from './Cast.module.css';
import TextErrorView from 'components/TextErrorView';

const defaultImg =
  'https://koshka.top/uploads/posts/2021-12/thumbs/1638771511_1-koshka-top-p-milogo-kotika-v-shapochke-1.jpg';

const Cast = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [actors, setActors] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getCasts() {
      try {
        setLoading(true);
        const response = await getCast(id);
        setLoading(false);

        setActors(response.cast);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }

    getCasts();
  }, [id]);

  return (
    <>
      {error && <TextErrorView message={error.message} />}
      {loading && <ImagePendingView />}

      {actors && (
        <ul className={css.listOfCasts}>
          {actors.slice(0, 30).map(actor => {
            return (
              <li key={actor.id}>
                <img
                  width="200"
                  height="300"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : defaultImg
                  }
                  alt="actor"
                />
                <p className={css.characterText}>
                  Character: {actor.character}
                </p>
                <p className={css.name}>Name: {actor.name}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;

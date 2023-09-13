import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoovieByName } from 'api';
import { useNavigate, Link, Outlet } from 'react-router-dom';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
export const MoovieDetails = () => {
  const [moovie, setMoovie] = useState();
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function getOneMoovie() {
      try {
        const response = await getMoovieByName(id);

        setMoovie(response);
      } catch (error) {
        navigate('/*', { replace: true });
        console.log(error);
      }
    }

    getOneMoovie();
  }, [id, navigate]);

  return (
    <>
      {moovie && (
        <>
          <img
            src={
              moovie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${moovie.poster_path}`
                : defaultImg
            }
            width="250"
            alt="poster"
          />
          <h2>{moovie.title}</h2>
          <h3>Overview</h3>
          <p>{moovie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {moovie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </>
      )}
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

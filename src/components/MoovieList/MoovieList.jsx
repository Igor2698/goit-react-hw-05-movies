import { Link, useLocation } from 'react-router-dom';
import css from './MoovieList.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MoovieList = ({ newMoovies }) => {
  const location = useLocation();

  return (
    <>
      
      <ul className={css.listMoovie}>
        {newMoovies.map(moovie => (
          <Link
            key={moovie.id}
            to={`/moovies/${moovie.id}`}
            state={{ from: location }}
          >
            <li>
              <img
                className={css.moovieListImg}
                src={
                  moovie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${moovie.poster_path}`
                    : defaultImg
                }
                alt="poster"
              />
              <p className={css.moovieListText}>
                {moovie.title ?? moovie.name}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

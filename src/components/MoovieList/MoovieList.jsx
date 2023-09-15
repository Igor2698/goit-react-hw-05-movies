import { Link, useLocation } from 'react-router-dom';
import css from './MoovieList.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MoovieList = ({ newMoovies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={css.listMoovie}>
        {newMoovies.map(({ id, poster_path, name: movieName, title }) => (
          <Link key={id} to={`/moovies/${id}`} state={{ from: location }}>
            <li className={css.moovieItem}>
              <img
                className={css.moovieListImg}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImg
                }
                alt="poster"
              />
              <p className={css.moovieListText}>{title ?? movieName}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

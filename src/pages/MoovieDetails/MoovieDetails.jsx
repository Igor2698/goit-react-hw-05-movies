import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getMoovieByID } from 'api';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { ImagePendingView } from 'components/Loader';
import css from './MoovieDetails.module.css';
import { AiOutlineLeftCircle } from 'react-icons/ai';

import TextErrorView from 'components/TextErrorView';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const [moovie, setMoovie] = useState();
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function getOneMoovie() {
      try {
        setLoading(true);
        const response = await getMoovieByID(id);

        setMoovie(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        navigate('/', { replace: true });
        console.log(error);
      }
    }

    getOneMoovie();
  }, [id, navigate]);

  return (
    <div className={css.moovieDetailsWrapper}>
      {error && <TextErrorView message={error.message} />}

      {loading && <ImagePendingView />}

      <Link className={css.backButton} to={backLinkLocationRef.current}>
        <AiOutlineLeftCircle />
        Back to products
      </Link>
      {moovie && (
        <>
          <img
            className={css.moovieDetailsimg}
            src={
              moovie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${moovie.poster_path}`
                : defaultImg
            }
            width="400"
            alt="poster"
          />

          <div className={css.textWrapper}>
            <h2 className={css.MoovieDetailsTitle}>
              {moovie.title} (
              {moovie.release_date && moovie.release_date.slice(0, 4)})
            </h2>
            <p className={css.MoovieDetailsScore}>
              User Score:
              {moovie.vote_average && Math.floor(moovie.vote_average * 10)}%
            </p>

            <h2 className={css.overviewTitle}>Overview:</h2>
            <p className={css.overviewText}> {moovie.overview}</p>
            <h3 className={css.genresTitle}>Genres: </h3>
            <p className={css.listOfGenres}>
              {moovie.genres.map(genre => genre.name).join(', ')}
            </p>
            <h2 className={css.linksTitle}>Additional information</h2>
            <ul className={css.linkslist}>
              <li>
                <Link className={css.links} to="cast">
                  Cast
                </Link>{' '}
              </li>
              <li>
                <Link className={css.links} to="reviews">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}

      <Outlet />
    </div>
  );
};

export default MoovieDetails;

import css from './Error.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.body.classList.add(css.bodyBackground);

    return () => {
      document.body.classList.remove(css.bodyBackground);
    };
  }, []);

  return (
    <div className={css.wrapper}>
      <Link to={'/'}>Return to home</Link>
      <p className={css.notFoundText}>
        Unfortunately, an error occurred. Please try again later
      </p>
      <img
        className={css.errorImg}
        width="80%"
        height="600"
        src="https://png.pngtree.com/background/20211217/original/pngtree-system-error-background-picture-image_1599770.jpg"
        alt="error"
      />
    </div>
  );
};

export default NotFound;

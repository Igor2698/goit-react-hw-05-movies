import { useState } from 'react';
import css from './Form.module.css';

export const Form = ({ updateQueryString }) => {
  const [moovie, setMoovie] = useState();

  const handleMoovieChange = evt => {
    setMoovie(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    updateQueryString(moovie);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        placeholder="Enter movie title"
        type="text"
        name="moovie"
        onChange={handleMoovieChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

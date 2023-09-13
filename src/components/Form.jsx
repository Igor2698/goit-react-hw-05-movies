import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input type="text" name="moovie" onChange={handleMoovieChange} />
      <button type="submit">Search</button>
    </form>
  );
};

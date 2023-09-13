export const Form = ({ updateQueryString, moovie, handleMoovieChange }) => {
  return (
    <form onSubmit={updateQueryString}>
      <input
        type="text"
        name="moovie"
        value={moovie}
        onChange={handleMoovieChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

const Movie = ({ movie, movieList, setList }) => (
  <li>
    {movie.title} - Watchlist ({movie.watchlist ? "Yes" : "No"})
    <span
      style={{ fontSize: "0.7rem", color: "blue", cursor: "pointer" }}
      onClick={() => {
        const updatedList = movieList.map((m) =>
          m.id === movie.id ? { ...m, watchlist: !m.watchlist } : m,
        );
        setList(updatedList);
      }}
    >
      {movie.watchlist ? " Remove" : " Add"}
    </span>
  </li>
);
export default Movie;

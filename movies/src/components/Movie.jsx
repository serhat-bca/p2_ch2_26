const Movie = ({ movie }) => (
  <li>
    {movie.title} - Watchlist ({movie.watchlist ? "Yes" : "No"})
    <span
      style={{ fontSize: "0.7rem", color: "blue", cursor: "pointer" }}
      onClick={() => console.log("Clicked")}
    >
      {movie.watchlist ? " Remove" : " Add"}
    </span>
  </li>
);
export default Movie;

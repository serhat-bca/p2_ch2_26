const Movie = ({ movie }) => (
  <li>
    {movie.title} - Watchlist ({movie.watchlist ? "Yes" : "No"})
  </li>
);
export default Movie;

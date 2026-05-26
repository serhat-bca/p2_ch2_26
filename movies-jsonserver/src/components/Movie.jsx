import axios from "axios";
const Movie = ({ movie, movieList, setList }) => {
  const toggleWatchlist = () => {
    // handle backend with put request
    // axios.put("http://localhost:3001/movies/__idofthemovie__", {yourdata})
    axios
      .put(`http://localhost:3001/movies/${movie.id}`, {
        ...movie,
        watchlist: !movie.watchlist,
      })
      .then((response) => {
        setList(movieList.map((m) => (m.id === movie.id ? response.data : m)));
      });
    // handle frontend by updating the movieList
  };

  return (
    <li>
      {movie.title} - Watchlist ({movie.watchlist ? "Yes" : "No"})
      <span
        style={{ fontSize: "0.7rem", color: "blue", cursor: "pointer" }}
        onClick={toggleWatchlist}
      >
        {movie.watchlist ? " Remove" : " Add"}
      </span>
    </li>
  );
};
export default Movie;

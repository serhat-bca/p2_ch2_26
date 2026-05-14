import Movie from "./Movie";

const MovieList = ({
  changeFilter,
  filterStatus,
  filteredList,
  movieList,
  setList,
}) => {
  return (
    <div>
      <button onClick={changeFilter}>
        {filterStatus ? "Show All Movies" : "Show Only Watchlist"}
      </button>
      <ul>
        {filteredList.map((m) => (
          <Movie movieList={movieList} setList={setList} movie={m} key={m.id} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

import { useState } from "react";
import MovieList from "./components/MovieList";

const App = ({ movies }) => {
  const [movieName, setName] = useState("");
  const [movieList, setList] = useState(movies);
  const [filterStatus, updateFilter] = useState(true);

  const changeFilter = () => {
    // filterStatus ? updateFilter(false) : updateFilter(true);
    updateFilter(!filterStatus);
  };

  const filteredList = filterStatus
    ? movieList.filter((m) => m.watchlist)
    : movieList; // filter movieList : movieList;

  // filter method is similar syntax to map method

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([
      ...movieList,
      {
        id: Math.floor(Math.random() * 10000),
        title: movieName,
        watchlist: false,
      },
    ]);
    setName("");
  };

  return (
    <div>
      <h2>Movies App</h2>
      <MovieList
        changeFilter={changeFilter}
        filterStatus={filterStatus}
        filteredList={filteredList}
        movieList={movieList}
        setList={setList}
      />
      <form onSubmit={handleSubmit}>
        {/* uncontrolled needs a name */}
        {/* you can use a state for controlled input */}
        <input onChange={(e) => setName(e.target.value)} value={movieName} />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default App;

{
  /* <li>{movies[0].title}</li>
  <li>{movies[1].title}</li>
  <li>{movies[2].title}</li>
  <li>{movies[3].title}</li>
  <li>{movies[4].title}</li>
  <li>{movies[5].title}</li>
  <li>{movies[6].title}</li>
  <li>{movies[7].title}</li> */
}

{
  /* {movies.map((m) => {
    return <li>{m.title}</li>;
    })} */
}

// uncontrolled input field
// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log("Movie: ", e.target.movieName.value);
//   e.target.movieName.value = "";
// };

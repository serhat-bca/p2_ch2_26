import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import axios from "axios";

const App = () => {
  const [movieName, setName] = useState("");
  const [movieList, setList] = useState([]);
  const [filterStatus, updateFilter] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/movies").then((response) => {
      setList(response.data);
    });
  }, []);

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
    // add the new movie to the backend
    // through post request
    axios
      .post("http://localhost:3001/movies", {
        title: movieName,
        watchlist: false,
      })
      .then((response) => {
        setList([...movieList, response.data]);
      });
    // update the movieList state with the new movie
    // so the browser will show the updated list
    setName("");
  };

  const handleSubmitWithAsync = async (e) => {
    e.preventDefault();
    // add the new movie to the backend
    // through post request
    const response = await axios.post("http://localhost:3001/movies", {
      title: movieName,
      watchlist: false,
    });
    setList([...movieList, response.data]);
    // axios
    //   .post("http://localhost:3001/movies", {
    //     title: movieName,
    //     watchlist: false,
    //   })
    //   .then((response) => {
    //     setList([...movieList, response.data]);
    //   });
    // update the movieList state with the new movie
    // so the browser will show the updated list
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
      <form onSubmit={handleSubmitWithAsync}>
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

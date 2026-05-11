import Movie from "./components/Movie";
import { useState } from "react";

const App = ({ movies }) => {
  const [movieName, setName] = useState("");
  const [movieList, setList] = useState(movies);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie: ", movieName);
    setList([...movieList, { id: 67, title: movieName, watchlist: false }]);
    setName("");
  };

  return (
    <div>
      <h2>Movies App</h2>
      <ul>
        {movies.map((m) => (
          <Movie movie={m} key={m.id} />
        ))}
      </ul>
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

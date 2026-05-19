import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/movies").then((response) => {
      console.log("Movies:", response.data);
      setMovies(response.data);
    });
  }, []);

  console.log("hello to console");

  return (
    <div>
      <h2>Promises and Async Ops</h2>
      <h4>Movies</h4>
      <ul>
        {movies.map((m) => (
          <li key={m.id}>{m.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

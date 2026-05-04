import Movie from "./components/Movie";

const App = ({ movies }) => {
  return (
    <div>
      <h2>Movies App</h2>
      <ul>
        {movies.map((m) => (
          <Movie movie={m} key={m.id} />
        ))}
      </ul>
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

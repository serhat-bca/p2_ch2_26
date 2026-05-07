const Season = ({ season }) => {
  // search online how to use reduce to sum numbers in an array

  return (
    <div>
      <h2>{season.title}</h2>
      {season.episodes.map((e) => (
        <p key={e.id}>
          {e.title} - Views: {e.views}
        </p>
      ))}
      <p>
        Total Views:{" "}
        {season.episodes.reduce((total, ep) => total + ep.views, 0)}
      </p>
    </div>
  );
};

export default Season;

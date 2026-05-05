const Season = ({ season }) => {
  return (
    <div>
      <h2>{season.title}</h2>
      {season.episodes.map((e) => (
        <p key={e.id}>
          {e.title} - Views: {e.views}
        </p>
      ))}
    </div>
  );
};

export default Season;

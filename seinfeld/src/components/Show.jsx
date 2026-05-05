import Season from "./Season";

const Show = ({ show }) => {
  return (
    <div>
      {show.map((s) => (
        <Season season={s} key={s.id} />
      ))}
    </div>
  );
};

export default Show;

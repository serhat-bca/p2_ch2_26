import Show from "./components/Show";

const App = () => {
  const show = [
    {
      id: 1,
      title: "Seinfeld Season One",
      episodes: [
        { id: 1, title: "The Seinfeld Chronicles", views: 8200000 },
        { id: 2, title: "The Stake Out", views: 7600000 },
        { id: 3, title: "The Robbery", views: 7400000 },
        { id: 4, title: "Male Unbonding", views: 7100000 },
        { id: 5, title: "The Stock Tip", views: 7900000 },
      ],
    },
    {
      id: 2,
      title: "Seinfeld Season Two",
      episodes: [
        { id: 1, title: "The Ex-Girlfriend", views: 8500000 },
        { id: 2, title: "The Pony Remark", views: 8800000 },
        { id: 3, title: "The Jacket", views: 9100000 },
        { id: 4, title: "The Phone Message", views: 8300000 },
        { id: 5, title: "The Apartment", views: 8700000 },
        { id: 6, title: "The Statue", views: 7900000 },
        { id: 7, title: "The Revenge", views: 8600000 },
        { id: 8, title: "The Heart Attack", views: 8100000 },
        { id: 9, title: "The Deal", views: 9200000 },
        { id: 10, title: "The Baby Shower", views: 7800000 },
        { id: 11, title: "The Chinese Restaurant", views: 9800000 },
        { id: 12, title: "The Busboy", views: 7700000 },
      ],
    },
    {
      id: 3,
      title: "Seinfeld Season Three",
      episodes: [
        { id: 1, title: "The Note", views: 9300000 },
        { id: 2, title: "The Truth", views: 8500000 },
        { id: 3, title: "The Pen", views: 8900000 },
        { id: 4, title: "The Dog", views: 8000000 },
        { id: 5, title: "The Library", views: 9100000 },
        { id: 6, title: "The Parking Garage", views: 9500000 },
        { id: 7, title: "The Cafe", views: 8400000 },
        { id: 8, title: "The Tape", views: 9700000 },
        { id: 9, title: "The Nose Job", views: 8600000 },
        { id: 10, title: "The Stranded", views: 7900000 },
        { id: 11, title: "The Alternate Side", views: 9900000 },
        { id: 12, title: "The Red Dot", views: 9400000 },
        { id: 13, title: "The Subway", views: 9200000 },
        { id: 14, title: "The Pez Dispenser", views: 9600000 },
        { id: 15, title: "The Suicide", views: 8300000 },
        { id: 16, title: "The Fix-Up", views: 8700000 },
        { id: 17, title: "The Boyfriend (Part 1)", views: 11000000 },
        { id: 18, title: "The Boyfriend (Part 2)", views: 10800000 },
        { id: 19, title: "The Limo", views: 9000000 },
        { id: 20, title: "The Good Samaritan", views: 8200000 },
        { id: 21, title: "The Letter", views: 8800000 },
        { id: 22, title: "The Parking Space", views: 9300000 },
        { id: 23, title: "The Keys", views: 10100000 },
      ],
    },
  ];

  return (
    <div>
      <Show show={show} />
    </div>
  );
};

export default App;

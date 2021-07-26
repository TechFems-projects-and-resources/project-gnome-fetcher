import { useEffect, useState } from "react";
import { loadGnomes } from "./data";
import { Filter } from "./components/Filter";
import { Loader } from "./components/Loader";
import { Population } from "./Population";
import "./styles.css";

export default function App() {
  const [completeList, setCompleteList] = useState([]);
  const [list, setList] = useState([]);
  const [showLoader, setshowLoader] = useState(true);

  useEffect(() => {
    loadGnomes().then(({ Brastlewark: gnomes }) => {
      setCompleteList(gnomes);
      setList(gnomes);
      setshowLoader(false);
    });
  }, []);

  const onFilter = (value) => {
    console.log(value);
    setList(completeList.slice(0, value));
  };

  const onSearch = (value) => {
    console.log(value);
    setList(completeList.filter((gnome) => gnome.name.includes(value)));
  };

  return (
    <div className="App">
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <Filter onFilter={onFilter} onSearch={onSearch} />
          <Population peopleList={list} />
        </>
      )}
    </div>
  );
}

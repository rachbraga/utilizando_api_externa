import "./App.css";
import { useEffect, useState } from "react";
import Chacarcters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/."
  );
  console.log(characterList);
  useEffect(() => {
    fetch(currentPage)
      .then((response) => response.json())
      .then((data) => setCharacterList(data));
  }, [currentPage]);

  return (
    <div className="App">
      <Chacarcters characterList={characterList.results} />
      <div className="buttons">
        <button
          className="prev"
          onClick={() => setCurrentPage(characterList.info.prev)}
        >
          Anterior
        </button>
        <button
          className="next"
          onClick={() => setCurrentPage(characterList.info.next)}
        >
          Proxima
        </button>
      </div>
    </div>
  );
}

export default App;

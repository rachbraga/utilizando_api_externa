import "./style.css";
import CharCard from "../CharCard";

function Chacarcters({ characterList }) {
  return (
    <div className="container">
      <h1>Meus Personagens</h1>
      <ul>
        {characterList &&
          characterList.map((character) => (
            <li key={character.id}>
              <CharCard character={character} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Chacarcters;

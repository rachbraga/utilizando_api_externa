import "./style.css";

function CharCard({ character }) {
  return (
    <div className={character.status === "Alive" ? "card alive" : "card dead"}>
      <h3>
        {character.name.length > 15
          ? `${character.name.slice(0, 15)} ...`
          : character.name}
      </h3>
      <img src={character.image} alt={character.name} />
      <p> Espécie: {character.species}</p>
    </div>
  );
}

export default CharCard;

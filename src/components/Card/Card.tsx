import { PokemonProps } from "../../utils/typeScript";
import CrySound from "./CrySounds";
import "./Card.css";

const Card: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <div className="cardLayout">
      <div className="card">
        <div className="cardImg">
          <img src={pokemon.sprites.front_default} alt="" />
        </div>
        <h3 className="cardName">{pokemon.name}</h3>
        <div className="cartTypes">
          <div>タイプ</div>
          {pokemon.types.map((type) => {
            return (
              <div key={type.type.name}>
                <span className="typeName">{type.type.name}</span>
              </div>
            );
          })}
        </div>
        <div className="cardInfo">
          <div className="cardData">
            <p className="title">重さ: {pokemon.weight}</p>
          </div>
          <div className="cardData">
            <p className="title">高さ: {pokemon.height}</p>
          </div>
          <div className="cardData">
            <p className="title">
              アビリティ: {pokemon.abilities[0].ability.name}
            </p>
          </div>
        </div>
        <CrySound soundUrl={pokemon.cries.latest} />
      </div>
    </div>
  );
};

export default Card;

import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { getAllData, getPokemon } from "./utils/pokemonApi";
import { Pokemon, PokemonResponse } from "./utils/typeScript";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [getPage, setGetPage] = useState<PokemonResponse>();
  const [initialURL, setInitialURL] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  useEffect(() => {
    const fetchPokemonData = async () => {
      const res: PokemonResponse = await getAllData(initialURL);
      setGetPage(res);
      loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  }, [initialURL]);

  const loadPokemon = async (data: { name: string; url: string }[]) => {
    const _pokemonData: any = await Promise.all(
      data.map((pokemon: Pokemon) => {
        const pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemon(_pokemonData);
  };

  const handlePrevPage = () => {
    if (getPage?.previous) {
      setLoading(true);
      setInitialURL(getPage.previous);
    }
  };

  const handleNextPage = () => {
    if (getPage?.next) {
      setLoading(true);
      setInitialURL(getPage.next);
    }
  };

  return (
    <>
      <Navbar />
      <div className="btn">
        <button onClick={handlePrevPage}>前へ</button>
        <button onClick={handleNextPage}>後へ</button>
      </div>
      <div className="App">
        {loading ? (
          <h2>データを取得中です</h2>
        ) : (
          <div className="pokemonCardContainer">
            {pokemon.map((list, i) => {
              return <Card key={i} pokemon={list} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default App;

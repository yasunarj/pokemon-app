// import axios from "axios";
// export const getAllData = (URL: string) => {
//     return axios.get(URL).then(res => res.data);
// };

import { PokemonResponse } from "./typeScript";

export const getAllData = (URL: string) => {
  return new Promise<PokemonResponse>((resolve) => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

export const getPokemon = (URL: string) => {
  return new Promise((resolve) => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        resolve(data)});
  })
}

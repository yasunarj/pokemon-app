interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}


interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Ability {
  ability: {
    name: string;
    url: string;
  }
}

interface PokemonProps {
  pokemon: {
    name: string;
    sprites: { front_default: string };
    cries: { latest: string }
    types: Type[];
    weight: number;
    height: number;
    abilities: Ability[];
  };
}

interface CrySoundProps {
  soundUrl: string
}

export type { Pokemon, PokemonResponse, PokemonProps, CrySoundProps };

export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface PokemonAttack {
  fast: Attack[];
  special: Attack[];
}

export interface PokemonDimension {
  minimum: string;
  maximum: string;
}

export interface PokemonEvolutionRequirement {
  amount: number;
  name: string;
}

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  weight: PokemonDimension;
  height: PokemonDimension;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  attacks: PokemonAttack;
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
  evolutions: Pokemon[] | null;
  evolutionRequirements: PokemonEvolutionRequirement | null;
}

export interface GetPokemonData {
  pokemon: Pokemon | null;
}

export interface GetPokemonVars {
  name: string;
}

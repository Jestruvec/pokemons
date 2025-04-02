import { PokemonType } from "../types/Pokemon";

const pokemonApiUrl = "https://pokeapi.co/api/v2/";
const paginationSizes = [25, 50, 75, 100];
const pokemonTypes: PokemonType[] = [
  "normal",
  "grass",
  "fire",
  "water",
  "bug",
  "electric",
  "rock",
  "ghost",
  "poison",
  "psychic",
  "fighting",
  "ground",
  "dragon",
  "flying",
];

export { pokemonApiUrl, paginationSizes, pokemonTypes };

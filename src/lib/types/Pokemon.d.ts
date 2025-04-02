export interface PokemonApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: CommonDescription[];
}

interface CommonDescription {
  name: string;
  url: string;
}

interface PokemonDetail {
  abilities: any[];
  base_experience: number;
  cries: any;
  forms: CommonDescription[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: CommonDescription;
  sprites: Sprites;
  stats: any[];
  types: Types[];
  weight: number;
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: any;
  versions: any;
}

interface Types {
  slot: number;
  type: {
    name: PokemonType;
    url: string;
  };
}

type PokemonType =
  | "normal"
  | "grass"
  | "fire"
  | "water"
  | "bug"
  | "electric"
  | "rock"
  | "ghost"
  | "poison"
  | "psychic"
  | "fighting"
  | "ground"
  | "dragon"
  | "flying";

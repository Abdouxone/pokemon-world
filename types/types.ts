export interface Pokemon {
  id: number;
  name: string;
  image?: string;
  types?: string[];
  url: string;
}
export interface PokemonType {
  name: string;
  url: string;
}
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

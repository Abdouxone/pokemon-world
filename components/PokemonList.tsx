import { Pokemon } from "@/types/types";
import PokemonCard from "./PokemonCard";

export default function PokemonList({
  pokemonData,
}: {
  pokemonData: Pokemon[];
}) {
  if (pokemonData.length === 0) {
    return (
      <div className="text-center py-12 text-gray-600 dark:text-gray-400">
        No Pokemon Found
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {pokemonData.map((item) => (
        <PokemonCard key={item.id} pokemon={item} />
      ))}
    </div>
  );
}

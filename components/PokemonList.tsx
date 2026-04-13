import { Pokemon } from "@/lib/pokeapi";
import Image from "next/image";
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
    <div className="grid grid-cols-1 smL:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {pokemonData.map((item) => (
        <PokemonCard key={item.id} pokemon={item} />
      ))}
    </div>
    // <div className="flex flex-wrap gap-2">
    //   {pokemonData.map((item) => (
    //     <div className="bg-gray-200 rounded-xl" key={item.name}>
    //       <h1 className="text-black text-center font-semibold">{item.name}</h1>
    //       <Image src={item.image} alt={item.name} width={150} height={100} />
    //     </div>
    //   ))}
    // </div>
  );
}

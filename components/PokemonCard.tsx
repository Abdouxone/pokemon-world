import { Pokemon } from "@/lib/pokeapi";
import Image from "next/image";
import React from "react";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const imageurl = pokemon.image;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105">
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center">
          <Image src={imageurl} alt={pokemon.name} fill />
        </div>
      </div>
    </div>
  );
}

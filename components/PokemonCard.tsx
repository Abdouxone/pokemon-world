import { Pokemon } from "@/lib/pokeapi";
import Image from "next/image";
import React from "react";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const imageurl = pokemon.image;
  return (
    <div className="bg-white m-2 dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105">
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 mb-4 bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center">
          <Image
            src={imageurl || ""}
            alt={pokemon.name}
            className="object-contain p-2"
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </div>
        <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-100 capitalize">
          {pokemon.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          #{pokemon.id}
        </p>
      </div>
    </div>
  );
}

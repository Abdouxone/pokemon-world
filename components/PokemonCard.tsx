import { Pokemon } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const imageurl = pokemon.image;
  return (
    <div className="glass group relative m-3 p-1 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 active:scale-95">
      <div className="flex flex-col items-center p-4">
        <div className="relative w-full aspect-square mb-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl overflow-hidden flex items-center justify-center p-6 border border-slate-100 dark:border-slate-800">
          <div className="absolute inset-0 bg-linear-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Image
            src={imageurl || ""}
            alt={pokemon.name}
            className="object-contain drop-shadow-2xl animate-float group-hover:scale-110 transition-transform duration-500"
            unoptimized
            sizes="(max-width: 768px) 100vw, 25vw"
            fill
          />
        </div>

        <div className="w-full text-center space-y-1">
          <span className="text-[10px] uppercase tracking-widest font-bold text-blue-600 dark:text-blue-400 opacity-70">
            #{String(pokemon.id).padStart(3, "0")}
          </span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white capitalize truncate">
            {pokemon.name}
          </h3>
        </div>
      </div>
    </div>
  );
}

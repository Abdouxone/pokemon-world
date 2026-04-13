import PokemonFilters from "@/components/PokemonFilters";
import PokemonList from "@/components/PokemonList";
import PokemonPagination from "@/components/PokemonPagination";
import {
  fetchPokemonByType,
  fetchPokemonList,
  fetchPokemonTypes,
} from "@/lib/pokeapi";
import React from "react";

const ITEMS_PER_PAGE = 20;

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  // console.log(params);
  const page = parseInt(params.page as string) || 1;
  const selectedType = (params.type as string) || "all";
  const offset = (page - 1) * ITEMS_PER_PAGE;

  // console.log(offset);

  const [types, pokemonData] = await Promise.all([
    fetchPokemonTypes(),
    selectedType === "all"
      ? fetchPokemonList(offset, ITEMS_PER_PAGE)
      : fetchPokemonByType(selectedType, offset, ITEMS_PER_PAGE),
  ]);
  // console.log(pokemonData);
  const totalPages = Math.ceil(pokemonData.count / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-16 relative">
        <div className="absolute -top-24 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute -top-24 -right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-4 tracking-tight">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
            Pokémon
          </span>
          {" "}
          <span className="text-gray-900 dark:text-white">
            World
          </span>
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
          Discover and explore the vast world of Pokémon. 
          <span className="block text-sm font-normal mt-2 opacity-75">
            Total of {pokemonData.count} species discovered
          </span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        <section className="glass rounded-3xl p-6 shadow-xl border border-white/20">
          <PokemonFilters types={types} />
        </section>

        <PokemonList pokemonData={pokemonData.results} />

        <div className="pb-12">
          <PokemonPagination
            currentPage={page}
            hasNext={!!pokemonData.next}
            hasPrevious={!!pokemonData.previous}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
}

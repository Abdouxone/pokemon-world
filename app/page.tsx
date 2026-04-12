import PokemonFilters from "@/components/PokemonFilters";
import { fetchPokemonTypes } from "@/lib/pokeapi";
import React from "react";

const ITEMS_PER_PAGE = 20;

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const page = parseInt(params.page as string) || 1;
  const selectedType = (params.type as string) || "all";
  const offset = (page - 1) * ITEMS_PER_PAGE;

  const [types] = await Promise.all([fetchPokemonTypes()]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-8 px-4">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
          Welcome to Pokemon world
        </h1>
        <div className="">Total count: </div>
      </div>
      <PokemonFilters types={types} />
    </div>
  );
}

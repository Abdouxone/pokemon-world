import { Pokemon, PokemonListResponse, PokemonType } from "@/types/types";

const POKEAPI_BASE = "https://pokeapi.co/api/v2";

//Extract Pokemon id from URL
function extractPokemonId(url: string): number {
  const parts = url.split("/").filter(Boolean);
  return parseInt(parts[parts.length - 1]);
}
function addPokemonImage(pokemon: Pokemon): Pokemon {
  return {
    ...pokemon,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
  };
}

export async function fetchPokemonTypes(): Promise<PokemonType[]> {
  const res = await fetch(`${POKEAPI_BASE}/type`, {
    cache: "force-cache", // cache all time
  });

  if (!res.ok) {
    throw new Error("Failed to fetch pokemon types");
  }

  const data = await res.json();
  return data.results.filter(
    (type: PokemonType) => type.name !== "unknown" && type.name !== "shadow",
  );
}

export async function fetchPokemonList(
  offset: number = 0,
  ITEMS_PER_PAGE: number = 20,
): Promise<PokemonListResponse> {
  try {
    const res = await fetch(
      `${POKEAPI_BASE}/pokemon?offset=${offset}&limit=${ITEMS_PER_PAGE}`,
      {
        cache: "force-cache", // cache all time
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch pokemon list");
    }

    const data = await res.json();

    // Add Id and image URL to each pokemon
    const pokemonWithDeatils = data.results.map(
      (pokemon: Pokemon, index: number) => {
        const id = offset + index + 1;
        return addPokemonImage({
          ...pokemon,
          id,
        });
      },
    );

    return {
      ...data,
      results: pokemonWithDeatils,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function fetchPokemonByType(
  selectedType: string,
  offset: number = 0,
  ITEMS_PER_PAGE: number = 20,
): Promise<PokemonListResponse> {
  try {
    const res = await fetch(`${POKEAPI_BASE}/type/${selectedType}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch pokemon by type: ${selectedType}`);
    }

    const data = await res.json();
    const allPokemon = data.pokemon.map((item: { pokemon: Pokemon }) => {
      const id = extractPokemonId(item.pokemon.url);
      return addPokemonImage({
        ...item.pokemon,
        id,
      });
    });

    const paginatedPokemon = allPokemon.slice(offset, offset + ITEMS_PER_PAGE);

    return {
      count: allPokemon.length || 0,
      next: offset + ITEMS_PER_PAGE < allPokemon.length ? "has-more" : null,
      previous: offset > 0 ? "has-previous" : null,
      results: paginatedPokemon || [],
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

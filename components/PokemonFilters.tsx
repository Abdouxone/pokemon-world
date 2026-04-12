"use client";
import { PokemonType } from "@/lib/pokeapi";
import { useRouter, useSearchParams } from "next/navigation";

export default function PokemonFilters({ types }: { types: PokemonType[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedType = searchParams.get("type") || "";

  const handleTypeChange = (type: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedType === type) {
      params.delete("typr");
    } else {
      params.set("type", type);
    }

    params.set("page", "1");
    router.push(`/?${params.toString()}`);
  };
  return (
    <div className="mb-8">
      <h3 className="">Filter by Type</h3>
      <div>
        {types.map((type) => {
          const isSelected = selectedType === type.name;
          return (
            <button
              className="px-4 py-2 rounded-lg font-medium"
              key={type.name}
            >
              {type.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

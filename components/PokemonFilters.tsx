"use client";
import { PokemonType } from "@/lib/pokeapi";
import { useRouter, useSearchParams } from "next/navigation";

export default function PokemonFilters({ types }: { types: PokemonType[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  // console.log("searchParams ==>", searchParams);
  const selectedType = searchParams.get("type") || "";
  // console.log("selectedType ==>", selectedType);

  const handleTypeChange = (type: string) => {
    const params = new URLSearchParams(searchParams.toString());
    // console.log("params ==>", params);
    if (selectedType === type) {
      params.delete("type");
    } else {
      params.set("type", type);
    }

    params.set("page", "1");
    // console.log("params ==>>", params.toString());
    router.push(`/?${params.toString()}`);
  };
  return (
    <div className="mb-8">
      <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">
        {/* Filter by Type: */}
      </h3>
      <div className="flex flex-wrap gap-2">
        {types.map((type) => {
          const isSelected = selectedType === type.name;
          return (
            <button
              className={`px-3 py-2 rounded-lg text-center font-medium transition-all duration-200 ${isSelected ? "bg-blue-600 text-white shadow-md scale-105" : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-500"}`}
              key={type.name}
              onClick={() => handleTypeChange(type.name)}
            >
              {type.name.charAt(0).toLocaleUpperCase() + type.name.slice(1)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

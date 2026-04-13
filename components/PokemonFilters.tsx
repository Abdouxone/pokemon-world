"use client";
import { PokemonType } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";

const TYPE_COLORS: Record<string, string> = {
  normal: "bg-[#A8A77A]",
  fire: "bg-[#EE8130]",
  water: "bg-[#6390F0]",
  electric: "bg-[#F7D02C]",
  grass: "bg-[#7AC74C]",
  ice: "bg-[#96D9D6]",
  fighting: "bg-[#C22E28]",
  poison: "bg-[#A33EA1]",
  ground: "bg-[#E2BF65]",
  flying: "bg-[#A98FF3]",
  psychic: "bg-[#F95587]",
  bug: "bg-[#A6B91A]",
  rock: "bg-[#B6A136]",
  ghost: "bg-[#735797]",
  dragon: "bg-[#6F35FC]",
  steel: "bg-[#B7B7CE]",
  fairy: "bg-[#D685AD]",
};

export default function PokemonFilters({ types }: { types: PokemonType[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedType = searchParams.get("type") || "";

  const handleTypeChange = (type: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedType === type) {
      params.delete("type");
    } else {
      params.set("type", type);
    }
    params.set("page", "1");
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            params.delete("type");
            params.set("page", "1");
            router.push(`/?${params.toString()}`);
          }}
          className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${
            !selectedType 
              ? "bg-slate-900 dark:bg-white text-white dark:text-black border-slate-900 dark:border-white shadow-lg scale-105" 
              : "bg-transparent text-slate-500 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600"
          }`}
        >
          All Types
        </button>

        {types.map((type) => {
          const isSelected = selectedType === type.name;
          const typeColor = TYPE_COLORS[type.name.toLowerCase()] || "bg-slate-400";
          
          return (
            <button
              className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 cursor-pointer relative group overflow-hidden ${
                isSelected 
                  ? `${typeColor} text-white border-transparent shadow-xl scale-110 z-10` 
                  : `bg-transparent text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600`
              }`}
              key={type.name}
              onClick={() => handleTypeChange(type.name)}
            >
              <span className="relative z-10 flex items-center gap-2">
                {type.name}
              </span>
              {isSelected && (
                 <div className="absolute inset-0 bg-white/20 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

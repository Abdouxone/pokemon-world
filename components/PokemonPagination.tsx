"use client";

import { useRouter, useSearchParams } from "next/navigation";

const buttonClass =
  "px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600";

interface PokemonPaginationProps {
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}
export default function PokemonPagination({
  currentPage,
  totalPages,
  hasNext,
  hasPrevious,
}: PokemonPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };
  return (
    <div className="flex items-center justify-center gap-6 mt-12 pb-8">
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={!hasPrevious}
        className="glass flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/80 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 text-gray-700 dark:text-gray-300 border border-white/20 shadow-sm"
      >
        <span>←</span> Previous
      </button>
      
      <div className="glass px-6 py-2 rounded-full text-sm font-bold text-gray-900 dark:text-white border border-white/20 shadow-sm">
        <span className="text-blue-500">{currentPage}</span>
        <span className="mx-2 text-gray-400">/</span>
        <span>{totalPages}</span>
      </div>

      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={!hasNext}
        className="glass flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/80 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 text-gray-700 dark:text-gray-300 border border-white/20 shadow-sm"
      >
        Next <span>→</span>
      </button>
    </div>
  );
}

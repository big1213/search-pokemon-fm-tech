"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useCallback, useEffect, FormEvent } from "react";

export default function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();

  // Extract name from path /pokemon/[name]
  const nameFromPath =
    pathname.startsWith("/pokemon/")
      ? decodeURIComponent(pathname.split("/pokemon/")[1])
      : "";

  const [inputValue, setInputValue] = useState(nameFromPath);

  useEffect(() => {
    setInputValue(nameFromPath);
  }, [nameFromPath]);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const trimmed = inputValue.trim();
      if (!trimmed) return;
      // Capitalize first letter for the API (e.g. "pikachu" -> "Pikachu")
      const formatted =
        trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
      router.push(`/pokemon/${encodeURIComponent(formatted)}`);
    },
    [inputValue, router]
  );

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search Pokémon by name (e.g. Pikachu)"
          className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-lg bg-white text-gray-900 placeholder-gray-400"
          aria-label="Search Pokémon by name"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
        >
          Search
        </button>
      </div>
    </form>
  );
}

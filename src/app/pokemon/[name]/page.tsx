import { Suspense } from "react";
import SearchInput from "@/components/SearchInput";
import PokemonResult from "@/components/PokemonResult";
import LoadingSkeleton from "@/components/LoadingSkeleton";

interface PokemonPageProps {
  params: { name: string };
}

export function generateMetadata({ params }: PokemonPageProps) {
  const name = decodeURIComponent(params.name);
  return {
    title: `${name} - Pokémon Search`,
    description: `View details, attacks, and evolutions for ${name}`,
  };
}

export default function PokemonPage({ params }: PokemonPageProps) {
  const name = decodeURIComponent(params.name);

  return (
    <main className="min-h-screen px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Pokémon Search
        </h1>
        <p className="text-gray-600">
          Search for any Pokémon to see its stats, attacks, and evolutions
        </p>
      </div>
      <SearchInput />
      <Suspense fallback={<LoadingSkeleton />}>
        <PokemonResult name={name} />
      </Suspense>
    </main>
  );
}

"use client";

import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "@/graphql/queries";
import { GetPokemonData, GetPokemonVars } from "@/types/pokemon";
import PokemonCard from "./PokemonCard";
import NotFound from "./NotFound";
import LoadingSkeleton from "./LoadingSkeleton";

interface PokemonResultProps {
  name: string;
}

export default function PokemonResult({ name }: PokemonResultProps) {
  const { data, loading, error } = useQuery<GetPokemonData, GetPokemonVars>(
    GET_POKEMON,
    {
      variables: { name },
      skip: !name,
    }
  );

  if (!name) {
    return (
      <div className="text-center text-gray-500 mt-12 text-lg">
        Enter a Pokémon name to search
      </div>
    );
  }

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-12">
        <p className="text-xl font-semibold">Error loading Pokémon</p>
        <p className="text-sm mt-2">{error.message}</p>
      </div>
    );
  }

  if (!data?.pokemon) {
    return <NotFound name={name} />;
  }

  return <PokemonCard pokemon={data.pokemon} />;
}

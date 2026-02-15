"use client";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { Pokemon } from "@/types/pokemon";
import AttackTable from "./AttackTable";
import { typeColor } from "@/lib/type-colors";

interface PokemonCardProps {
  pokemon: Pokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 flex flex-col sm:flex-row gap-6">
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={200}
              height={200}
              className="rounded-lg"
              priority
            />
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-3 mb-1">
              <h2 className="text-3xl font-bold text-gray-900">
                {pokemon.name}
              </h2>
              <span className="text-lg text-gray-500">#{pokemon.number}</span>
            </div>
            <p className="text-gray-600 mb-3">{pokemon.classification}</p>

            {/* Types */}
            <div className="flex gap-2 mb-4">
              {pokemon.types.map((type) => (
                <span
                  key={type}
                  className="px-3 py-1 rounded-full text-white text-sm font-medium"
                  style={{ backgroundColor: typeColor(type) }}
                >
                  {type}
                </span>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <div>
                <span className="text-gray-500">Max CP:</span>{" "}
                <span className="font-semibold text-gray-800">
                  {pokemon.maxCP}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Max HP:</span>{" "}
                <span className="font-semibold text-gray-800">
                  {pokemon.maxHP}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Weight:</span>{" "}
                <span className="font-semibold text-gray-800">
                  {pokemon.weight.minimum} - {pokemon.weight.maximum}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Height:</span>{" "}
                <span className="font-semibold text-gray-800">
                  {pokemon.height.minimum} - {pokemon.height.maximum}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Flee Rate:</span>{" "}
                <span className="font-semibold text-gray-800">
                  {(pokemon.fleeRate * 100).toFixed(0)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Resistant & Weaknesses */}
        <div className="px-6 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Resistant
            </h3>
            <div className="flex flex-wrap gap-1">
              {pokemon.resistant.map((type) => (
                <span
                  key={type}
                  className="px-2 py-0.5 rounded text-xs font-medium text-white"
                  style={{ backgroundColor: typeColor(type) }}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Weaknesses
            </h3>
            <div className="flex flex-wrap gap-1">
              {pokemon.weaknesses.map((type) => (
                <span
                  key={type}
                  className="px-2 py-0.5 rounded text-xs font-medium text-white"
                  style={{ backgroundColor: typeColor(type) }}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Attacks */}
        <div className="px-6 pb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Attacks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Fast Attacks
              </h4>
              <AttackTable attacks={pokemon.attacks.fast} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Special Attacks
              </h4>
              <AttackTable attacks={pokemon.attacks.special} />
            </div>
          </div>
        </div>

        {/* Evolutions */}
        {pokemon.evolutions && pokemon.evolutions.length > 0 && (
          <div className="px-6 pb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Evolutions
            </h3>
            {pokemon.evolutionRequirements && (
              <p className="text-sm text-gray-500 mb-3">
                Requires {pokemon.evolutionRequirements.amount}{" "}
                {pokemon.evolutionRequirements.name}
              </p>
            )}
            <div className="flex flex-wrap gap-4">
              {pokemon.evolutions.map((evo) => (
                <Link
                  key={evo.id}
                  href={`/pokemon/${encodeURIComponent(evo.name)}`}
                  className="flex flex-col items-center p-3 rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all bg-gray-50 hover:bg-blue-50 group"
                >
                  <Image
                    src={evo.image}
                    alt={evo.name}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <span className="mt-2 font-semibold text-gray-800 group-hover:text-blue-600">
                    {evo.name}
                  </span>
                  <span className="text-xs text-gray-500">#{evo.number}</span>
                  <div className="flex gap-1 mt-1">
                    {evo.types.map((type) => (
                      <span
                        key={type}
                        className="px-1.5 py-0.5 rounded text-xs text-white"
                        style={{ backgroundColor: typeColor(type) }}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(PokemonCard);

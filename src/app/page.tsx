import SearchInput from "@/components/SearchInput";

export default function HomePage() {
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
      <div className="text-center text-gray-500 mt-12 text-lg">
        Enter a Pokémon name to search
      </div>
    </main>
  );
}

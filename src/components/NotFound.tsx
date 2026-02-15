interface NotFoundProps {
  name: string;
}

export default function NotFound({ name }: NotFoundProps) {
  return (
    <div className="text-center mt-12 p-8 bg-gray-50 rounded-xl max-w-md mx-auto">
      <div className="text-6xl mb-4">?</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Pokémon Not Found
      </h2>
      <p className="text-gray-600">
        No Pokémon named &quot;<span className="font-semibold">{name}</span>
        &quot; was found.
      </p>
      <p className="text-gray-500 text-sm mt-2">
        Try searching for another name (e.g. Pikachu, Bulbasaur, Charmander)
      </p>
    </div>
  );
}

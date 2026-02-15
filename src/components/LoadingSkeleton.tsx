export default function LoadingSkeleton() {
  return (
    <div className="max-w-3xl mx-auto mt-8 animate-pulse">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-48 h-48 bg-gray-200 rounded-lg mx-auto sm:mx-0" />
          <div className="flex-1 space-y-3">
            <div className="h-8 bg-gray-200 rounded w-48" />
            <div className="h-4 bg-gray-200 rounded w-32" />
            <div className="h-4 bg-gray-200 rounded w-40" />
            <div className="flex gap-2 mt-2">
              <div className="h-6 bg-gray-200 rounded-full w-16" />
              <div className="h-6 bg-gray-200 rounded-full w-16" />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

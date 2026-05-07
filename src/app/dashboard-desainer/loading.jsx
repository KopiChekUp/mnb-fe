export default function DashboardDesainerLoading() {
  return (
    <div className="flex h-screen bg-[#F8F9FA] font-sans overflow-hidden">
      {/* Sidebar Skeleton */}
      <aside className="w-64 bg-white border-r border-gray-100 flex-shrink-0 p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gray-200 rounded-xl animate-pulse" />
          <div className="space-y-2">
            <div className="w-24 h-3 bg-gray-200 rounded animate-pulse" />
            <div className="w-16 h-2 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-full h-10 bg-gray-100 rounded-xl animate-pulse" />
          ))}
        </div>
      </aside>

      {/* Main Content Skeleton */}
      <main className="flex-1 p-8 space-y-6">
        {/* Header Skeleton */}
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <div className="w-72 h-6 bg-gray-200 rounded animate-pulse" />
            <div className="w-48 h-4 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="w-64 h-10 bg-gray-200 rounded-full animate-pulse" />
        </div>

        {/* Stat Cards Skeleton */}
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100">
              <div className="w-10 h-10 bg-gray-200 rounded-xl animate-pulse mb-4" />
              <div className="w-24 h-3 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="w-32 h-6 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Chart + Works Skeleton */}
        <div className="flex gap-6">
          <div className="flex-[2] bg-white p-6 rounded-3xl border border-gray-100 h-72 animate-pulse" />
          <div className="flex-[1] bg-white p-6 rounded-3xl border border-gray-100 h-72 animate-pulse" />
        </div>
      </main>
    </div>
  );
}

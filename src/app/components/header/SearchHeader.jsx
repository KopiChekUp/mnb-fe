"use client";

export default function SearchHeader({ title, subtitle, searchPlaceholder = "Cari pesanan..." }) {
  return (
    <header className="px-8 py-6 flex items-center justify-between flex-shrink-0">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900">{title}</h1>
        {subtitle && (
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm w-64">
          <span className="text-gray-400 mr-2 text-sm">🔍</span>
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="bg-transparent outline-none w-full text-sm text-gray-700"
          />
        </div>
        <button className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:bg-gray-50 transition">
          🔔
        </button>
      </div>
    </header>
  );
}

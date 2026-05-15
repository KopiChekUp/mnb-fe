// SearchHeader adalah Server Component — tidak butuh 'use client'
// Input di dalam komponen ini yang butuh interaktivitas sudah di-handle oleh browser natively

interface SearchHeaderProps {
  title: string;
  subtitle?: string;
  searchPlaceholder?: string;
}

export default function SearchHeader({
  title,
  subtitle,
  searchPlaceholder = 'Cari...',
}: SearchHeaderProps) {
  return (
    <header className="px-8 py-6 flex items-center justify-between flex-shrink-0 bg-white border-b border-gray-100">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-gray-50 rounded-full px-4 py-2.5 border border-gray-200 shadow-sm w-64 focus-within:border-yellow-400 focus-within:ring-1 focus-within:ring-yellow-100 transition-all">
          <span className="text-gray-400 mr-2 text-sm">🔍</span>
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="bg-transparent outline-none w-full text-sm text-gray-700"
          />
        </div>
        <button
          aria-label="Notifikasi"
          className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
        >
          🔔
        </button>
      </div>
    </header>
  );
}

"use client";

export default function DashboardDesainerError({ error, reset }) {
  return (
    <div className="flex h-screen bg-[#F8F9FA] items-center justify-center font-sans">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
          ⚠️
        </div>
        <h2 className="text-xl font-extrabold text-gray-900 mb-2">
          Terjadi Kesalahan
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          {error?.message || "Maaf, terjadi kesalahan saat memuat dashboard. Silakan coba lagi."}
        </p>
        <button
          onClick={() => reset()}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-xl transition shadow-md"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  );
}

"use client";

export default function RevenueChart() {
  return (
    <div className="flex-[2] bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-extrabold text-gray-900">
            Ikhtisar Pendapatan Bulanan
          </h3>
          <p className="text-[10px] text-gray-400 font-medium">
            Januari - Juni 2024
          </p>
        </div>
        <select className="text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg outline-none cursor-pointer">
          <option>6 Bulan Terakhir</option>
          <option>Tahun Ini</option>
        </select>
      </div>

      {/* Dummy Area Chart menggunakan CSS Gradient */}
      <div className="flex-1 relative min-h-[200px] flex items-end pt-10">
        <div
          className="absolute bottom-6 left-0 right-0 h-3/4 bg-gradient-to-t from-yellow-100/60 to-transparent"
          style={{
            clipPath:
              "polygon(0 80%, 20% 60%, 40% 70%, 60% 40%, 80% 50%, 100% 20%, 100% 100%, 0 100%)",
          }}
        ></div>

        {/* Label Bulan */}
        <div className="w-full flex justify-between text-[10px] font-bold text-gray-400 border-t border-gray-100 pt-3 relative z-10">
          <span>JAN</span>
          <span>FEB</span>
          <span>MAR</span>
          <span>APR</span>
          <span>MEI</span>
          <span>JUN</span>
        </div>
      </div>
    </div>
  );
}

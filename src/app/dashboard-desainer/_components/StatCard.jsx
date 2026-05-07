"use client";

export default function StatCard({ icon, iconBg, label, value, badge, badgeColor }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div
          className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center text-lg shadow-sm`}
        >
          {icon}
        </div>
        <span className={`text-xs font-extrabold ${badgeColor} px-2 py-1 rounded-md`}>
          {badge}
        </span>
      </div>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
        {label}
      </p>
      <h2 className="text-2xl font-black text-gray-900">{value}</h2>
    </div>
  );
}

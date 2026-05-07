import DesignerSidebar from "@/app/components/sidebar/DesignerSidebar";
import SearchHeader from "@/app/components/header/SearchHeader";
import StatCard from "./_components/StatCard";
import RevenueChart from "./_components/RevenueChart";
import PopularWorks from "./_components/PopularWorks";
import RecentOrders from "./_components/RecentOrders";
import { statistik, karyaPopuler, pesananTerbaru } from "./_data";

export const metadata = {
  title: "Dashboard Desainer — Match n Build",
  description:
    "Pantau performa desain, kelola pesanan, dan lihat statistik pendapatan Anda.",
};

export default function DashboardDesainer() {
  return (
    <div className="flex h-screen bg-[#F8F9FA] font-sans text-gray-800 overflow-hidden">
      {/* Sidebar */}
      <DesignerSidebar activePath="/dashboard-desainer" />

      {/* Konten Utama */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <SearchHeader
          title="Halo, Selamat Datang Kembali!"
          subtitle="Pantau performa desain dan pesanan Anda hari ini."
          searchPlaceholder="Cari pesanan..."
        />

        {/* Area Scrollable */}
        <div className="flex-1 overflow-y-auto px-8 pb-10">
          {/* 1. Kartu Statistik */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {statistik.map((stat) => (
              <StatCard
                key={stat.id}
                icon={stat.icon}
                iconBg={stat.iconBg}
                label={stat.label}
                value={stat.value}
                badge={stat.badge}
                badgeColor={stat.badgeColor}
              />
            ))}
          </div>

          {/* 2. Grafik & Karya Populer */}
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            <RevenueChart />
            <PopularWorks items={karyaPopuler} />
          </div>

          {/* 3. Tabel Pesanan Terbaru */}
          <RecentOrders orders={pesananTerbaru} />
        </div>
      </main>
    </div>
  );
}

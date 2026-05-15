import type { Metadata } from 'next';
import SearchHeader from '@/components/layout/SearchHeader';
import StatCard from './_components/StatCard';
import RevenueChart from './_components/RevenueChart';
import PopularWorks from './_components/PopularWorks';
import RecentOrders from './_components/RecentOrders';
import { statistik, karyaPopuler, pesananTerbaru } from './_data';

export const metadata: Metadata = {
  title: 'Dashboard Desainer — Match n Build',
  description: 'Pantau performa desain, kelola pesanan, dan lihat statistik pendapatan Anda.',
};

export default function DashboardDesainerPage() {
  return (
    <main className="flex-1 flex flex-col h-full overflow-hidden">
      <SearchHeader
        title="Halo, Selamat Datang Kembali!"
        subtitle="Pantau performa desain dan pesanan Anda hari ini."
        searchPlaceholder="Cari pesanan..."
      />

      <div className="flex-1 overflow-y-auto px-8 pb-10">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pt-6">
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

        {/* Chart + Popular Works */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          <RevenueChart />
          <PopularWorks items={karyaPopuler} />
        </div>

        {/* Recent Orders */}
        <RecentOrders orders={pesananTerbaru} />
      </div>
    </main>
  );
}

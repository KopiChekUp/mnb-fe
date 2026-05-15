import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/config/constants';
import type { Project, Notification } from '@/types';

export const metadata: Metadata = {
  title: 'Dashboard — Match n Build',
  description: 'Pantau proyek aktif dan temukan desainer terbaik untuk hunian impian Anda.',
};

// TODO: Ganti dengan API call ketika backend siap
const activeProjects: Project[] = [
  {
    id: 1,
    title: 'Renovasi Rumah Minimalis',
    designer: 'Aris Setiawan',
    progressLabel: 'Progres Desain',
    progress: 65,
    status: 'TAHAP 3',
    coverImage: '/renovasi-rumah-image.svg',
  },
  {
    id: 2,
    title: 'Pembangunan Kolam Renang',
    designer: 'Sarah Wijaya',
    progressLabel: 'Progres Lokasi',
    progress: 15,
    status: 'PERSIAPAN',
    coverImage: '/pool-image.svg',
  },
];

const notifications: Notification[] = [
  {
    id: 1,
    title: 'Pesan baru dari Aris S.',
    message: '"Halo Pak Budi, saya sudah mengirimkan revisi layout lantai 2..."',
    time: '5 menit yang lalu',
    icon: '/icon-pesan-terbaru.svg',
    iconBg: 'bg-blue-50',
    hoverColor: 'group-hover:text-blue-600',
  },
  {
    id: 2,
    title: 'Pembayaran Terverifikasi',
    message: "Pembayaran termin 1 untuk 'Backyard' sudah kami terima.",
    time: '2 jam yang lalu',
    icon: '/icon-pembayaran-verif.svg',
    iconBg: 'bg-green-50',
    hoverColor: 'group-hover:text-green-600',
  },
  {
    id: 3,
    title: 'Jadwal Survey',
    message: 'Survey lokasi oleh Sarah Wijaya dijadwalkan besok 10:00 WIB.',
    time: 'Kemarin',
    icon: '/icon-jadwal-survey.svg',
    iconBg: 'bg-yellow-50',
    hoverColor: 'group-hover:text-yellow-600',
  },
];

const statusColors: Record<string, string> = {
  'TAHAP 3': 'bg-orange-100 text-orange-600',
  PERSIAPAN: 'bg-green-100 text-green-600',
  REVISI: 'bg-blue-100 text-blue-600',
  SELESAI: 'bg-gray-100 text-gray-600',
};

const barColors: Record<string, string> = {
  'TAHAP 3': 'bg-yellow-500',
  PERSIAPAN: 'bg-green-500',
  REVISI: 'bg-blue-500',
  SELESAI: 'bg-gray-400',
};

export default function DashboardClientPage() {
  return (
    <div className="flex flex-1 overflow-hidden">
      {/* ─── Main Content ─── */}
      <section className="flex-1 overflow-y-auto p-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-black">Selamat Datang!</h1>
            <p className="text-gray-500 mt-2">Mari lanjutkan proyek impian Anda bersama para ahli terbaik kami.</p>
          </div>
          <Link
            href={ROUTES.EXPLORE}
            className="group flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-full font-bold shadow-sm hover:bg-yellow-500 hover:text-white hover:border-yellow-500 transition-all duration-300"
          >
            <span className="text-yellow-600 group-hover:text-white transition-colors">+</span>
            Proyek Baru
          </Link>
        </div>

        {/* Active Orders */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Image src="/pesanan-aktif-icon.svg" alt="" width={24} height={24} />
              Pesanan Aktif
            </h2>
            <Link href={ROUTES.MY_ORDERS} className="text-sm text-yellow-600 font-bold hover:underline">
              Lihat Semua
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeProjects.map((project) => (
              <Link
                key={project.id}
                href={ROUTES.MY_ORDERS}
                className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-center hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 bg-gray-200 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src={project.coverImage} alt={project.title} width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-sm text-gray-800 leading-tight truncate">{project.title}</h3>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap flex-shrink-0 ${statusColors[project.status] ?? 'bg-gray-100 text-gray-600'}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 truncate">Desainer: {project.designer}</p>
                  <div className="mt-3">
                    <div className="flex justify-between text-[10px] font-bold mb-1 text-gray-700">
                      <span>{project.progressLabel}</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div className={`h-1.5 rounded-full ${barColors[project.status] ?? 'bg-gray-400'}`} style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-12">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Image src="/rekomendasi-untukmu-icon.svg" alt="" width={20} height={20} />
              Rekomendasi Untukmu
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Studio Jenggala', spec: 'Spesialis Villa & Estate', rating: 4.9, tags: ['Arsitektur', 'Lansekap'], img: '/renovasi-rumah-image.svg' },
              { name: 'Line Space Design', spec: 'Minimalisme Modern', rating: 4.8, tags: ['Interior', 'Renovasi'], img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop' },
              { name: 'Kayu Arta Studio', spec: 'Custom Furnitur & Dekor', rating: 5.0, tags: ['Furniture', 'Interior'], img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
              { name: 'Urban Nest', spec: 'Apartemen Pintar', rating: 4.7, tags: ['Apartemen', 'Smart Home'], img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=400&fit=crop' },
            ].map((designer) => (
              <Link
                key={designer.name}
                href={ROUTES.DESIGNER_DETAIL}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 block group"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={designer.img} alt={designer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm flex items-center gap-1.5">
                    <Image src="/icon-bintang-full.svg" alt="Rating" width={12} height={12} />
                    {designer.rating}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-extrabold text-gray-900 text-lg">{designer.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{designer.spec}</p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {designer.tags.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 bg-gray-50 text-gray-600 text-xs font-bold rounded-full border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Right Panel ─── */}
      <aside className="w-80 bg-white border-l border-gray-100 p-8 flex flex-col flex-shrink-0 overflow-y-auto">
        {/* Budget Card */}
        <div className="bg-[#FFFDF7] border border-yellow-100 p-5 rounded-2xl mb-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-bold text-gray-700">Estimasi Anggaran Proyek</h3>
            <Image src="/icon-uang.svg" alt="" width={20} height={20} />
          </div>
          <p className="text-2xl font-extrabold text-black mb-1">Rp 450.000.000</p>
          <p className="text-[10px] text-gray-400">*Total dari semua pesanan aktif</p>
        </div>

        {/* Notifications */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">Notifikasi Terkini</h3>
            <button className="text-xs text-yellow-600 font-bold hover:underline">Tandai Dibaca</button>
          </div>
          <div className="flex flex-col gap-6">
            {notifications.map((notif) => (
              <div key={notif.id} className="flex gap-4 items-start cursor-pointer group">
                <div className={`w-10 h-10 ${notif.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <Image src={notif.icon} alt="" width={20} height={20} />
                </div>
                <div>
                  <h4 className={`text-sm font-bold text-gray-800 ${notif.hoverColor} transition-colors`}>{notif.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{notif.message}</p>
                  <p className="text-[10px] text-gray-400 mt-2">{notif.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

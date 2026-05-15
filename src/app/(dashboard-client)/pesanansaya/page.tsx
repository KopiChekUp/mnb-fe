import type { Metadata } from 'next';
import Image from 'next/image';
import type { Project } from '@/types';

export const metadata: Metadata = {
  title: 'Pesanan Saya — Match n Build',
  description: 'Pantau progres semua proyek desain Anda bersama Match n Build.',
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Renovasi Rumah Minimalis',
    designer: 'Aris Setiawan',
    progressLabel: 'Progres Desain',
    progress: 65,
    status: 'TAHAP 3',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=200&h=200&fit=crop',
  },
  {
    id: 2,
    title: 'Pembangunan Kolam Renang',
    designer: 'Sarah Wijaya',
    progressLabel: 'Progres Lokasi',
    progress: 15,
    status: 'PERSIAPAN',
    coverImage: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=200&h=200&fit=crop',
  },
  {
    id: 3,
    title: 'Desain Interior Dapur Utama',
    designer: 'Budi Santoso',
    progressLabel: 'Revisi 3D Render',
    progress: 80,
    status: 'REVISI',
    coverImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=200&h=200&fit=crop',
  },
];

const statusConfig: Record<string, { badge: string; bar: string }> = {
  'TAHAP 3': { badge: 'bg-orange-100 text-orange-600', bar: 'bg-yellow-500' },
  PERSIAPAN: { badge: 'bg-green-100 text-green-600', bar: 'bg-green-500' },
  REVISI: { badge: 'bg-blue-100 text-blue-600', bar: 'bg-blue-500' },
  SELESAI: { badge: 'bg-gray-100 text-gray-600', bar: 'bg-gray-400' },
};

export default function PesananSayaPage() {
  return (
    <main className="flex-1 flex flex-col h-full overflow-hidden bg-white">
      <header className="px-10 py-6 flex items-center justify-between flex-shrink-0 border-b border-gray-100">
        <h1 className="text-2xl font-extrabold text-black">Pesanan Saya</h1>
        <div className="flex items-center gap-4">
          <button aria-label="Notifikasi" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition">
            <Image src="/icon-lonceng.svg" alt="Notifikasi" width={20} height={20} />
          </button>
          <button aria-label="Pengaturan" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition">
            <Image src="/settings-icon.png" alt="Pengaturan" width={20} height={20} />
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-10">
        <div className="max-w-4xl mx-auto space-y-6">
          {projects.map((project) => {
            const config = statusConfig[project.status] ?? { badge: 'bg-gray-100 text-gray-600', bar: 'bg-gray-400' };
            return (
              <div
                key={project.id}
                className="border border-gray-200 rounded-3xl p-5 flex items-center gap-6 hover:shadow-md transition-shadow bg-white"
              >
                <div className="w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100">
                  
                  <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-1">
                    <h2 className="text-lg font-extrabold text-gray-900">{project.title}</h2>
                    <span className={`text-[10px] font-extrabold px-3 py-1 rounded-md ${config.badge}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-5">Desainer: {project.designer}</p>

                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-xs font-bold text-gray-800">{project.progressLabel}</span>
                      <span className="text-xs font-extrabold text-gray-900">{project.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${config.bar}`} style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

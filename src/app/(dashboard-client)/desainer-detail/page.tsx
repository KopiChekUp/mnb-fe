import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Detail Desainer — Match n Build',
  description: 'Lihat portofolio, ulasan, dan paket harga desainer pilihan Anda.',
};

export default function DesainerDetailPage() {
  return (
    <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
      {/* Hero Banner */}
      <div className="relative h-64 lg:h-80 w-full flex-shrink-0 bg-gray-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=400&fit=crop"
          alt="Banner Desainer"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-end gap-6">
            <div className="w-24 h-24 rounded-2xl border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
                alt="Budi Santoso"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white mb-1">
              <h1 className="text-3xl font-extrabold flex items-center gap-2">
                Budi Santoso{' '}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icon-ceklis.svg" alt="Verified" className="w-5 h-5" />
              </h1>
              <p className="text-sm opacity-90 mt-1">Desainer Interior Senior • 8+ Tahun Pengalaman</p>
              <div className="flex items-center gap-4 mt-2 text-xs font-medium opacity-80">
                <span>📍 Jakarta, Indonesia</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                <span>⭐ 4.9 (124 Ulasan)</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mb-2">
            <button className="px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-bold rounded-full border border-white/30 transition">
              Bagikan
            </button>
            <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-bold rounded-full transition shadow-md">
              Ikuti
            </button>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-8 flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto w-full">
        {/* Left Column */}
        <div className="flex-1 space-y-12">
          {/* About */}
          <section>
            <h2 className="text-xl font-extrabold mb-4 flex items-center gap-2">
              <div className="w-4 h-1 bg-yellow-400 rounded-full" /> Tentang Desainer
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Halo! Saya Budi, spesialis desain interior minimalis dan modern. Dengan pengalaman lebih dari 8
              tahun, saya telah membantu ratusan klien mewujudkan hunian impian mereka melalui pendekatan
              fungsional dan estetika yang seimbang.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Minimalist', 'Scandinavian', 'Japandi', 'Modern Classic'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-50 border border-gray-100 text-gray-500 text-xs font-bold rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Portfolio */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-extrabold flex items-center gap-2">
                <div className="w-4 h-1 bg-yellow-400 rounded-full" /> Portofolio
              </h2>
              <a href="#" className="text-sm font-bold text-yellow-600 hover:underline">Lihat Semua</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=600&fit=crop" className="w-full rounded-2xl object-cover h-64" alt="Karya 1" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop" className="w-full rounded-2xl object-cover h-40" alt="Karya 2" />
              </div>
              <div className="space-y-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop" className="w-full rounded-2xl object-cover h-32" alt="Karya 3" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop" className="w-full rounded-2xl object-cover h-72" alt="Karya 4" />
              </div>
            </div>
          </section>
        </div>

        {/* Right Column — Pricing */}
        <aside className="w-full lg:w-96">
          <div className="sticky top-8 space-y-6">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl shadow-gray-100/50">
              <div className="flex border-b border-gray-100 mb-6">
                {['Basic', 'Standard', 'Premium'].map((pkg, i) => (
                  <button
                    key={pkg}
                    className={`flex-1 pb-3 text-sm font-${i === 0 ? 'extrabold' : 'bold'} ${i === 0 ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    {pkg}
                  </button>
                ))}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">Rp 2.500.000</h3>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                Layanan desain dasar untuk 1 ruangan (maks. 20m2). Termasuk moodboard dan layout 2D.
              </p>
              <ul className="space-y-3 mb-8">
                {['Konsultasi 60 Menit', 'Layout Plan 2D', 'Moodboard Material'].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icon-pembayaran-verif.svg" alt="✓" className="w-5 h-5" />
                    {feat}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-sm text-gray-400 font-medium line-through">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icon-x.svg" alt="✗" className="w-5 h-5 opacity-40" />
                  3D Rendering (2 View)
                </li>
              </ul>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3.5 rounded-xl mb-3 shadow-md transition">
                Pilih Paket
              </button>
              <button className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-800 font-bold py-3.5 rounded-xl transition flex justify-center items-center gap-2">
                Chat Desainer
              </button>
              <p className="text-center text-[10px] text-gray-400 mt-4 font-medium">Waktu pengerjaan: 5-7 hari kerja</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

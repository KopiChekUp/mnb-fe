"use client";
import Link from 'next/link';

export default function DashboardDesainer() {
  // DATA DUMMY 1: Karya Populer
  const karyaPopuler = [
    {
      id: 1,
      judul: "Modern Minimalist Villa",
      kategori: "Kategori: Arsitektur",
      views: "1.2k",
      foto: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      judul: "Scandinavian Living Room",
      kategori: "Kategori: Interior",
      views: "856",
      foto: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop"
    }
  ];

  // DATA DUMMY 2: Pesanan Terbaru
  const pesananTerbaru = [
    { id: 1, inisial: "RP", nama: "Rizky Perdana", lokasi: "Jakarta Selatan", proyek: "Renovasi Fasad Rumah", budget: "Rp 8.500.000", status: "MENUNGGU" },
    { id: 2, inisial: "SM", nama: "Siti Maemunah", lokasi: "Bandung", proyek: "Interior Kedai Kopi", budget: "Rp 15.000.000", status: "MENUNGGU" },
    { id: 3, inisial: "AH", nama: "Agus Hidayat", lokasi: "Surabaya", proyek: "Kitchen Set Apartemen", budget: "Rp 12.200.000", status: "MENUNGGU" },
  ];

  return (
    // Wadah Utama
    <div className="flex h-screen bg-[#F8F9FA] font-sans text-gray-800 overflow-hidden">
      
      {/* --- SIDEBAR KIRI --- */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between flex-shrink-0 z-20">
        <div>
          {/* Logo */}
          <div className="p-6 flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-yellow-600 italic">MB</span>
            <div>
              <h1 className="font-extrabold leading-none text-black text-sm">Match n Build</h1>
              <p className="text-[10px] text-gray-500 mt-0.5 font-medium">Designer Pro</p>
            </div>
          </div>

          {/* Menu Navigasi */}
          <nav className="flex flex-col gap-1 px-4">
            <Link href="/dashboard-desainer" className="flex items-center gap-3 bg-yellow-400 text-gray-900 font-bold px-4 py-3 rounded-xl shadow-sm transition">
              <span>🎛️</span> Dashboard
            </Link>
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition">
              <span>💼</span> Portofolio
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition">
              <span>📄</span> Pesanan
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition">
              <span>💬</span> Chat
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition">
              <span>👤</span> Profil
            </a>
          </nav>
        </div>

        {/* Profil Bawah */}
        <div className="p-6 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" alt="Andi Arsitek" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-bold text-gray-800 leading-tight">Andi Arsitek</p>
              <p className="text-[10px] text-gray-500 font-medium">Premium Member</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">⚙️</button>
        </div>
      </aside>

      {/* --- KONTEN UTAMA (KANAN) --- */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header Atas */}
        <header className="px-8 py-6 flex items-center justify-between flex-shrink-0">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Halo, Selamat Datang Kembali!</h1>
            <p className="text-sm text-gray-500 mt-1">Pantau performa desain dan pesanan Anda hari ini.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm w-64">
              <span className="text-gray-400 mr-2 text-sm">🔍</span>
              <input type="text" placeholder="Cari pesanan..." className="bg-transparent outline-none w-full text-sm text-gray-700" />
            </div>
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:bg-gray-50 transition">
              🔔
            </button>
          </div>
        </header>

        {/* Area Scrollable Konten */}
        <div className="flex-1 overflow-y-auto px-8 pb-10">
          
          {/* 1. KARTU STATISTIK (Grid 3 Kolom) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center text-lg shadow-sm">💵</div>
                <span className="text-xs font-extrabold text-green-600 bg-green-50 px-2 py-1 rounded-md">+12.5%</span>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Pendapatan</p>
              <h2 className="text-2xl font-black text-gray-900">Rp 45.250.000</h2>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center text-lg shadow-sm">📋</div>
                <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">Aktif</span>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Pesanan Aktif</p>
              <h2 className="text-2xl font-black text-gray-900">12 Pesanan</h2>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center text-lg shadow-sm">⭐</div>
                <span className="text-xs font-bold text-gray-400">Dari 42 ulasan</span>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Ulasan Baru</p>
              <h2 className="text-2xl font-black text-gray-900">4.8/5.0</h2>
            </div>
          </div>

          {/* 2. AREA GRAFIK & KARYA POPULER (Grid 2/3 dan 1/3) */}
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            
            {/* Kiri: Grafik Pendapatan */}
            <div className="flex-[2] bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-extrabold text-gray-900">Ikhtisar Pendapatan Bulanan</h3>
                  <p className="text-[10px] text-gray-400 font-medium">Januari - Juni 2024</p>
                </div>
                <select className="text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg outline-none cursor-pointer">
                  <option>6 Bulan Terakhir</option>
                  <option>Tahun Ini</option>
                </select>
              </div>
              
              {/* Dummy Area Chart menggunakan CSS Gradient & SVG Curve */}
              <div className="flex-1 relative min-h-[200px] flex items-end pt-10">
                 {/* Visualisasi Gunung (Chart) */}
                 <div className="absolute bottom-6 left-0 right-0 h-3/4 bg-gradient-to-t from-yellow-100/60 to-transparent" style={{ clipPath: "polygon(0 80%, 20% 60%, 40% 70%, 60% 40%, 80% 50%, 100% 20%, 100% 100%, 0 100%)" }}></div>
                 
                 {/* Label Bulan */}
                 <div className="w-full flex justify-between text-[10px] font-bold text-gray-400 border-t border-gray-100 pt-3 relative z-10">
                   <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MEI</span><span>JUN</span>
                 </div>
              </div>
            </div>

            {/* Kanan: Karya Populer */}
            <div className="flex-[1] bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-extrabold text-gray-900 mb-4">Karya Populer</h3>
              <div className="space-y-4">
                {karyaPopuler.map((karya) => (
                  <div key={karya.id} className="group cursor-pointer">
                    <div className="relative h-32 rounded-2xl overflow-hidden mb-3">
                      <img src={karya.foto} alt={karya.judul} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                        👁️ {karya.views}
                      </div>
                    </div>
                    <h4 className="font-extrabold text-gray-900 text-sm">{karya.judul}</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5">{karya.kategori}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* 3. TABEL PESANAN TERBARU */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-extrabold text-gray-900">Pesanan Terbaru</h3>
              <a href="#" className="text-sm font-bold text-yellow-600 hover:underline">Lihat Semua</a>
            </div>
            
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    <th className="pb-3 pl-2">KLIEN</th>
                    <th className="pb-3">JENIS PROYEK</th>
                    <th className="pb-3">BUDGET</th>
                    <th className="pb-3">STATUS</th>
                    <th className="pb-3">AKSI</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {pesananTerbaru.map((pesanan) => (
                    <tr key={pesanan.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-4 pl-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 flex-shrink-0">
                            {pesanan.inisial}
                          </div>
                          <div>
                            <p className="font-extrabold text-gray-900">{pesanan.nama}</p>
                            <p className="text-[10px] text-gray-500">{pesanan.lokasi}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 font-medium text-gray-700">{pesanan.proyek}</td>
                      <td className="py-4 font-extrabold text-gray-900">{pesanan.budget}</td>
                      <td className="py-4">
                        <span className="text-[10px] font-extrabold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-md border border-orange-100">
                          {pesanan.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex gap-2">
                          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full transition shadow-sm">Terima</button>
                          <button className="bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 text-xs font-bold px-4 py-1.5 rounded-full transition shadow-sm">Tolak</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
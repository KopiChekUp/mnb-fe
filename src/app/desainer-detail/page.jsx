import Link from 'next/link';

export default function DesainerDetail() {
  return (
    // Wadah Utama
    <div className="flex min-h-screen bg-white font-sans text-gray-800">
      
      {/* --- PINTU KIRI: SIDEBAR --- */}
      <aside className="w-64 border-r border-gray-100 flex flex-col justify-between flex-shrink-0 sticky top-0 h-screen overflow-y-auto">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
          <img 
            src="/logo.png" 
            alt="Logo Match and Build" 
            className="w-12 h-12 object-contain rounded-md"
          />
          <div>
            <h1 className="font-extrabold leading-none text-black">Match n Build</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">MnB Client Portal</p>
          </div>
        </div>

          {/* Menu */}
          <nav className="flex flex-col gap-1 px-4">
            <Link href="/" className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition">
              <span><img src="/dashboard-icon.png" alt="Dashboard" className="w-5 h-5" /></span> Beranda
            </Link>
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition">
              <span><img src="/pesanan-icon.png" alt="Proyek Saya" className="w-5 h-5" /></span> Proyek Saya
            </a>
            {/* Menu Aktif */}
            <a href="#" className="flex items-center gap-3 bg-yellow-50 text-yellow-700 font-bold px-4 py-3 rounded-xl border border-yellow-100 transition">
              <span><img src="/icon-desainer.svg" alt="Desainer" className="w-5 h-5" /></span> Desainer
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition">
              <span><img src="/chat-icon.png" alt="Pesan" className="w-5 h-5" /></span> Pesan Saya
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition">
              <span><img src="/icon-setting.svg" alt="Pengaturan" className="w-5 h-5" /></span> Pengaturan
            </a>
          </nav>
        </div>

        {/* Profil Bawah */}
        <div className="p-6 border-t border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-200 rounded-full"></div>
          <div>
            <p className="text-sm font-bold text-gray-800 leading-tight">Andi Pratama</p>
            <p className="text-[10px] text-gray-500">Free Account</p>
          </div>
        </div>
      </aside>

      {/* --- BAGIAN KANAN: KONTEN UTAMA --- */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* 1. HERO BANNER (Bagian Atas) */}
        <div className="relative h-64 lg:h-80 w-full flex-shrink-0 bg-gray-900">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=400&fit=crop" alt="Banner" className="w-full h-full object-cover opacity-60" />
          
          {/* Info Desainer Melayang di Atas Gambar */}
          <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-end gap-6">
              {/* Foto Profil Desainer */}
              <div className="w-24 h-24 rounded-2xl border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" alt="Budi Santoso" className="w-full h-full object-cover" />
              </div>
              <div className="text-white mb-1">
                <h1 className="text-3xl font-extrabold flex items-center gap-2">Budi Santoso <span className="text-yellow-400 text-lg">
                    <img src="/icon-ceklis.svg" alt="icon-ceklis" className="w-5 h-5" /></span></h1>
                <p className="text-sm opacity-90 mt-1">Desainer Interior Senior  •  8+ Tahun Pengalaman</p>
                <div className="flex items-center gap-4 mt-2 text-xs font-medium opacity-80">
                    <span className="flex items-center gap-1.5">
                        <img src="/icon-lokasi.svg" alt="lokasi" className="w-4 h-4" />
                        <span>Jakarta, Indonesia</span>
                    </span> 
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  
                    <span className="flex items-center gap-1.5">
                        <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                    <span>4.9 (124 Ulasan)</span>
                </span>
                </div>
              </div>
            </div>
            
            {/* Tombol Bagikan & Ikuti */}
            <div className="flex gap-3 mb-2">
              <button className="px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-bold rounded-full border border-white/30 transition">
                <span className="flex items-center gap-2">
                  <img src="/icon-share.svg" alt="bagikan" className="w-4 h-4" /> Bagikan
                </span>
              </button>
              <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-bold rounded-full transition shadow-md">
                Ikuti
              </button>
            </div>
          </div>
        </div>

        {/* 2. BODY KONTEN (Dibagi 2 Kolom) */}
        <div className="p-8 flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto w-full">
          
          {/* KOLOM KIRI (Tentang, Portofolio, Ulasan) */}
          <div className="flex-1 space-y-12">
            
            {/* Tentang Desainer */}
            <section>
              <h2 className="text-xl font-extrabold mb-4 flex items-center gap-2">
                <div className="w-4 h-1 bg-yellow-400 rounded-full"></div> Tentang Desainer
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Halo! Saya Budi, spesialis desain interior minimalis dan modern. Dengan pengalaman lebih dari 8 tahun, saya telah membantu ratusan klien mewujudkan hunian impian mereka melalui pendekatan fungsional dan estetika yang seimbang. Saya percaya bahwa setiap ruang memiliki potensi untuk menceritakan kisah pemiliknya.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Minimalist', 'Scandinavian', 'Japandi', 'Modern Classic'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-gray-50 border border-gray-100 text-gray-500 text-xs font-bold rounded-full">{tag}</span>
                ))}
              </div>
            </section>

            {/* Portofolio (Grid Masonry Buatan) */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-extrabold flex items-center gap-2">
                  <div className="w-4 h-1 bg-yellow-400 rounded-full"></div> Portofolio
                </h2>
                <a href="#" className="text-sm font-bold text-yellow-600 hover:underline">Lihat Semua</a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=600&fit=crop" className="w-full rounded-2xl object-cover h-64" alt="Karya 1" />
                  <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop" className="w-full rounded-2xl object-cover h-40" alt="Karya 2" />
                </div>
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop" className="w-full rounded-2xl object-cover h-32" alt="Karya 3" />
                  <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop" className="w-full rounded-2xl object-cover h-72" alt="Karya 4" />
                </div>
              </div>
            </section>

            {/* Ulasan & Rating */}
            <section>
              <h2 className="text-xl font-extrabold mb-6 flex items-center gap-2">
                <div className="w-4 h-1 bg-yellow-400 rounded-full"></div> Ulasan & Rating
              </h2>
              
              {/* Ringkasan Rating */}
              <div className="flex items-center gap-8 mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="text-center">
                  <h3 className="text-5xl font-black text-gray-900">4.9</h3>
                  <div className="text-yellow-400 text-lg my-1">
                    <span className="flex items-center gap-3">
                      <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                      <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                      <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                      <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                      <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-500">Berdasarkan 124 ulasan klien</p>
                </div>
                <div className="flex-1 space-y-2 text-xs font-bold text-gray-500">
                 <div className="flex-1 space-y-2 text-xs font-bold text-gray-500">
                  
                  {/* Baris Rating 5 */}
                  <div className="flex items-center gap-3">
                    <span className="w-2 text-center">5</span>
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-[90%] h-full bg-yellow-400 rounded-full"></div>
                    </div>
                    <span className="w-7 text-right">90%</span>
                  </div>

                  {/* Baris Rating 4 */}
                  <div className="flex items-center gap-3">
                    <span className="w-2 text-center">4</span>
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-[8%] h-full bg-yellow-400 rounded-full"></div>
                    </div>
                    <span className="w-7 text-right">8%</span>
                  </div>

                  {/* Baris Rating 3 */}
                  <div className="flex items-center gap-3">
                    <span className="w-2 text-center">3</span>
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-[2%] h-full bg-yellow-400 rounded-full"></div>
                    </div>
                    <span className="w-7 text-right">2%</span>
                  </div>

                  {/* Baris Rating 2 */}
                  <div className="flex items-center gap-3">
                    <span className="w-2 text-center">2</span>
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-[0%] h-full bg-yellow-400 rounded-full"></div>
                    </div>
                    <span className="w-7 text-right">0%</span>
                  </div>

                  {/* Baris Rating 1 */}
                  <div className="flex items-center gap-3">
                    <span className="w-2 text-center">1</span>
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-[0%] h-full bg-yellow-400 rounded-full"></div>
                    </div>
                    <span className="w-7 text-right">0%</span>
                  </div>

                </div>
                </div>
              </div>

              {/* Kartu Ulasan */}
              <div className="space-y-4">
                {/* Ulasan 1 */}
                <div className="p-5 border border-gray-100 rounded-2xl shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500">RC</div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-800">Rina Cahyani</h4>
                        <p className="text-[10px] text-gray-400">2 hari yang lalu</p>
                      </div>
                    </div>
                    <div className="text-yellow-400 text-xs">
                        <span className="flex items-center gap-3">
                        <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                        <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                        <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                        <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                        <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                        </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Sangat puas dengan hasil desain Pak Budi. Detailnya sangat diperhatikan dan komunikasinya sangat lancar selama pengerjaan proyek renovasi apartemen saya.</p>
                </div>
                {/* Ulasan 2 */}
                 <div className="p-5 border border-gray-100 rounded-2xl shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500">AS</div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-800">Ahmad Sobari</h4>
                        <p className="text-[10px] text-gray-400">1 minggu yang lalu</p>
                      </div>
                    </div>
                    <div className="text-yellow-400 text-xs">
                        <span className="flex items-center gap-3">
                        <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                        <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                        <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                        <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                        <img src="/icon-bintang-full.svg" alt="Rating" className="w-4 h-4" />
                        </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Desainnya keren banget, sesuai ekspektasi. Hanya saja ada sedikit keterlambatan di revisi terakhir, tapi overall recommended!</p>
                </div>
              </div>
            </section>
          </div>


          {/* KOLOM KANAN (Kotak Harga Sticky) */}
          <aside className="w-full lg:w-96">
            <div className="sticky top-8 space-y-6">
              
              {/* KOTAK PAKET HARGA */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl shadow-gray-100/50">
                {/* Tabs Tipe Paket */}
                <div className="flex border-b border-gray-100 mb-6">
                  <button className="flex-1 pb-3 text-sm font-extrabold text-black border-b-2 border-black">Basic</button>
                  <button className="flex-1 pb-3 text-sm font-bold text-gray-400 hover:text-gray-600">Standard</button>
                  <button className="flex-1 pb-3 text-sm font-bold text-gray-400 hover:text-gray-600">Premium</button>
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-2">Rp 2.500.000</h3>
                <p className="text-xs text-gray-500 mb-6 leading-relaxed">Layanan desain dasar untuk 1 ruangan (maks. 20m2). Termasuk moodboard dan layout 2D.</p>
                
                {/* Fitur (Checklist) */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <span className="text-green-500"><img src ="/icon-pembayaran-verif.svg" alt="Pembayaran-terverifikasi" className="w-5 h-5" /></span> Konsultasi 60 Menit
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <span className="text-green-500"><img src ="/icon-pembayaran-verif.svg" alt="Pembayaran-terverifikasi" className="w-5 h-5" /></span> Layout Plan 2D
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <span className="text-green-500"><img src ="/icon-pembayaran-verif.svg" alt="Pembayaran-terverifikasi" className="w-5 h-5" /></span> Moodboard Material
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400 font-medium line-through">
                    <span className="text-gray-300"><img src ="/icon-x.svg" alt="icon-x" className="w-5 h-5" /></span> 3D Rendering (2 View)
                  </li>
                </ul>

                {/* Tombol Aksi */}
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3.5 rounded-xl mb-3 shadow-md transition">
                  Pilih Paket
                </button>
                <button className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-800 font-bold py-3.5 rounded-xl transition flex justify-center items-center gap-2">
                  <span><img src ="/chat-icon.png" alt="pesan" className="w4 h-5" /></span> Chat Desainer
                </button>
                <p className="text-center text-[10px] text-gray-400 mt-4 font-medium">Waktu pengerjaan: 5-7 hari kerja</p>
              </div>

              {/* KOTAK MENGAPA PILIH */}
              <div className="bg-[#FFFDF7] border border-yellow-100 rounded-3xl p-6">
                <h3 className="text-sm font-extrabold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-yellow-500"><img src ="/icon-informasi.svg" alt="informasi" className="w-5 h-5" /></span> Mengapa pilih Budi?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-yellow-600 text-lg"><img src ="/icon-petir.svg" alt="respon-cepat" className="w-5 h-5" /></span>
                    <div>
                      <h4 className="text-xs font-bold text-gray-800">Respon Cepat</h4>
                      <p className="text-[10px] text-gray-500">Rata-rata membalas dalam 1 jam</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-yellow-600 text-lg"><img src ="/icon-waktu.svg" alt="tepat-waktu" className="w-5 h-5" /></span>
                    <div>
                      <h4 className="text-xs font-bold text-gray-800">Tepat Waktu</h4>
                      <p className="text-[10px] text-gray-500">98% Proyek selesai sesuai deadline</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-yellow-600 text-lg"><img src ="/icon-custom-design.svg" alt="custom-design" className="w-5 h-5" /></span>
                    <div>
                      <h4 className="text-xs font-bold text-gray-800">Custom Design</h4>
                      <p className="text-[10px] text-gray-500">Desain eksklusif hanya untuk Anda</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}

"use client"; 
import Link from "next/link";
import { useState } from "react"; 
export default function explore() {
    const [budget, setBudget] = useState(1);
    const minBudget = 1;
  const maxBudget = 500;
  const percentage = ((budget - minBudget) / (maxBudget - minBudget)) * 100;
  return (
    <main className="flex h-screen bg-gray-50 text-gray-800 font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col px-6 py-8">
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
        <nav className="flex flex-col gap-2">
          {/* Menu aktif */}
          <a href="./" className="flex items-center gap-3 bg-yellow-50 text-yellow-500 font-bold px-4 py-3 rounded-xl border border-yellow-100">
            <img src="/dashboard-icon-yellow.png" alt="Dashboard" className="w-5 h-5" /> Beranda
          </a>
          
          {/* Menu tidak aktif */}
          <a href="/pesanansaya" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-4 py-3 rounded-xl transition">
            <img src="/pesanan-icon.png" alt="Proyek Saya" className="w-5 h-5" /> Proyek
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-4 py-3 rounded-xl transition">
            <img src="/chat-icon.png" alt="Chat" className="w-5 h-5" /> Pesan 
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-4 py-3 rounded-xl transition">
            <img src="/rekomendasi-icon.png" alt="Rekomendasi" className="w-5 h-5" /> Rekomendasi
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-4 py-3 rounded-xl transition">
            <img src="/profile-icon.svg" alt="Profil" className="w-5 h-5" /> Profil
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-4 py-3 rounded-xl transition">
            <img src="/settings-icon.png" alt="Pengaturan" className="w-5 h-5" /> Pengaturan
          </a>
        </nav>
      </aside>



      {/* Bagian Kanan */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* HEADER ATAS */}
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between flex-shrink-0 z-10">
          <div className="flex-1 max-w-3xl flex items-center bg-gray-50 rounded-full px-5 py-2.5 border border-gray-200 focus-within:border-yellow-500 focus-within:ring-2 focus-within:ring-yellow-100 transition-all">
            <span className="text-gray-400 mr-3"><img src="/icon-search.svg" alt="Search" className="w-5 h-5" /></span>
            <input 
              type="text" 
              placeholder="Cari desainer interior, arsitek, atau gaya (Minimalis, Japandi...)" 
              className="bg-transparent outline-none w-full text-sm text-gray-700"
            />
          </div>
          <div className="flex items-center gap-4 ml-6">
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"><img src="/icon-notif.svg" alt="Chat" className="w-5 h-5" /></button>
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"><img src="/icon-setting.svg" alt="Settings" className="w-5 h-5" /></button>
          </div>
        </header>

        {/* Filter & Hasil */}
        <div className="flex-1 overflow-hidden flex">
          
          {/* filter */}
          <aside className="w-72 bg-white border-r border-gray-100 p-6 overflow-y-auto flex-shrink-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-extrabold text-lg text-black">Filter</h2>
              <button className="text-xs text-yellow-600 font-bold hover:underline">Reset</button>
            </div>

            {/* Gaya Desain */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-800 mb-3">Gaya Desain</h3>
              <div className="grid grid-cols-2 gap-2">
                
                {/* Opsi Modern */}
                <label className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all border border-gray-200 bg-white hover:bg-gray-50 has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-300">    
                  <input type="radio" name="gaya" value="modern" defaultChecked className="w-4 h-4 accent-yellow-500" />
                  <span className="text-xs font-bold text-gray-800">Modern</span>
                </label>

                {/* Opsi Minimalis */}
                <label className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all border border-gray-200 bg-white hover:bg-gray-50 has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-300">
                  <input type="radio" name="gaya" value="minimalis" className="w-4 h-4 accent-yellow-500" />
                  <span className="text-xs font-bold text-gray-800">Minimalis</span>
                </label>

                {/* Opsi Japandi */}
                <label className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all border border-gray-200 bg-white hover:bg-gray-50 has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-300">
                  <input type="radio" name="gaya" value="japandi" className="w-4 h-4 accent-yellow-500" />
                  <span className="text-xs font-bold text-gray-800">Japandi</span>
                </label>

                {/* Opsi Klasik */}
                <label className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all border border-gray-200 bg-white hover:bg-gray-50 has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-300">
                  <input type="radio" name="gaya" value="klasik" className="w-4 h-4 accent-yellow-500" />
                  <span className="text-xs font-bold text-gray-800">Klasik</span>
                </label>

              </div>
            </div>
            {/* Anggaran */}
            {/* Filter: Anggaran */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-800 mb-3">Anggaran (IDR)</h3>
              
              {/* Tampilan angka anggaran yang dipilih */}
              <div className="text-yellow-600 font-extrabold text-sm mb-3">
                Hingga Rp {budget} Juta
              </div>

              {/* Slider */}
              <input 
                type="range" 
                min={minBudget} 
                max={maxBudget} 
                value={budget} 
                onChange={(e) => setBudget(e.target.value)}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-black transition-all"
                style={{
                  background: `linear-gradient(to right, #EAB308 ${percentage}%, #E5E7EB ${percentage}%)`
                }}
              />
              
              <div className="flex justify-between text-[10px] text-gray-400 font-bold mt-2">
                <span>Rp 1 Jt</span>
                <span>Rp 500 Jt+</span>
              </div>
            </div>
            {/* Filter: Lokasi */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-800 mb-3">Lokasi</h3>
              <div className="relative">

                <select className="w-full bg-gray-50 border border-transparent text-gray-700 py-3 px-5 rounded-2xl text-sm font-medium appearance-none cursor-pointer hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-100 focus:border-yellow-400 shadow-sm">
                  <option>Semua Kota</option>
                  <option>Jakarta</option>
                  <option>Surabaya</option>
                  <option>Bali</option>
                  <option>Bandung</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Rating Minimal */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-800 mb-3">Rating Minimal</h3>
              <div className="grid grid-cols-2 gap-3">
                
                {/* Tombol 4.0+ */}
                <label className="flex items-center justify-center bg-[#FCFCFC] border border-gray-100 py-3 rounded-2xl cursor-pointer hover:bg-gray-50 transition-all has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-300 has-[:checked]:text-yellow-700 text-gray-600 shadow-sm">
                  <input type="radio" name="rating" value="4.0" className="hidden" />
                  <span className="text-sm font-extrabold">4.0+</span>
                </label>

                {/* Tombol 4.5+ */}
                <label className="flex items-center justify-center bg-[#FCFCFC] border border-gray-100 py-3 rounded-2xl cursor-pointer hover:bg-gray-50 transition-all has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-300 has-[:checked]:text-yellow-700 text-gray-600 shadow-sm">
                  <input type="radio" name="rating" value="4.5" className="hidden" />
                  <span className="text-sm font-extrabold">4.5+</span>
                </label>

              </div>
            </div>
          </aside>

          {/* AREA HASIL */}
          <section className="flex-1 p-8 bg-gray-50 overflow-y-auto">
            
            {/* Judul & Urutan */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-baseline gap-3">
                <h1 className="text-2xl font-extrabold text-black">Eksplorasi Desainer</h1>
                <span className="text-sm text-gray-400">124 hasil ditemukan</span>
              </div>
              <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-gray-50 transition">
                <span>≡</span> Terpopuler
              </button>
            </div>

            {/* Grid Kartu Desainer */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* KARTU 1 */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  {/* Foto Proyek Atas */}
                  <div className="h-44 bg-gray-200 relative overflow-hidden">
                    <img src="/renovasi-rumah-image.svg" alt="Karya" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    {/* Rating Melayang */}
                    <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-md text-xs font-bold shadow-sm text-gray-700 flex items-center gap-1">
                      <span className="text-yellow-400"><img 
                      src="/icon-bintang.svg" 
                      alt="icon bintang" 
                      className="w-4 h-4 object-contain rounded-md"
                      /></span> 4.9
                    </div>
                  </div>
                  
                  {/* Info Bawah */}
                  <div className="p-5 relative mt-4">
                    {/* Foto Profil Desainer */}
                    <div className="absolute -top-12 left-5 w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-sm bg-gray-100 z-10">
                      <img src="/renovasi-rumah-image.svg" alt="Profil" className="w-full h-full object-cover" />
                    </div>

                    <h3 className="font-extrabold text-gray-800 text-lg">Studio Arsitek Senja</h3>
                    <p className="text-xs text-gray-500 mt-1">Modern, Minimalis</p>
                    <p className="text-xs text-gray-400 mt-1">📍 Jakarta</p>
                    
                    {/* Harga & Tombol */}
                    <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-end">
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold">Mulai Dari</p>
                        <p className="text-sm font-extrabold text-yellow-600">Rp 12.500.000</p>
                      </div>

                      <Link 
                        href="/desainer-detail" 
                        className="bg-[#1A1A1A] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-800 transition shadow-md"
                      >
                        Lihat Detail
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
"use client";
import Link from 'next/link';
import { useState } from 'react';
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <main className="flex h-screen bg-white text-gray-800 font-sans">
      
      {/* Bagian Kiri: Sidebar */}
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
          <a href="#" className="flex items-center gap-3 bg-yellow-50 text-yellow-500 font-bold px-4 py-3 rounded-xl border border-yellow-100">
            <img src="/dashboard-icon-yellow.png" alt="Dashboard" className="w-5 h-5" /> Beranda
          </a>
          
          {/* Menu tidak aktif */}
          <a href="/pesanansaya" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-4 py-3 rounded-xl transition">
            <img src="/pesanan-icon.png" alt="Pesanan Saya" className="w-5 h-5" /> Proyek 
          </a>
          <a href="/pesan" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-4 py-3 rounded-xl transition">
            <img src="/chat-icon.png" alt="Chat" className="w-5 h-5" /> Pesan 
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-4 py-3 rounded-xl transition">
            <img src="/rekomendasi-icon.png" alt="Rekomendasi" className="w-5 h-5" /> Rekomendasi
          </a>
          <a href="/profil" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-4 py-3 rounded-xl transition">
            <img src="/profile-icon.svg" alt="Profil" className="w-5 h-5" /> Profil
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-4 py-3 rounded-xl transition">
            <img src="/settings-icon.png" alt="Pengaturan" className="w-5 h-5" /> Pengaturan
          </a>
        </nav>
      </aside>


      {/* Bagian Tengah */}
      
      <section className="flex-1 overflow-y-auto p-10">
        {/* Tengah atas */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-extrabold text-black">Selamat Datang, Budi Santoso</h1>
            <p className="text-gray-500 mt-2">Mari lanjutkan proyek impian Anda bersama para ahli terbaik kami.</p>
          </div>
          <Link href="/explore" className="group flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-full font-bold shadow-sm hover:bg-yellow-500 hover:text-white hover:border-yellow-500 transition-all duration-300">
            <span className="text-yellow-600 group-hover:text-white transition-colors">+</span> Proyek Baru
          </Link>
        </div>

        {/* bagian tengah */}
        <div className="mt-10">
          
          {/* Pesanan aktif */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="text-yellow-500"><img src="/pesanan-aktif-icon.svg" alt="PesananAktif" className="w-6 h-6" /></span> Pesanan Aktif
            </h2>
            <a href="/pesanansaya" className="text-sm text-yellow-600 font-bold hover:underline">Lihat Semua</a>
          </div>

          {/* Wadah Kartu (Grid 2 Kolom) */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
            
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-center hover:shadow-md transition-shadow cursor-pointer">
              {/* Proyek Rumah Minimalis */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-2xl overflow-hidden flex-shrink-0">
                <img src="/renovasi-rumah-image.svg" alt="Proyek 1" className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 leading-tight truncate">Renovasi Rumah Minimalis</h3>
                  <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap flex-shrink-0">TAHAP 3</span>
                </div>
                <p className="text-xs text-gray-500 mt-1 truncate">Desainer: Aris Setiawan</p>
                
                {/* Progress Bar */}
                <div className="mt-3">
                  <div className="flex justify-between text-[10px] font-bold mb-1 text-gray-700">
                    <span>Progres Desain</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/*Proyek Kolam Renang */}
             <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-2xl overflow-hidden flex-shrink-0">
                <img src="/pool-image.svg" alt="Proyek 2" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 leading-tight truncate">Pembangunan Kolam Renang</h3>
                  <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap flex-shrink-0">PERSIAPAN</span>
                </div>
                <p className="text-xs text-gray-500 mt-1 truncate">Desainer: Sarah Wijaya</p>
                <div className="mt-3">
                  <div className="flex justify-between text-[10px] font-bold mb-1 text-gray-700">
                    <span>Progres Lokasi</span>
                    <span>15%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Rekomendasi Untukmu */}
        <div className="mt-12">
          
          {/* Judul */}
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="text-yellow-500"><img src="/rekomendasi-untukmu-icon.svg" alt="Star" className="w-5 h-5" /></span> Rekomendasi Untukmu
            </h2>
          </div>

          {/* --- AREA KARTU REKOMENDASI --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* KARTU 1 (Misal: Studio Jenggala) */}
              <Link 
                href="/desainer-detail" 
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 block group"
              >
                {/* Foto Rumah */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img src="/renovasi-rumah-image.svg" alt="Karya" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm flex items-center gap-1.5">
                    <span className="text-yellow-400 text-sm"><img src="/icon-bintang-full.svg" alt="Rating" className="w-3 h-3" /></span> 4.9
                  </div>
                </div>

                {/* Info Teks Bawah */}
                <div className="p-6">
                  <h3 className="font-extrabold text-gray-900 text-lg">Studio Jenggala</h3>
                  <p className="text-sm text-gray-500 mt-1">Spesialis Villa & Estate</p>
                  
                  <div className="flex gap-2 mt-4">
                    <span className="px-4 py-1.5 bg-gray-50 text-gray-600 text-xs font-bold rounded-full border border-gray-100">Arsitektur</span>
                    <span className="px-4 py-1.5 bg-gray-50 text-gray-600 text-xs font-bold rounded-full border border-gray-100">Lansekap</span>
                  </div>
                </div>
              </Link>

            {/* KARTU 2: Line Space Design */}
            <Link 
              href="/desainer-detail" 
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 block group"
            >
              <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop" alt="Line Space Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm text-gray-700">
                  <span className="text-yellow-400"><img src="/icon-bintang-full.svg" alt="Rating" className="w-3 h-3" /></span> 4.8
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-lg text-gray-800 leading-tight">Line Space Design</h3>
                <p className="text-sm text-gray-500 mt-1 truncate">Minimalisme Modern</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-slate-50 text-slate-500 text-[10px] font-bold px-3 py-1.5 rounded-full border border-slate-100">Interior</span>
                  <span className="bg-slate-50 text-slate-500 text-[10px] font-bold px-3 py-1.5 rounded-full border border-slate-100">Renovasi</span>
                </div>
              </div>
            </Link>

            {/* KARTU 3: Kayu Arta Studio */}
            <Link 
              href="/desainer-detail" 
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 block group"
            >
              <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop" alt="Kayu Arta Studio" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm text-gray-700">
                  <span className="text-yellow-400"><img src="/icon-bintang-full.svg" alt="Rating" className="w-3 h-3" /></span> 5.0
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-lg text-gray-800 leading-tight">Kayu Arta Studio</h3>
                <p className="text-sm text-gray-500 mt-1 truncate">Custom Furnitur & Dekor</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-slate-50 text-slate-500 text-[10px] font-bold px-3 py-1.5 rounded-full border border-slate-100">Furniture</span>
                  <span className="bg-slate-50 text-slate-500 text-[10px] font-bold px-3 py-1.5 rounded-full border border-slate-100">Interior</span>
                </div>
              </div>
            </Link>

            {/* KARTU 4: Urban Nest */}
            <Link 
              href="/desainer-detail" 
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 block group"
            >
              <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=400&fit=crop" alt="Urban Nest" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm text-gray-700">
                  <span className="text-yellow-400"><img src="/icon-bintang-full.svg" alt="Rating" className="w-3 h-3" /></span> 4.7
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-lg text-gray-800 leading-tight">Urban Nest</h3>
                <p className="text-sm text-gray-500 mt-1 truncate">Apartmen Pintar</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-slate-50 text-slate-500 text-[10px] font-bold px-3 py-1.5 rounded-full border border-slate-100">Apartemen</span>
                  <span className="bg-slate-50 text-slate-500 text-[10px] font-bold px-3 py-1.5 rounded-full border border-slate-100">Smart Home</span>
                </div>
              </div>
            </Link>

          </div>
        </div>
        
      </section>


      {/* --- PINTU KANAN: INFO PANEL --- */}
        <aside className="w-80 bg-white border-l border-gray-100 p-8 flex flex-col flex-shrink-0 overflow-y-auto">
          
          {/* AREA PROFIL ATAU LOGIN */}
          <div className="mb-10">
            {isLoggedIn ? (
              
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar Bulat Warna Peach */}
                  <div className="w-14 h-14 bg-[#FCDCAA] rounded-full flex items-center justify-center text-[#4A3B69] text-2xl shadow-sm">
                    👤
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-black leading-tight">Budi Santoso</h2>
                    <p className="text-sm text-gray-500 mt-0.5 font-medium">Premium Member</p>
                  </div>
                </div>
                {/* Ikon Edit */}
                <button className="text-gray-400 hover:text-gray-600 transition">
                  ✏️
                </button>
              </div>

            ) : (

              // JIKA BELUM LOGIN (Tampil Tombol Login)
              <div className="flex flex-col items-center bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center">
                <p className="text-sm text-gray-600 mb-4 font-medium">Masuk untuk mengelola proyek dan melihat estimasi anggaran Anda.</p>
                <Link href="/login" className="w-full">
                  <button className="w-full bg-[#1A1A1A] text-white font-bold py-3.5 rounded-xl hover:bg-black transition shadow-md">
                    Sign In
                  </button>
                </Link>
                <p className="text-xs text-gray-500 mt-4">
                  Belum punya akun? <Link href="/signup" className="text-yellow-600 font-extrabold hover:underline">Sign Up</Link>
                </p>
              </div>

            )}
          </div>
        {/* Anggaran dan Notif */}
        {/* --- BAGIAN ESTIMASI ANGGARAN --- */}
        <div className="bg-[#FFFDF7] border border-yellow-100 p-5 rounded-2xl mb-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-bold text-gray-700">Estimasi Anggaran Proyek</h3>
            <span className="text-yellow-500 text-lg"><img src ="/icon-uang.svg" alt="uang" className="w-5 h-5" /></span>
          </div>
          <p className="text-2xl font-extrabold text-black mb-1">Rp 450.000.000</p>
          <p className="text-[10px] text-gray-400">*Total dari semua pesanan aktif</p>
        </div>


        {/* --- BAGIAN NOTIFIKASI TERKINI --- */}
        <div>
          {/* Header Notifikasi */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">Notifikasi Terkini</h3>
            <a href="#" className="text-xs text-yellow-600 font-bold hover:underline">Tandai Dibaca</a>
          </div>

          {/* Daftar Notifikasi */}
          <div className="flex flex-col gap-6">
            
            {/* Pesan Baru  */}
            <div className="flex gap-4 items-start cursor-pointer group">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-blue-500 group-hover:bg-blue-100 transition-colors">
                <img src ="/icon-pesan-terbaru.svg" alt="Pesan Baru" className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Pesan baru dari Aris S.</h4>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">"Halo Pak Budi, saya sudah mengirimkan revisi layout lantai 2..."</p>
                <p className="text-[10px] text-gray-400 mt-2">5 menit yang lalu</p>
              </div>
            </div>

            {/* Pembayaran */}
            <div className="flex gap-4 items-start cursor-pointer group">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 text-green-500 group-hover:bg-green-100 transition-colors">
                <img src ="/icon-pembayaran-verif.svg" alt="Pembayaran-terverifikasi" className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800 group-hover:text-green-600 transition-colors">Pembayaran Terverifikasi</h4>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">Pembayaran termin 1 untuk 'Backyard' sudah kami terima.</p>
                <p className="text-[10px] text-gray-400 mt-2">2 jam yang lalu</p>
              </div>
            </div>

            {/* Jadwal Survey */}
            <div className="flex gap-4 items-start cursor-pointer group">
              <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center flex-shrink-0 text-yellow-500 group-hover:bg-yellow-100 transition-colors">
                <img src ="/icon-jadwal-survey.svg" alt="Jadwal Survey" className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">Jadwal Survey</h4>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">Survey lokasi oleh Sarah Wijaya dijadwalkan besok 10:00 WIB.</p>
                <p className="text-[10px] text-gray-400 mt-2">Kemarin</p>
              </div>
            </div>

          </div>
        </div>
      </aside>

    </main>
  );
}

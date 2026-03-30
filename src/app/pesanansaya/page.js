"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function ProyekSaya() {
  // BUKU DAFTAR PROYEK (Biar gampang diedit)
  const daftarProyek = [
    {
      id: 1,
      judul: "Renovasi Rumah Minimalis",
      desainer: "Aris Setiawan",
      tipeProgres: "Progres Desain",
      persen: 65,
      status: "TAHAP 3",
      // Warna khusus buat TAHAP 3 (Kuning/Orange)
      badgeBg: "bg-orange-100",
      badgeText: "text-orange-600",
      barColor: "bg-yellow-500",
      foto: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      judul: "Pembangunan Kolam Renang",
      desainer: "Sarah Wijaya",
      tipeProgres: "Progres Lokasi",
      persen: 15,
      status: "PERSIAPAN",
      // Warna khusus buat PERSIAPAN (Hijau)
      badgeBg: "bg-green-100",
      badgeText: "text-green-600",
      barColor: "bg-green-500",
      foto: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      judul: "Desain Interior Dapur Utama",
      desainer: "Budi Santoso",
      tipeProgres: "Revisi 3D Render",
      persen: 80,
      status: "REVISI",
      // Warna khusus buat REVISI (Biru)
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-600",
      barColor: "bg-blue-500",
      foto: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=200&h=200&fit=crop"
    }
  ];
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // Wadah Utama 3 Kolom
    <div className="flex h-screen bg-white text-gray-800 font-sans overflow-hidden">
      
      {/* --- KOLOM 1: PINTU KIRI (SIDEBAR) --- */}
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
          {/* Menu tidak aktif */}
          <a href="./" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-4 py-3 rounded-xl transition">
            <img src="/dashboard-icon.png" alt="Dashboard" className="w-5 h-5" /> Dashboard
          </a>
          
          {/* Menu aktif */}
          <a href="#" className="flex items-center gap-3 bg-yellow-50 text-yellow-500 font-bold px-4 py-3 rounded-xl border border-yellow-100">
            <img src="/icon-pesanan-aktif-kuning.svg" alt="Proyek Saya" className="w-5 h-5" /> Proyek Saya
          </a>
          {/* Menu tidak aktif */}
          <a href="/pesan" className="flex items-center gap-3 text-gray-500 hover:bg-gray-100 font-medium px-4 py-3 rounded-xl transition">
            <img src="/chat-icon.png" alt="Chat" className="w-5 h-5" /> Pesan Saya
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

      {/* --- KOLOM 2: TENGAH (KONTEN FULL PROYEK) --- */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-white">
        
        {/* Header Atas (Pencarian dll) */}
        <header className="px-10 py-6 flex items-center justify-between flex-shrink-0 border-b border-gray-100">
          <h1 className="text-2xl font-extrabold text-black">Pesanan Saya</h1>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"><img src="/icon-lonceng.svg" alt="Pengaturan" className="w-5 h-5" /></button>
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"><img src="/settings-icon.png" alt="Pengaturan" className="w-5 h-5" /></button>
          </div>
        </header>

        {/* List Proyek yang bisa di-scroll */}
        <div className="flex-1 overflow-y-auto p-10">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Memanggil data proyek pakai map() */}
            {daftarProyek.map((proyek) => (
              <div key={proyek.id} className="border border-gray-200 rounded-3xl p-5 flex items-center gap-6 hover:shadow-md transition-shadow bg-white">
                
                {/* Foto Proyek */}
                <div className="w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100">
                  <img src={proyek.foto} alt={proyek.judul} className="w-full h-full object-cover" />
                </div>

                {/* Info Proyek */}
                <div className="flex-1 flex flex-col justify-center">
                  
                  {/* Judul & Badge Status */}
                  <div className="flex justify-between items-start mb-1">
                    <h2 className="text-lg font-extrabold text-gray-900">{proyek.judul}</h2>
                    <span className={`text-[10px] font-extrabold px-3 py-1 rounded-md ${proyek.badgeBg} ${proyek.badgeText}`}>
                      {proyek.status}
                    </span>
                  </div>
                  
                  {/* Nama Desainer */}
                  <p className="text-sm text-gray-500 mb-5">Desainer: {proyek.desainer}</p>

                  {/* Progress Bar Area */}
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-xs font-bold text-gray-800">{proyek.tipeProgres}</span>
                      <span className="text-xs font-extrabold text-gray-900">{proyek.persen}%</span>
                    </div>
                    {/* Background Bar (Abu-abu) */}
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      {/* Bar yang terisi (Warna Dinamis, Lebar Dinamis) */}
                      <div 
                        className={`h-full rounded-full ${proyek.barColor}`} 
                        style={{ width: `${proyek.persen}%` }}
                      ></div>
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </main>

      {/* --- KOLOM 3: PINTU KANAN (PROFIL & BUDGET) --- */}
      <aside className="w-80 bg-white border-l border-gray-100 p-8 flex flex-col flex-shrink-0 overflow-y-auto z-20 shadow-sm">
        
        {/* Profil Mini */}
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

        {/* Estimasi Anggaran Proyek */}
        <div className="bg-[#FFFDF7] border border-yellow-100 p-5 rounded-2xl mb-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-bold text-gray-700">Estimasi Anggaran Proyek</h3>
            <span className="text-yellow-500 text-lg"><img src ="/icon-uang.svg" alt="uang" className="w-5 h-5" /></span>
          </div>
          <p className="text-2xl font-extrabold text-black mb-1">Rp 450.000.000</p>
          <p className="text-[10px] text-gray-400">*Total dari semua pesanan aktif</p>
        </div>
        {/* Notifikasi Terkini */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-extrabold text-gray-900 text-sm">Notifikasi Terkini</h3>
            <button className="text-xs font-bold text-yellow-600 hover:underline">Tandai Dibaca</button>
          </div>
          <div className="space-y-6">
            {/* Notif 1 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0"><img src ="/icon-pesan-terbaru.svg" alt="Pesan Baru" className="w-5 h-5" /></div>
              <div>
                <p className="text-sm font-bold text-gray-800">Pesan baru dari Aris S.</p>
                <p className="text-xs text-gray-500 mt-1">"Halo Pak Budi, saya sudah mengirimkan revisi layout lantai..."</p>
                <p className="text-[10px] text-gray-400 mt-2">5 menit yang lalu</p>
              </div>
            </div>
            {/* Notif 2 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 flex-shrink-0"><img src ="/icon-pembayaran-verif.svg" alt="Pembayaran-terverifikasi" className="w-5 h-5" /></div>
              <div>
                <p className="text-sm font-bold text-gray-800">Pembayaran Terverifikasi</p>
                <p className="text-xs text-gray-500 mt-1">Pembayaran termin 1 untuk 'Backyard' sudah kami terima.</p>
                <p className="text-[10px] text-gray-400 mt-2">2 jam yang lalu</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

    </div>
  );
}
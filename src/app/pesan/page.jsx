"use client";
import Link from 'next/link';

export default function Pesan() {
  // DATA DUMMY 1: Daftar Obrolan (Inbox Kiri)
  const daftarChat = [
    { id: 1, nama: "Budi Santoso", pesanTerakhir: "Bagaimana dengan desain revisin...", waktu: "10:30", aktif: true, avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" },
    { id: 2, nama: "Siti Aminah", pesanTerakhir: "Terima kasih infonya, akan kami ti...", waktu: "Kemarin", aktif: false, avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" },
    { id: 3, nama: "Denny Hermawan", pesanTerakhir: "Jadwal survei lokasi pukul 14:00 ...", waktu: "Senin", aktif: false, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop" },
  ];

  // DATA DUMMY 2: Isi Pesan dengan Budi Santoso
  const isiPesan = [
    { id: 1, tipe: "sistem", teks: "PROYEK: RENOVASI RUMAH MINIMALIS" },
    { id: 2, tipe: "masuk", teks: "Selamat siang Pak Andi, saya sudah menyelesaikan draf pertama untuk konsep ruang tamu 'Renovasi Rumah Minimalis' yang kita diskusikan kemarin.", waktu: "10:15", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" },
    { id: 3, tipe: "keluar", teks: "Selamat siang Pak Budi. Boleh saya lihat drafnya? Dan apakah sudah termasuk estimasi biaya pengerjaan awalnya?", waktu: "10:18" },
    { id: 4, tipe: "masuk", teks: "Tentu, ini penawaran resmi untuk tahap desain awal. Silakan ditinjau detailnya di bawah ini.", waktu: "10:25", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" },
    // Pesan tipe "penawaran" khusus buat desain kartu harga
    { id: 5, tipe: "penawaran" } 
  ];

  return (
    // Wadah Utama 3 Kolom
    <div className="flex h-screen bg-white text-gray-800 font-sans overflow-hidden">
      
      {/* --- KOLOM 1: SIDEBAR MENU --- */}
      <aside className="w-64 border-r border-gray-100 flex flex-col justify-between flex-shrink-0 bg-white z-20">
        <div>
          {/* Logo */}
          <div className="p-6 flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-yellow-600 italic"> <img src="/logo.png" alt="Logo Match and Build" className="w-12 h-12 object-contain rounded-md"/></span>
            <div>
              <h1 className="font-extrabold leading-none text-black text-sm">Match n Build</h1>
              <p className="text-[10px] text-gray-500 mt-0.5">Marketplace Arsitektur</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex flex-col gap-1 px-4">
            <Link href="/" className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition">
              <span><img src="/dashboard-icon.png" alt="Dashboard" className="w-5 h-5" /></span> Beranda
            </Link>
            <Link href="/pesanansaya" className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition">
              <span><img src="/pesanan-icon.png" alt="Pesanan Saya" className="w-5 h-5" /></span> Proyek
            </Link>
            {/* Menu Pesan Aktif */}
            <Link href="/pesan" className="flex items-center gap-3 bg-yellow-400 text-gray-900 font-bold px-4 py-3 rounded-xl shadow-sm transition">
              <span><img src="/chat-icon.png" alt="Chat" className="w-5 h-5" /></span> Pesan
            </Link>
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition">
              <span><img src="/rekomendasi-icon.png" alt="Rekomendasi" className="w-5 h-5" /></span> Rekomendasi
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition">
              <span><img src="/profile-icon.svg" alt="Profil" className="w-5 h-5" /></span> Profil
            </a>
          </nav>
        </div>

        {/* Profil Bawah */}
        <div className="p-6 border-t border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center text-sm">🏢</div>
          <div>
            <p className="text-sm font-bold text-gray-800 leading-tight">Andi Wijaya</p>
            <p className="text-[10px] text-gray-500">Klien</p>
          </div>
        </div>
      </aside>

      {/* --- KOLOM 2: DAFTAR INBOX --- */}
      <aside className="w-80 border-r border-gray-100 flex flex-col flex-shrink-0 bg-white z-10">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-extrabold text-black mb-4">Pesan</h2>
          {/* Search Bar */}
          <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-100">
            <span className="text-gray-400 mr-2 text-sm"><img src="/icon-search.svg" alt="Search" className="w-5 h-5" /></span>
            <input type="text" placeholder="Cari percakapan..." className="bg-transparent outline-none w-full text-sm text-gray-700" />
          </div>
        </div>

        {/* List Obrolan */}
        <div className="flex-1 overflow-y-auto">
          {daftarChat.map((chat) => (
            <div key={chat.id} className={`p-4 flex gap-4 cursor-pointer border-l-4 transition-all ${chat.aktif ? 'bg-gray-50 border-yellow-400' : 'border-transparent hover:bg-gray-50'}`}>
              <div className="relative">
                <img src={chat.avatar} alt={chat.nama} className="w-12 h-12 rounded-full object-cover" />
                {chat.aktif && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-sm font-bold text-gray-900 truncate">{chat.nama}</h3>
                  <span className="text-[10px] text-gray-400 flex-shrink-0">{chat.waktu}</span>
                </div>
                <p className={`text-xs truncate ${chat.aktif ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>{chat.pesanTerakhir}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* --- KOLOM 3: RUANG OBROLAN (CHAT ROOM) --- */}
      <main className="flex-1 flex flex-col bg-[#F9F9F9]">
        
        {/* Header Chat */}
        <header className="px-8 py-5 bg-white border-b border-gray-100 flex justify-between items-center shadow-sm z-10">
          <div className="flex items-center gap-4">
            <img src={daftarChat[0].avatar} alt="Budi" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h2 className="text-sm font-extrabold text-gray-900">Budi Santoso (Arsitek)</h2>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span className="text-[10px] font-bold text-gray-500 tracking-wide uppercase">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-xs font-bold text-gray-800 border-b-2 border-gray-800 pb-0.5 hover:text-yellow-600 hover:border-yellow-600 transition">LIHAT PROFIL</button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"><img src="/icon-titikdua.svg" alt="More" className="w-5 h-5" /></button>
          </div>
        </header>

        {/* Area Pesan (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {isiPesan.map((pesan) => {
            
            // LOGIKA 1: Kalau pesannya tipe "sistem" (Teks abu-abu di tengah)
            if (pesan.tipe === "sistem") {
              return (
                <div key={pesan.id} className="flex justify-center">
                  <span className="bg-white px-4 py-1.5 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider shadow-sm border border-gray-100">
                    {pesan.teks}
                  </span>
                </div>
              );
            }

            // LOGIKA 2: Kalau pesannya tipe "masuk" (Kiri, Putih)
            if (pesan.tipe === "masuk") {
              return (
                <div key={pesan.id} className="flex items-end gap-3 max-w-2xl">
                  <img src={pesan.avatar} alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 text-sm text-gray-700 leading-relaxed">
                      {pesan.teks}
                    </div>
                    <span className="text-[10px] text-gray-400 mt-1 block">{pesan.waktu}</span>
                  </div>
                </div>
              );
            }

            // LOGIKA 3: Kalau pesannya tipe "keluar" (Kanan, Hitam)
            if (pesan.tipe === "keluar") {
              return (
                <div key={pesan.id} className="flex items-end justify-end gap-3 w-full">
                  <div className="max-w-xl">
                    <div className="bg-[#2A2A2A] text-white p-4 rounded-2xl rounded-br-none shadow-sm text-sm leading-relaxed">
                      {pesan.teks}
                    </div>
                    <div className="flex justify-end items-center gap-1 mt-1">
                      <span className="text-[10px] text-gray-400">{pesan.waktu}</span>
                      <span className="text-[10px] text-gray-400">✔️</span>
                    </div>
                  </div>
                </div>
              );
            }

            // LOGIKA 4: Kalau pesannya tipe "penawaran" (Kartu Khusus di Kiri)
            if (pesan.tipe === "penawaran") {
              return (
                <div key={pesan.id} className="flex items-end gap-3 max-w-md ml-11">
                  <div className="bg-[#FFFBF0] border-2 border-yellow-400 p-5 rounded-2xl shadow-sm w-full">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xs font-bold text-gray-800 flex items-center gap-2">📄 PENAWARAN KUSTOM</h4>
                      <span className="bg-yellow-400 text-gray-900 text-[9px] font-extrabold px-2 py-1 rounded-md">PENDING</span>
                    </div>
                    <h3 className="font-extrabold text-gray-900 mb-1">Renovasi Rumah Minimalis</h3>
                    <p className="text-xs text-gray-500 mb-4">Fase 1: Konsep Desain & Denah 3D</p>
                    <p className="text-3xl font-black text-gray-900 mb-6"><span className="text-sm font-bold">Rp</span> 5.000.000</p>
                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-xl transition text-sm">
                      Terima Penawaran ➔
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>

        {/* Input Pesan Bawah */}
        <div className="p-6 bg-[#F9F9F9]">
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-white border border-gray-200 rounded-full flex items-center px-4 py-3 shadow-sm focus-within:border-yellow-400 focus-within:ring-1 focus-within:ring-yellow-400 transition-all">
              <button className="text-gray-400 hover:text-gray-600"><img src="/icon-clipboard.svg" alt="Attachment" className="w-5 h-5"/></button>
              <button className="text-gray-400 hover:text-gray-600 mx-3"><img src="/icon-image.svg" alt="Image" className="w-5 h-5"/></button>
              <input type="text" placeholder="Ketik pesan untuk Budi Santoso..." className="flex-1 bg-transparent outline-none text-sm text-gray-700" />
              <button className="text-gray-400 hover:text-gray-600"><img src="/icon-emoji.svg" alt="Emoji" className="w-5 h-5"/></button>
            </div>
            <button className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center text-white hover:bg-black transition shadow-md flex-shrink-0">
              ➤
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}
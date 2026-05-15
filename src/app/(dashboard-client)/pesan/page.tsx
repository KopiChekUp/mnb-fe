'use client';

import Image from 'next/image';

interface ChatContact {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  isActive: boolean;
  avatar: string;
}

interface ChatMessage {
  id: number;
  type: 'system' | 'incoming' | 'outgoing' | 'offer';
  text?: string;
  time?: string;
  avatar?: string;
}

const contacts: ChatContact[] = [
  { id: 1, name: 'Budi Santoso', lastMessage: 'Bagaimana dengan desain revisin...', time: '10:30', isActive: true, avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop' },
  { id: 2, name: 'Siti Aminah', lastMessage: 'Terima kasih infonya, akan kami ti...', time: 'Kemarin', isActive: false, avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop' },
  { id: 3, name: 'Denny Hermawan', lastMessage: 'Jadwal survei lokasi pukul 14:00 ...', time: 'Senin', isActive: false, avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop' },
];

const messages: ChatMessage[] = [
  { id: 1, type: 'system', text: 'PROYEK: RENOVASI RUMAH MINIMALIS' },
  { id: 2, type: 'incoming', text: 'Selamat siang Pak Andi, saya sudah menyelesaikan draf pertama untuk konsep ruang tamu.', time: '10:15', avatar: contacts[0].avatar },
  { id: 3, type: 'outgoing', text: 'Selamat siang Pak Budi. Boleh saya lihat drafnya? Dan apakah sudah termasuk estimasi biaya pengerjaan awalnya?', time: '10:18' },
  { id: 4, type: 'incoming', text: 'Tentu, ini penawaran resmi untuk tahap desain awal. Silakan ditinjau detailnya di bawah ini.', time: '10:25', avatar: contacts[0].avatar },
  { id: 5, type: 'offer' },
];

export default function PesanPage() {
  return (
    <div className="flex flex-1 overflow-hidden">
      
      <aside className="w-80 border-r border-gray-100 flex flex-col flex-shrink-0 bg-white z-10">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-extrabold text-black mb-4">Pesan</h2>
          <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-100">
            <Image src="/icon-search.svg" alt="Cari" width={20} height={20} className="mr-2 opacity-40" />
            <input type="text" placeholder="Cari percakapan..." className="bg-transparent outline-none w-full text-sm text-gray-700" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {contacts.map((chat) => (
            <div
              key={chat.id}
              className={`p-4 flex gap-4 cursor-pointer border-l-4 transition-all ${chat.isActive ? 'bg-gray-50 border-yellow-400' : 'border-transparent hover:bg-gray-50'}`}
            >
              <div className="relative">
                
                <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover" />
                {chat.isActive && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-sm font-bold text-gray-900 truncate">{chat.name}</h3>
                  <span className="text-[10px] text-gray-400 flex-shrink-0">{chat.time}</span>
                </div>
                <p className={`text-xs truncate ${chat.isActive ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      
      <main className="flex-1 flex flex-col bg-[#F9F9F9]">
        <header className="px-8 py-5 bg-white border-b border-gray-100 flex justify-between items-center shadow-sm z-10">
          <div className="flex items-center gap-4">
            
            <img src={contacts[0].avatar} alt="Budi" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h2 className="text-sm font-extrabold text-gray-900">Budi Santoso (Arsitek)</h2>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span className="text-[10px] font-bold text-gray-500 tracking-wide uppercase">Online</span>
              </div>
            </div>
          </div>
          <button className="text-xs font-bold text-gray-800 border-b-2 border-gray-800 pb-0.5 hover:text-yellow-600 hover:border-yellow-600 transition">
            LIHAT PROFIL
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {messages.map((msg) => {
            if (msg.type === 'system') {
              return (
                <div key={msg.id} className="flex justify-center">
                  <span className="bg-white px-4 py-1.5 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider shadow-sm border border-gray-100">
                    {msg.text}
                  </span>
                </div>
              );
            }
            if (msg.type === 'incoming') {
              return (
                <div key={msg.id} className="flex items-end gap-3 max-w-2xl">
                  
                  <img src={msg.avatar} alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 text-sm text-gray-700 leading-relaxed">{msg.text}</div>
                    <span className="text-[10px] text-gray-400 mt-1 block">{msg.time}</span>
                  </div>
                </div>
              );
            }
            if (msg.type === 'outgoing') {
              return (
                <div key={msg.id} className="flex items-end justify-end gap-3 w-full">
                  <div className="max-w-xl">
                    <div className="bg-[#2A2A2A] text-white p-4 rounded-2xl rounded-br-none shadow-sm text-sm leading-relaxed">{msg.text}</div>
                    <div className="flex justify-end items-center gap-1 mt-1">
                      <span className="text-[10px] text-gray-400">{msg.time}</span>
                      <span className="text-[10px] text-gray-400">✔️</span>
                    </div>
                  </div>
                </div>
              );
            }
            if (msg.type === 'offer') {
              return (
                <div key={msg.id} className="flex items-end gap-3 max-w-md ml-11">
                  <div className="bg-[#FFFBF0] border-2 border-yellow-400 p-5 rounded-2xl shadow-sm w-full">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xs font-bold text-gray-800">📄 PENAWARAN KUSTOM</h4>
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
            return null;
          })}
        </div>

        <div className="p-6 bg-[#F9F9F9]">
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-white border border-gray-200 rounded-full flex items-center px-4 py-3 shadow-sm focus-within:border-yellow-400 focus-within:ring-1 focus-within:ring-yellow-400 transition-all">
              <button aria-label="Lampiran" className="text-gray-400 hover:text-gray-600">
                <Image src="/icon-clipboard.svg" alt="" width={20} height={20} />
              </button>
              <button aria-label="Gambar" className="text-gray-400 hover:text-gray-600 mx-3">
                <Image src="/icon-image.svg" alt="" width={20} height={20} />
              </button>
              <input type="text" placeholder="Ketik pesan..." className="flex-1 bg-transparent outline-none text-sm text-gray-700" />
              <button aria-label="Emoji" className="text-gray-400 hover:text-gray-600">
                <Image src="/icon-emoji.svg" alt="" width={20} height={20} />
              </button>
            </div>
            <button aria-label="Kirim" className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center text-white hover:bg-black transition shadow-md flex-shrink-0">
              ➤
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

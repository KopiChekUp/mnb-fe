'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ROUTES } from '@/config/constants';

type DesignStyle = 'modern' | 'minimalis' | 'japandi' | 'klasik';
type MinRating = '4.0' | '4.5';

const DESIGN_STYLES: { value: DesignStyle; label: string }[] = [
  { value: 'modern', label: 'Modern' },
  { value: 'minimalis', label: 'Minimalis' },
  { value: 'japandi', label: 'Japandi' },
  { value: 'klasik', label: 'Klasik' },
];

const CITIES = ['Semua Kota', 'Jakarta', 'Surabaya', 'Bali', 'Bandung'];

export default function ExplorePage() {
  const [budget, setBudget] = useState(1);
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle>('modern');
  const [selectedRating, setSelectedRating] = useState<MinRating | null>(null);

  const minBudget = 1;
  const maxBudget = 500;
  const percentage = ((budget - minBudget) / (maxBudget - minBudget)) * 100;

  return (
    <div className="flex flex-1 flex-col h-full overflow-hidden bg-gray-50">
      
      <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between flex-shrink-0 z-10">
        <div className="flex-1 max-w-3xl flex items-center bg-gray-50 rounded-full px-5 py-2.5 border border-gray-200 focus-within:border-yellow-500 focus-within:ring-2 focus-within:ring-yellow-100 transition-all">
          <Image src="/icon-search.svg" alt="Search" width={20} height={20} className="mr-3 opacity-40" />
          <input
            type="text"
            placeholder="Cari desainer interior, arsitek, atau gaya (Minimalis, Japandi...)"
            className="bg-transparent outline-none w-full text-sm text-gray-700"
          />
        </div>
        <div className="flex items-center gap-4 ml-6">
          <button aria-label="Notifikasi" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition">
            <Image src="/icon-notif.svg" alt="Notifikasi" width={20} height={20} />
          </button>
          <button aria-label="Pengaturan" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition">
            <Image src="/icon-setting.svg" alt="Pengaturan" width={20} height={20} />
          </button>
        </div>
      </header>

      
      <div className="flex-1 overflow-hidden flex">
        
        <aside className="w-72 bg-white border-r border-gray-100 p-6 overflow-y-auto flex-shrink-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-extrabold text-lg text-black">Filter</h2>
            <button
              onClick={() => { setBudget(1); setSelectedStyle('modern'); setSelectedRating(null); }}
              className="text-xs text-yellow-600 font-bold hover:underline"
            >
              Reset
            </button>
          </div>

          
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-800 mb-3">Gaya Desain</h3>
            <div className="grid grid-cols-2 gap-2">
              {DESIGN_STYLES.map((style) => (
                <label
                  key={style.value}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all border border-gray-200 bg-white hover:bg-gray-50 has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-300"
                >
                  <input
                    type="radio"
                    name="gaya"
                    value={style.value}
                    checked={selectedStyle === style.value}
                    onChange={() => setSelectedStyle(style.value)}
                    className="w-4 h-4 accent-yellow-500"
                  />
                  <span className="text-xs font-bold text-gray-800">{style.label}</span>
                </label>
              ))}
            </div>
          </div>

          
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-800 mb-3">Anggaran (IDR)</h3>
            <div className="text-yellow-600 font-extrabold text-sm mb-3">Hingga Rp {budget} Juta</div>
            <input
              type="range"
              min={minBudget}
              max={maxBudget}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-black"
              style={{ background: `linear-gradient(to right, #EAB308 ${percentage}%, #E5E7EB ${percentage}%)` }}
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-bold mt-2">
              <span>Rp 1 Jt</span>
              <span>Rp 500 Jt+</span>
            </div>
          </div>

          
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-800 mb-3">Lokasi</h3>
            <div className="relative">
              <select className="w-full bg-gray-50 border border-transparent text-gray-700 py-3 px-5 rounded-2xl text-sm font-medium appearance-none cursor-pointer hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-100 focus:border-yellow-400 shadow-sm">
                {CITIES.map((city) => <option key={city}>{city}</option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-800 mb-3">Rating Minimal</h3>
            <div className="grid grid-cols-2 gap-3">
              {(['4.0', '4.5'] as MinRating[]).map((rating) => (
                <label
                  key={rating}
                  className="flex items-center justify-center bg-[#FCFCFC] border border-gray-100 py-3 rounded-2xl cursor-pointer hover:bg-gray-50 transition-all has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-300 has-[:checked]:text-yellow-700 text-gray-600 shadow-sm"
                >
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={selectedRating === rating}
                    onChange={() => setSelectedRating(rating)}
                    className="hidden"
                  />
                  <span className="text-sm font-extrabold">{rating}+</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        
        <section className="flex-1 p-8 bg-gray-50 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-baseline gap-3">
              <h1 className="text-2xl font-extrabold text-black">Eksplorasi Desainer</h1>
              <span className="text-sm text-gray-400">124 hasil ditemukan</span>
            </div>
            <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-gray-50 transition">
              ≡ Terpopuler
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="h-44 bg-gray-200 relative overflow-hidden">
                  <Image src="/renovasi-rumah-image.svg" alt="Karya Desainer" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-md text-xs font-bold shadow-sm text-gray-700 flex items-center gap-1">
                    <Image src="/icon-bintang.svg" alt="Rating" width={16} height={16} />
                    4.9
                  </div>
                </div>
                <div className="p-5 relative mt-4">
                  <div className="absolute -top-12 left-5 w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-sm bg-gray-100 z-10">
                    <Image src="/renovasi-rumah-image.svg" alt="Profil Desainer" fill className="object-cover" />
                  </div>
                  <h3 className="font-extrabold text-gray-800 text-lg">Studio Arsitek Senja</h3>
                  <p className="text-xs text-gray-500 mt-1">Modern, Minimalis</p>
                  <p className="text-xs text-gray-400 mt-1">📍 Jakarta</p>
                  <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold">Mulai Dari</p>
                      <p className="text-sm font-extrabold text-yellow-600">Rp 12.500.000</p>
                    </div>
                    <Link
                      href={ROUTES.DESIGNER_DETAIL}
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
  );
}

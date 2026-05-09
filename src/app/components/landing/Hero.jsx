import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FFFDF7] overflow-hidden pt-20 pb-32">
      {/* Dekorasi Latar */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-50 rounded-l-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-10 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Teks Kiri */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold mb-6 tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            PLATFORM DESAIN & KONSTRUKSI TERBAIK
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6 font-serif">
            Wujudkan Ruang <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
              Impian Anda.
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Match n Build menghubungkan Anda dengan desainer interior dan arsitek terbaik untuk mengubah visi Anda menjadi kenyataan. Mudah, transparan, dan terpercaya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/signup" className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded-xl shadow-xl hover:bg-black hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Mulai Proyek Sekarang
            </Link>
            <Link href="#desainer" className="px-8 py-4 bg-white text-gray-800 font-bold rounded-xl border border-gray-200 shadow-sm hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300">
              Cari Desainer
            </Link>
          </div>
          
          {/* Stats */}
          <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 pt-12 border-t border-gray-100">
            <div>
              <p className="text-3xl font-black text-gray-900">500+</p>
              <p className="text-xs text-gray-500 font-medium">Proyek Selesai</p>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div>
              <p className="text-3xl font-black text-gray-900">120+</p>
              <p className="text-xs text-gray-500 font-medium">Ahli Desain</p>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div>
              <p className="text-3xl font-black text-gray-900">4.9/5</p>
              <p className="text-xs text-gray-500 font-medium">Rating Klien</p>
            </div>
          </div>
        </div>

        {/* Gambar Kanan (Glassmorphism Concept) */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src="/background-auth-sec.svg" alt="Interior Design" className="w-full h-auto object-cover aspect-[4/3]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
          </div>
          
          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 transform -rotate-3 animate-pulse-slow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl">✨</div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Desain Premium</p>
                <p className="text-lg font-black text-gray-900">Estetika Modern</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';

export default function SignUp() {
  return (
    // Wadah Utama: Layar penuh, background putih
    <div className="flex min-h-screen bg-white font-sans">
      
      {/* Form Sign Up */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 sm:px-20 lg:px-24 xl:px-32 relative z-10">
        
        {/* Logo MB */}
        <div className="mb-8">
          <span className="text-4xl font-serif font-bold text-yellow-600 italic">
            <img 
            src="/logo.png" 
            alt="Logo Match and Build" 
            className="w-12 h-12 object-contain rounded-md"
          />
          </span>
        </div>

        {/* Copywriting */}
        <h1 className="text-4xl font-serif text-gray-900 leading-tight mb-4">
          Elevate Your Space with Our Exquisite Furniture
        </h1>
        <p className="text-sm text-gray-500 mb-10 pr-10">
          Discover curated furniture pieces that transform your house into a dream home
        </p>

        {/* Form Input */}
        <form className="space-y-5">
          <h2 className="text-lg font-extrabold text-gray-900 mb-4">Daftar Sebagai:</h2>
          
          {/* --- SIHIR BARU: KARTU PILIHAN ROLE --- */}
          <div className="flex gap-4 mb-6">
            
            {/* Opsi 1: Pelanggan / Klien */}
            <label className="flex-1 cursor-pointer border border-gray-200 rounded-xl p-4 text-center transition-all hover:bg-gray-50 has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-400 has-[:checked]:ring-1 has-[:checked]:ring-yellow-400 block group shadow-sm">
              {/* Radio disembunyikan (hidden), tapi tetep fungsi! */}
              <input type="radio" name="role" value="klien" className="hidden" defaultChecked />
              <span className="text-3xl mb-2 block group-has-[:checked]:scale-110 transition-transform"></span>
              <span className="text-sm font-extrabold text-gray-800">Pelanggan</span>
              <p className="text-[10px] text-gray-500 mt-1 font-medium">Saya ingin mencari desainer</p>
            </label>

            {/* Opsi 2: Desainer / Arsitek */}
            <label className="flex-1 cursor-pointer border border-gray-200 rounded-xl p-4 text-center transition-all hover:bg-gray-50 has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-400 has-[:checked]:ring-1 has-[:checked]:ring-yellow-400 block group shadow-sm">
              <input type="radio" name="role" value="desainer" className="hidden" />
              <span className="text-3xl mb-2 block group-has-[:checked]:scale-110 transition-transform"></span>
              <span className="text-sm font-extrabold text-gray-800">Desainer</span>
              <p className="text-[10px] text-gray-500 mt-1 font-medium">Saya ingin mencari proyek</p>
            </label>

          </div>
          
          {/* Input Email */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">Email</label>
            <input 
              type="email" 
              placeholder="Value" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
            />
          </div>

          {/* Input Password */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Value" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
            />
          </div>

          {/* Input Confirm Password */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">Confirm Password</label>
            <input 
              type="password" 
              placeholder="Value" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
            />
          </div>

          {/* Tombol Register  */}
          <Link href="/signin" className="block w-full pt-2">
            <button type="button" className="w-full bg-[#2A2A2A] text-white font-bold py-3.5 rounded-lg hover:bg-black transition-colors shadow-md">
              Register
            </button>
          </Link>

          {/* Link balik ke halaman Login */}
          <div className="mt-4 text-center">
             <p className="text-sm text-gray-600 font-medium">
                Already have an account?{' '}
                <Link href="/login" className="text-black font-bold hover:underline">
                  Sign in
                </Link>
             </p>
          </div>
        </form>
      </div>


      {/* bagian kanan */}
      <div className="hidden lg:block lg:w-1/2 p-4">
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Foto Rumah */}
          <img 
            src="/background-auth-sec.svg" 
            alt="Dream House" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay gelap */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* KOTAK KACA (Glassmorphism) */}
          <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/40 p-10 rounded-2xl text-white shadow-lg">
            <p className="text-sm font-extrabold mb-2 opacity-90">MnB: Match And Build</p>
            <h2 className="text-3xl font-extrabold mb-4 shadow-sm">Welcome to MnB</h2>
            <p className="text-sm leading-relaxed opacity-90 font-medium">
              Match And Build redefines modern living at Salone del Mobile.Milano 2024. Discover our bold vision of contemporary architecture, cutting-edge interior design trends, and innovative lifestyle solutions.
            </p>
          </div>

        </div>
      </div>  

    </div>
  );
}
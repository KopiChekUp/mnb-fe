import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      
      {/* Form Sign In*/}
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
          Elevate Your Space with Our Exquisite Design
        </h1>
        <p className="text-sm text-gray-500 mb-10 pr-10">
          Discover curated furniture pieces that transform your house into a dream home
        </p>

        {/* Form Input */}
        <form className="space-y-5">
          <h2 className="text-lg font-extrabold text-gray-900 mb-4">Sign in</h2>
          
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

          {/* Tombol Sign In */}
          <Link href="/" className="block w-full pt-2">
            <button type="button" className="w-full bg-[#2A2A2A] text-white font-bold py-3.5 rounded-lg hover:bg-black transition-colors shadow-md">
              Sign In
            </button>
          </Link>

          {/* Lupa Password */}
          <div className="mt-2">
            <a href="/resetpass" className="text-sm text-gray-600 underline hover:text-black font-medium">
              Forgot password?
            </a>
          </div>
          <div className="mt-3">
            <a href="/signup" className="text-sm text-gray-600 underline hover:text-black font-medium">
              Don't have an account? Sign Up
            </a>
          </div>
        </form>
      </div>


      {/* Bagian Kanan*/} 
      <div className="hidden lg:block lg:w-1/2 p-4">
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
          
          <img 
            src="/background-auth-sec.svg" 
            alt="Dream House" 
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10"></div>
          {/*Sambutan*/}
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
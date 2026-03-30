import Link from 'next/link';

export default function ResetPass() {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      
      {/* Form Reset Password */}
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
          Reset Your Password
        </h1>
        <p className="text-sm text-gray-500 mb-10 pr-10">
          Enter the email address associated with your account and we'll send you a link to reset your password.
        </p>

        {/* Form Input */}
        <form className="space-y-5">
         {/* Input Email */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">Email</label>
            <input 
              type="email" 
              placeholder="Value" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
            />
          </div>

          {/* Tombol Sign In */}
          <Link href="/" className="block w-full pt-2">
            <button type="button" className="w-full bg-[#2A2A2A] text-white font-bold py-3.5 rounded-lg hover:bg-black transition-colors shadow-md">
              Send Reset Link
            </button>
          </Link>

          {/* Link balik ke halaman Login */}
          <div className="mt-3">
            <a href="/login" className="text-sm text-gray-600 underline hover:text-black font-medium">
              Back to Login page 
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
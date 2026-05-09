import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="Match n Build" className="w-10 h-10 object-contain rounded-md" />
        <span className="font-extrabold text-xl text-black tracking-tight">Match n Build</span>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8">
        <Link href="#fitur" className="text-gray-600 font-medium hover:text-yellow-600 transition">Fitur</Link>
        <Link href="#desainer" className="text-gray-600 font-medium hover:text-yellow-600 transition">Desainer</Link>
        <Link href="#proyek" className="text-gray-600 font-medium hover:text-yellow-600 transition">Proyek</Link>
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-4">
        <Link href="/login" className="px-6 py-2.5 text-gray-800 font-bold hover:bg-gray-50 rounded-full transition border border-transparent">
          Sign In
        </Link>
        <Link href="/signup" className="px-6 py-2.5 bg-[#1A1A1A] text-white font-bold rounded-full shadow-md hover:bg-black transition hover:-translate-y-0.5">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

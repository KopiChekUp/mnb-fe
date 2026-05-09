import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Match n Build" className="w-10 h-10 object-contain rounded-md bg-white p-1" />
              <span className="font-extrabold text-2xl tracking-tight text-white">Match n Build</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Platform terdepan yang menghubungkan pemilik rumah dengan desainer interior dan arsitek profesional. Wujudkan ruang impian Anda dengan transparan dan mudah.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Navigasi</h4>
            <ul className="space-y-4">
              <li><Link href="#fitur" className="text-gray-400 hover:text-yellow-500 transition text-sm">Fitur Kami</Link></li>
              <li><Link href="#desainer" className="text-gray-400 hover:text-yellow-500 transition text-sm">Cari Desainer</Link></li>
              <li><Link href="#proyek" className="text-gray-400 hover:text-yellow-500 transition text-sm">Inspirasi Proyek</Link></li>
              <li><Link href="/login" className="text-gray-400 hover:text-yellow-500 transition text-sm">Sign In</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">📍 Jakarta, Indonesia</li>
              <li className="text-gray-400 text-sm">📧 hello@matchnbuild.com</li>
              <li className="text-gray-400 text-sm">📞 +62 811 2345 6789</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Match n Build. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-white transition">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-white transition">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
